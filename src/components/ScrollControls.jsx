import { useEffect, useState } from 'react'
import WhatsAppButton from './WhatsAppButton'

export default function ScrollControls() {
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const updateScrollPosition = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setAtTop(window.scrollY <= 0)
      setAtBottom(window.scrollY >= scrollableHeight - 1)
    }

    updateScrollPosition()
    window.addEventListener('scroll', updateScrollPosition, { passive: true })
    window.addEventListener('resize', updateScrollPosition)

    return () => {
      window.removeEventListener('scroll', updateScrollPosition)
      window.removeEventListener('resize', updateScrollPosition)
    }
  }, [])

  return (
    <div className="floating-controls" aria-label="Contact and page scroll controls">
      <WhatsAppButton />
      <div className="scroll-controls" aria-label="Page scroll controls">
        <button
          type="button"
          aria-label="Scroll to top"
          disabled={atTop}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 14 6-6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Scroll to bottom"
          disabled={atBottom}
          onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 10 6 6 6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
