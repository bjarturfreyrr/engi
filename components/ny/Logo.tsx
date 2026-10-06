import { delay } from "./delay"

const Logo = () => {
  return (
    <a href="#top" aria-label="Móar forsíða" className="ny-logo">
      <span className="ny-logo__bars">
        <span className="load-bar" style={{ width: 30, background: "#3B82F6" }} />
        <span className="load-bar" style={delay(".12s", { width: 24, background: "#34D399" })} />
        <span className="load-bar" style={delay(".24s", { width: 28, background: "#E6EEF3" })} />
      </span>
      <span className="ny-logo__word">Móar</span>
    </a>
  )
}

export default Logo
