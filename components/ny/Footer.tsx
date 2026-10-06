import Link from "next/link"
import { pages } from "./nav"

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
            {pages.map((page) => (
              <Link key={page.href} href={page.href} prefetch={false}>{page.name}</Link>
            ))}
          </nav>
          <span>© {new Date().getFullYear()} Móar</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
