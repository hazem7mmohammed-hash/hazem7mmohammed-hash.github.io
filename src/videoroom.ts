import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

interface RoomMember {
  el: RefObject<HTMLVideoElement | null>
  pause(): void
  resume(): void
  onBlur?: () => void
}

const members = new Set<RoomMember>()
let focused: RoomMember | null = null

function registerMember(member: RoomMember): () => void {
  members.add(member)
  return () => {
    members.delete(member)
    if (focused === member) {
      focused = null
      for (const other of members) other.resume()
    }
  }
}

function focusMember(member: RoomMember) {
  if (focused === member) return
  const prev = focused
  focused = member
  if (prev) prev.onBlur?.()
  for (const other of members) {
    if (other === member) continue
    other.onBlur?.()
    other.pause()
  }
}

function unfocusMember(member: RoomMember) {
  if (focused !== member) return
  focused = null
  for (const other of members) {
    if (other !== member) other.resume()
  }
}

export function useVideoRoom(
  active: boolean,
  el: RefObject<HTMLVideoElement | null>,
  onBlur?: () => void,
) {
  const onBlurRef = useRef(onBlur)
  const memberRef = useRef<RoomMember | null>(null)

  useEffect(() => {
    onBlurRef.current = onBlur
  })

  useEffect(() => {
    const node = el.current
    const member: RoomMember = {
      el,
      pause: () => {
        node?.pause()
      },
      resume: () => {},
      onBlur: () => onBlurRef.current?.(),
    }
    memberRef.current = member
    return registerMember(member)
  }, [el])

  useEffect(() => {
    const member = memberRef.current
    if (!member) return
    if (active) focusMember(member)
    else unfocusMember(member)
  }, [active])
}