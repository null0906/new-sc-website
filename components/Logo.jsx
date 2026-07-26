export default function Logo({ height = 32 }) {
  const w = height * (313 / 101)
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: height * 0.28,
        height,
      }}
    >
      <svg
        width={height}
        height={height}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 2 L36 8 V19 C36 28.5 29.5 35.5 20 38.5 C10.5 35.5 4 28.5 4 19 V8 Z"
          fill="var(--accent)"
        />
        <path
          d="M20 5.2 L32.8 10 V19 C32.8 26.9 27.6 32.7 20 35.2 C12.4 32.7 7.2 26.9 7.2 19 V10 Z"
          fill="none"
          stroke="rgb(var(--p-white-rgb) / 0.25)"
          strokeWidth="1"
        />
        <path
          d="M13.5 20.5 L17.5 24.5 L26.5 14.5"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 600,
          fontSize: height * 0.62,
          letterSpacing: '-0.01em',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        <span style={{ color: 'var(--white)' }}>Sec</span>
        <span style={{ color: 'var(--accent)' }}>Comply</span>
      </span>
    </span>
  )
}
