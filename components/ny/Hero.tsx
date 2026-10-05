import { ArrowDown, ArrowRight, Check } from "lucide-react"
import { delay } from "./delay"

const layers = [
  { name: "Hönnun", variant: "ny-layer--blue", delay: ".7s", tick: "#FFFFFF", tickDelay: "1.4s" },
  { name: "Hýsing", variant: "ny-layer--green", delay: ".85s", tick: "#0C2233", tickDelay: "1.6s" },
  { name: "Viðhald", variant: "ny-layer--outline", delay: "1s", tick: "#34D399", tickDelay: "1.8s" },
]

const Hero = () => {
  return (
    <section id="top" className="ny-hero ny-grid-bg">
      <div className="ny-hero__glow" aria-hidden="true" />
      <div className="ny-hero__inner ny-wrap hero-out">
        <div className="ny-hero__text">
          <p className="ny-eyebrow load-up">Íslensk vefstofa</p>
          <h1>
            <span className="ln"><span style={delay(".15s")}>Vefsíðan þín,</span></span>
            <span className="ln"><span style={delay(".3s", { color: "#34D399" })}>í áskrift.</span></span>
          </h1>
          <p className="ny-hero__lead load-up" style={delay(".5s")}>
            Við hönnum, hýsum og sjáum um vefinn fyrir eitt fast mánaðargjald. Ekkert stofngjald og engin tæknivinna á þinni könnu.
          </p>
          <div className="ny-hero__ctas load-up" style={delay(".65s")}>
            <a className="ny-btn ny-btn--green" href="#verd">
              Sjá verðin <ArrowRight className="arr" size={18} aria-hidden="true" />
            </a>
            <a className="ny-btn ny-btn--ghost" href="#smidin">
              Sjáðu hvernig <ArrowDown className="arr" size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="ny-hero__card load-up" style={delay(".35s")}>
          <p className="ny-muted" style={{ margin: "0 0 6px", fontSize: 15 }}>Innifalið í áskriftinni</p>
          {layers.map((layer) => (
            <div key={layer.name} className={`ny-layer ${layer.variant} load-bar`} style={delay(layer.delay)}>
              <span>{layer.name}</span>
              <Check className="load-up" style={delay(layer.tickDelay)} size={26} strokeWidth={2.5} color={layer.tick} aria-hidden="true" />
            </div>
          ))}
          <p className="ny-live load-up" style={delay("2.1s", { margin: "8px 0 0", fontSize: 16, color: "#FFFFFF" })}>
            <span className="ny-live-dot pulse" />
            Fyrir eitt fast mánaðargjald
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
