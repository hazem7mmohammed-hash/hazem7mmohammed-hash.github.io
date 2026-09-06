import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            requestAnimationFrame(() => entry.target.classList.add('is-visible'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Reads the natural intrinsic dimensions of a <video> element once its
 * metadata is available and returns the width / height ratio (or null while
 * unknown). The caller uses this ratio to size the container so the video is
 * displayed fully — never cropped, stretched or letterboxed by a fixed box.
 */
export function useVideoRatio<T extends HTMLVideoElement>(videoRef: RefObject<T | null>) {
  const [ratio, setRatio] = useState<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (video.videoWidth > 0 && video.videoHeight > 0) {
      setRatio(video.videoWidth / video.videoHeight)
      return
    }

    const onLoaded = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        setRatio(video.videoWidth / video.videoHeight)
      }
    }
    video.addEventListener('loadedmetadata', onLoaded)
    return () => video.removeEventListener('loadedmetadata', onLoaded)
  }, [videoRef])

  return ratio
}

export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [locked])
}

const existsCache = new Map<string, Promise<boolean>>()

function fileExists(src: string): Promise<boolean> {
  const cached = existsCache.get(src)
  if (cached) return cached
  const p = fetch(src, { method: 'HEAD' })
    .then((res) => res.ok)
    .catch(() => false)
  existsCache.set(src, p)
  return p
}

/**
 * Reports whether a static asset exists on the server, so a section can be
 * hidden while it has no video (the data stays in content.ts and the section
 * returns automatically once the video file is added). Returns null while the
 * check is in flight.
 */
export function useFileExists(src: string): boolean | null {
  const [exists, setExists] = useState<boolean | null>(null)

  useEffect(() => {
    let alive = true
    if (!src) return
    fileExists(src).then((v) => {
      if (alive) setExists(v)
    })
    return () => {
      alive = false
    }
  }, [src])

  return exists
}

export function useAnyFileExists(srcs: string[]): boolean | null {
  const [anyExists, setAnyExists] = useState<boolean | null>(null)

  useEffect(() => {
    let alive = true
    if (srcs.length === 0) return
    Promise.all(srcs.map(fileExists)).then((vals) => {
      if (alive) setAnyExists(vals.some(Boolean))
    })
    return () => {
      alive = false
    }
  }, [srcs])

  return anyExists
}

/**
 * Per-file existence flags matching the order of `srcs`, so a section can
 * render only the cards whose video files actually exist. Returns null while
 * the check is in flight.
 */
export function useExistingVideos(srcs: string[]): boolean[] | null {
  const [flags, setFlags] = useState<boolean[] | null>(null)

  useEffect(() => {
    let alive = true
    if (srcs.length === 0) return
    Promise.all(srcs.map(fileExists)).then((vals) => {
      if (alive) setFlags(vals)
    })
    return () => {
      alive = false
    }
  }, [srcs])

  return flags
}