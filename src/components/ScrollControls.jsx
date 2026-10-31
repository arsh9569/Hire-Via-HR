import { useEffect, useState } from 'react'

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
      <a
        className="whatsapp-button"
        href="https://wa.me/919220762559"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3.2A12.73 12.73 0 0 0 5.18 22.56L3.5 28.7l6.3-1.65A12.73 12.73 0 1 0 16.04 3.2Zm0 23.2c-1.97 0-3.9-.53-5.58-1.55l-.4-.24-3.74.98 1-3.64-.26-.4A10.4 10.4 0 1 1 16.04 26.4Zm5.72-7.8c-.31-.16-1.86-.92-2.15-1.03-.29-.1-.5-.16-.71.16-.21.31-.82 1.03-1 1.24-.19.2-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.86-1.74-2.17-.19-.31-.02-.48.14-.64.14-.14.31-.37.46-.55.15-.19.2-.32.31-.53.1-.2.05-.39-.03-.54-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.67.76.24 1.45.21 2 .13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
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
