export default function Footer({ content }) {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-brand">H.AHA · haideralhajahmed2@gmail.com</span>
          <span className="footer-copy">{content.copy}</span>
          <div className="footer-links">
            <a href="https://github.com/Haider-Haj-Ahmed" target="_blank" rel="noreferrer">{content.links[0]}</a>
            <a href="https://t.me/haider_cz" target="_blank" rel="noreferrer">{content.links[1]}</a>
            <a href="https://instagram.com/haider_cz" target="_blank" rel="noreferrer">{content.links[2]}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
