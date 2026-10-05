const links = [
  { name: "Smíðin", href: "#smidin" },
  { name: "Innifalið", href: "#innifalid" },
  { name: "Verkin", href: "#verkin" },
  { name: "Verð", href: "#verd" },
]

const Footer = () => {
  return (
    <footer className="ny-footer">
      <div className="ny-footer__inner">
        <div className="ny-footer__mark rv" aria-hidden="true">
          <span className="ny-footer__bars">
            <span className="ny-bar grow" style={{ width: "100%", background: "#3B82F6" }} />
            <span className="ny-bar grow s2" style={{ width: "80%", background: "#34D399" }} />
            <span className="ny-bar grow s3" style={{ width: "92%", background: "#E6EEF3" }} />
          </span>
          <span className="ny-footer__word">Móar</span>
        </div>
        <div className="ny-footer__bottom">
          <nav aria-label="Fótur">
            {links.map((link) => (
              <a key={link.href} href={link.href}>{link.name}</a>
            ))}
          </nav>
          <span>© {new Date().getFullYear()} Móar</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
