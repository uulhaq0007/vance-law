import Reveal from './Reveal'

/** Serif heading with the template's double-rule + slash ornament beneath. */
export default function SectionTitle({ title, text, align = 'left', light = false, className = '' }) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-[720px] text-center' : ''} ${className}`}>
      <Reveal>
        <h2 className={`sec-title ${light ? 'sec-title-light' : ''}`}>{title}</h2>
      </Reveal>
      <Reveal delay={80}>
        <div className={`ornament ${centered ? 'ornament-center' : ''}`}>
          <span className="ornament-slash">//</span>
        </div>
      </Reveal>
      {text && (
        <Reveal delay={150}>
          <p className={`mt-5 ${light ? 'text-white/65' : ''}`}>{text}</p>
        </Reveal>
      )}
    </div>
  )
}
