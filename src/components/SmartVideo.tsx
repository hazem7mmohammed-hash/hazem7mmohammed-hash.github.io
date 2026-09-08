import { forwardRef, useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { useVideoRoom } from '../videoroom'
import { IconPlay, IconSound, IconMuted } from './icons'

interface SmartVideoProps {
  src: string
  poster?: string
  className?: string
  muted?: boolean
  loop?: boolean
  controls?: boolean
  interactive?: boolean
  fallback?: ReactNode
}

function formatTime(value: number): string {
  if (!Number.isFinite(value) || value < 0) return '0:00'
  const m = Math.floor(value / 60)
  const s = Math.floor(value % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export const SmartVideo = forwardRef<HTMLVideoElement, SmartVideoProps>(function SmartVideo(
  {
    src,
    poster,
    className,
    muted = true,
    loop = true,
    controls = false,
    interactive = true,
    fallback = null,
  },
  forwardedRef,
) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [available, setAvailable] = useState(true)
  const [revealed, setRevealed] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)

  const wall = !controls && interactive
  const effectiveMuted = controls ? muted : revealed ? !soundOn : true

  const playVideo = () => {
    const video = videoRef.current
    if (!video) return
    const play = video.play()
    if (play !== undefined) play.catch(() => {})
  }

  const setRefs = (el: HTMLVideoElement | null) => {
    videoRef.current = el
    if (typeof forwardedRef === 'function') {
      forwardedRef(el)
    } else if (forwardedRef) {
      forwardedRef.current = el
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = effectiveMuted
  }, [effectiveMuted])

  useVideoRoom(wall && revealed, videoRef, () => {
    setRevealed(false)
    setSoundOn(false)
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    setPosition(0)
  })

  const toggleReveal = () => {
    if (!wall) return
    const next = !revealed
    if (next) {
      setSoundOn(true)
      setRevealed(next)
      const video = videoRef.current
      if (!video) return
      video.muted = false
      playVideo()
    } else {
      setRevealed(next)
      videoRef.current?.pause()
    }
  }

  const toggleSound = () => {
    if (!revealed) return
    const next = !soundOn
    setSoundOn(next)
    const video = videoRef.current
    if (!video) return
    video.muted = !next
    playVideo()
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = Number(e.target.value)
    playVideo()
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const onLoaded = () => setDuration(video.duration || 0)
    const onTime = () => setPosition(video.currentTime)
    video.addEventListener('loadedmetadata', onLoaded)
    video.addEventListener('timeupdate', onTime)
    video.addEventListener('seeked', onTime)
    setDuration(video.duration || 0)
    return () => {
      video.removeEventListener('loadedmetadata', onLoaded)
      video.removeEventListener('timeupdate', onTime)
      video.removeEventListener('seeked', onTime)
    }
  }, [videoRef])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !(wall && revealed)) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) video.pause()
        }
      },
      { threshold: 0 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [wall, revealed, videoRef])

  const max = duration > 0 ? duration : 1
  const value = Math.min(position, max)
  const progress = duration > 0 ? `${(Math.max(value, 0) / max) * 100}%` : '0%'

  return (
    <>
      <video
        ref={setRefs}
        className={className}
        src={src}
        poster={poster}
        muted={effectiveMuted}
        loop={loop}
        controls={controls}
        playsInline
        preload="metadata"
        onClick={toggleReveal}
        onError={() => setAvailable(false)}
      />
      {wall && !revealed && available && (
        <button
          type="button"
          className="vroom__center"
          aria-label="Play"
          onClick={toggleReveal}
        >
          <span className="vroom__center-icon">
            <IconPlay size={20} />
          </span>
        </button>
      )}
      {wall && revealed && available && (
        <div
          className="vroom"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}
        >
          <input
            className="vroom__range"
            type="range"
            min={0}
            max={max}
            step={0.01}
            value={value}
            onChange={handleSeek}
            aria-label="Seek"
            style={{ '--p': progress } as CSSProperties}
          />
          <div className="vroom__meta">
            <span>
              {formatTime(value)} / {formatTime(duration)}
            </span>
            <button
              type="button"
              className={`vroom__sound ${soundOn ? 'is-on' : ''}`}
              onClick={(e) => {
                e.stopPropagation()
                toggleSound()
              }}
              aria-pressed={soundOn}
              aria-label={soundOn ? 'Mute' : 'Unmute'}
            >
              {soundOn ? <IconSound size={14} /> : <IconMuted size={14} />}
            </button>
          </div>
        </div>
      )}
      {!available && fallback}
    </>
  )
})