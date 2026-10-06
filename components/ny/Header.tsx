import Link from "next/link"
import Logo from "./Logo"
import { pages } from "./nav"

const Header = ({ current }: { current?: string }) => {
  return (
    <header className="ny-header">
      <div className="ny-header__inner">
        <Logo />
        <nav className="ny-nav" aria-label="Aðalvalmynd">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              prefetch={false}
              aria-current={current === page.href ? "page" : undefined}
            >
              {page.name}
            </Link>
          ))}
        </nav>
        <a className="ny-btn ny-btn--green" href="#samband">Fá tilboð</a>
      </div>
      <span className="ny-prog" aria-hidden="true" />
    </header>
  )
}

export default Header
