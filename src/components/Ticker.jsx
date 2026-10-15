const ITEMS = [
  'Laravel REST APIs','Sanctum Auth','Eloquent ORM','MySQL Schema Design',
  'Livewire Interfaces','PHP 8+ Features','SOLID Principles','Clean Architecture',
  'Queued Jobs & Events','JSON:API Conventions','Domain Modeling','Service Layer Pattern',
]

export default function Ticker() {
  // doubled for seamless loop
  const all = [...ITEMS, ...ITEMS]
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
