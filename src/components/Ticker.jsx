export default function Ticker({ items }) {
  const all = [...items, ...items]

  return (
    <div id="ticker" aria-hidden="true">
      <div className="ticker-track">
        {all.map((item, i) => (
          <span key={i} className="ticker-item">
            <span className="dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
