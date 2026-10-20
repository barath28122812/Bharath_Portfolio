import type { CSSProperties } from 'react'

/** Inline styles can contain Framer CSS custom properties (--token-*). */
export type FramerStyle = CSSProperties & Record<string, string | number | undefined>
