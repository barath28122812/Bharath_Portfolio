import { useEffect, useMemo, useState } from 'react'
import { useChat } from './ChatContext'

const ACCENT = 'var(--token-6a6d1eb8-2687-4444-ba52-f31754121a4e, rgb(2, 212, 245))'
const BG = 'var(--token-8f8b32ea-2243-4c94-90d7-9dbc1e52ffc2, rgb(255, 255, 255))'
const TEXT = 'var(--token-e354a3cd-fc10-4572-8441-4fe955f17d9e, rgb(0, 0, 0))'
const MUTED = 'var(--token-2c4d0fad-06de-414f-b048-811f13183390, rgb(87, 87, 87))'
const SURFACE = 'var(--token-fb315f8f-abaa-4742-a977-7745bac80b10, rgb(242, 242, 242))'
const BORDER = 'var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224, 224, 224, 0.63))'

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
]

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

function isPastDay(d: Date) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return d.getTime() < today.getTime()
}

function isSlotBooked(date: Date, slot: string) {
  const hour = parseInt(slot, 10)
  if (isSameDay(date, new Date())) {
    const nowHour = new Date().getHours()
    if (hour <= nowHour) return true
  }
  return (date.getDate() + hour) % 6 === 0
}

function ChatWidget() {
  const { open, closeChat } = useChat()
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date()
    return new Date(d.getFullYear(), d.getMonth(), 1)
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [booked, setBooked] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const grid = useMemo(() => {
    const first = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1)
    const offset = first.getDay()
    const daysInMonth = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 0).getDate()
    const cells: Array<Date | null> = []
    for (let i = 0; i < offset; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push(new Date(viewDate.getFullYear(), viewDate.getMonth(), d))
    }
    while (cells.length % 7 !== 0) cells.push(null)
    return cells
  }, [viewDate])

  useEffect(() => {
    if (open) {
      setSelectedDate(null)
      setSelectedTime(null)
      setName('')
      setEmail('')
      setError('')
      setBooked(false)
      setSubmitting(false)
      const d = new Date()
      setViewDate(new Date(d.getFullYear(), d.getMonth(), 1))
    }
  }, [open])

  if (!open) return null

  const pickDate = (d: Date) => {
    setSelectedDate(d)
    setSelectedTime(null)
    setError('')
  }

  const pickTime = (t: string) => {
    setSelectedTime(t)
    setError('')
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  if (!name.trim()) {
    setError('Please enter your name.')
    return
  }
  if (!emailOk) {
    setError('Please enter a valid email address.')
    return
  }
  if (!selectedDate || !selectedTime) {
    setError('Please select a date and time.')
    return
  }
  setError('')
  setSubmitting(true)
  try {
    const res = await fetch('https://formsubmit.co/ajax/865194c80d22b02b2a7e9d283505369d', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        _replyto: email.trim(),
        date: selectedDate.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        time: selectedTime,
        _subject: `Call booking request from ${name.trim()}`,
        _template: 'table',
      }),
    })
    if (!res.ok) throw new Error('Email service rejected the booking.')
    const result = await res.json() as { success?: boolean | string }
    if (!result.success) throw new Error('Email service rejected the booking.')
    setBooked(true)
  } catch {
    setError('Could not send your booking. Please try again.')
  } finally {
    setSubmitting(false)
  }
}

  const dateLabel = selectedDate
    ? selectedDate.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })
    : ''

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 12px',
    borderRadius: 10,
    border: `1px solid ${BORDER}`,
    background: SURFACE,
    color: TEXT,
    fontSize: '0.85rem',
    outline: 'none',
  }

  return (
    <>
      <style>{`
        @keyframes vp-modal-in {
          from { opacity: 0; transform: translateY(18px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes vp-backdrop-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 640px) {
          .vp-book-split { grid-template-columns: 1fr !important; }
          .vp-book-left { border-right: none !important; border-bottom: 1px solid var(--token-5d23e02d-37c1-4334-b3aa-070b54ae1264, rgba(224,224,224,0.63)) !important; }
        }
      `}</style>
      <div
        onClick={closeChat}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.55)',
          zIndex: 99980,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 16,
          animation: 'vp-backdrop-in 0.2s ease',
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a call with Bharath"
          onClick={e => e.stopPropagation()}
          style={{
            width: 760,
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 32px)',
            background: BG,
            borderRadius: 20,
            border: `1px solid ${BORDER}`,
            boxShadow: '0 30px 80px -16px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'inherit',
            animation: 'vp-modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            style={{
              background: ACCENT,
              color: '#fff',
              padding: '14px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 'none',
            }}
          >
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.98rem', letterSpacing: '0.2px' }}>
                {booked ? 'Request Sent' : 'Book a Call with Bharath'}
              </div>
              <div style={{ fontSize: '0.72rem', opacity: 0.92, marginTop: 2 }}>
                {booked ? "We'll be in touch soon." : 'Pick a date, choose a time and share your details'}
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close"
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: '#fff',
                width: 30,
                height: 30,
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {booked ? (
            <div style={{ padding: '34px 24px', textAlign: 'center' }}>
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: ACCENT,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div style={{ fontWeight: 700, fontSize: '1.05rem', color: TEXT }}>
                Your booking request has been sent.
              </div>
              <p style={{ fontSize: '0.85rem', color: MUTED, margin: '10px 0 2px' }}>
                {name ? name.split(' ')[0] : 'Hi'}, your request for{' '}
                <strong style={{ color: TEXT }}>{dateLabel}</strong> at{' '}
                <strong style={{ color: TEXT }}>{selectedTime}</strong> was sent to Bharath. The call is confirmed once Bharath replies.
              </p>
              <button
                type="button"
                onClick={closeChat}
                style={{
                  marginTop: 18,
                  background: TEXT,
                  color: BG,
                  border: 'none',
                  borderRadius: 90,
                  padding: '10px 30px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Done
              </button>
            </div>
          ) : (
            <div className="vp-book-split" style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 300px) 1fr', minHeight: 420 }}>
              <div
                className="vp-book-left"
                style={{
                  padding: 18,
                  borderRight: `1px solid ${BORDER}`,
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 0,
                }}
              >
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: MUTED, marginBottom: 10 }}>
                  Select a date
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                  <button
                    type="button"
                    aria-label="Previous month"
                    onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      border: `1px solid ${BORDER}`,
                      background: SURFACE,
                      color: TEXT,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ‹
                  </button>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: TEXT }}>
                    {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
                  </div>
                  <button
                    type="button"
                    aria-label="Next month"
                    onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 10,
                      border: `1px solid ${BORDER}`,
                      background: SURFACE,
                      color: TEXT,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    ›
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 6 }}>
                  {WEEKDAYS.map((w, i) => (
                    <div key={i} style={{ textAlign: 'center', fontSize: '0.68rem', fontWeight: 700, color: MUTED }}>
                      {w}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
                  {grid.map((d, i) => {
                    if (!d) return <div key={i} />
                    const disabled = isPastDay(d) || d.getDay() === 0
                    const active = selectedDate ? isSameDay(d, selectedDate) : false
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={disabled}
                        onClick={() => pickDate(d)}
                        style={{
                          aspectRatio: '1',
                          borderRadius: 10,
                          border: active ? `1.5px solid ${ACCENT}` : 'none',
                          background: active ? ACCENT : 'transparent',
                          color: active ? '#fff' : disabled ? MUTED : TEXT,
                          cursor: disabled ? 'default' : 'pointer',
                          fontSize: '0.78rem',
                          opacity: disabled ? 0.35 : 1,
                          transition: 'background 0.15s',
                        }}
                      >
                        {d.getDate()}
                      </button>
                    )
                  })}
                </div>

                <p style={{ fontSize: '0.68rem', color: MUTED, marginTop: 'auto', paddingTop: 12 }}>
                  Sundays are not available.
                </p>
              </div>

              <div style={{ padding: 18, overflowY: 'auto', minWidth: 0 }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: MUTED, marginBottom: 4 }}>
                  Select a time
                </div>
                <div style={{ fontSize: '0.85rem', color: TEXT, fontWeight: 600, marginBottom: 12 }}>
                  {dateLabel || 'Pick a date on the left'}
                </div>

                {!selectedDate && (
                  <p style={{ fontSize: '0.8rem', color: MUTED }}>
                    Choose an available day on the calendar to see open time slots.
                  </p>
                )}

                {selectedDate && (
                  <>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginBottom: 16 }}>
                      {TIME_SLOTS.map(t => {
                        const bookedSlot = isSlotBooked(selectedDate, t)
                        const active = selectedTime === t
                        return (
                          <button
                            key={t}
                            type="button"
                            disabled={bookedSlot}
                            onClick={() => pickTime(t)}
                            style={{
                              padding: '9px 0',
                              borderRadius: 90,
                              border: active ? `1.5px solid ${ACCENT}` : `1px solid ${BORDER}`,
                              background: active ? ACCENT : SURFACE,
                              color: active ? '#fff' : bookedSlot ? MUTED : TEXT,
                              fontSize: '0.8rem',
                              cursor: bookedSlot ? 'default' : 'pointer',
                              opacity: bookedSlot ? 0.4 : 1,
                            }}
                          >
                            {t}
                          </button>
                        )
                      })}
                    </div>

                    {selectedTime && (
                      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: MUTED }}>
                          Your details
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: MUTED, marginBottom: 5 }}>Your name</label>
                          <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="e.g. Janani"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 600, color: MUTED, marginBottom: 5 }}>Email address</label>
                          <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            style={inputStyle}
                          />
                        </div>
                        {error && <div style={{ fontSize: '0.78rem', color: '#d64545' }}>{error}</div>}
                        <button
                          type="submit"
                          disabled={submitting}
                          style={{
                            background: ACCENT,
                            color: '#fff',
                            border: 'none',
                            borderRadius: 90,
                            padding: '11px 0',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            cursor: submitting ? 'default' : 'pointer',
                            opacity: submitting ? 0.7 : 1,
                          }}
                        >
                          {submitting ? 'Saving…' : 'Confirm Booking'}
                        </button>
                      </form>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ChatWidget
