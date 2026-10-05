import Logo from "./Logo"

const links = [
  { name: "Smíðin", href: "#smidin" },
  { name: "Innifalið", href: "#innifalid" },
  { name: "Verkin", href: "#verkin" },
  { name: "Verð", href: "#verd" },
]

const Header = () => {
  return (
    <header className="ny-header">
      <div className="ny-header__inner">
        <Logo />
        <nav className="ny-nav" aria-label="Aðalvalmynd">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.name}</a>
          ))}
        </nav>
        <a className="ny-btn ny-btn--green" href="#samband">Fá tilboð</a>
      </div>
      <span className="ny-prog" aria-hidden="true" />
    </header>
  )
}

export default Header
