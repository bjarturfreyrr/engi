import { Check, Lock, Pencil } from "lucide-react"

const steps = [
  { n: "01", title: "Grind", desc: "Við skipuleggjum síðurnar út frá rekstrinum þínum." },
  { n: "02", title: "Hönnun", desc: "Merkið þitt, litir og letur fara á sinn stað." },
  { n: "03", title: "Efni", desc: "Textar og myndir, sem þú getur svo breytt sjálf/ur." },
  { n: "04", title: "Í loftið", desc: "Á lénið þitt, með SSL. Við tökum við rekstrinum." },
]

const chips = ["SSL virkt", "Virkar í síma", "Tengt léninu þínu", "Við vöktum vefinn"]

const cards = [
  { ico: "paint-g", color: "#34D399", lines: ["txt", "txt t3"] },
  { ico: "paint", color: "#2563EB", lines: ["txt t2", "txt t3"] },
  { ico: "paint-g", color: "#34D399", lines: ["txt t3", "txt t3"] },
]

// Myndræn sýning: vefur byggist upp skref fyrir skref á meðan skrunað er (sjá ny.css, --build)
const Build = () => {
  return (
    <section id="smidin" className="ny-build">
      <div className="ny-build__pin ny-wrap">
        <div className="ny-build__text">
          <p className="ny-eyebrow">Smíðin</p>
          <h2 className="ny-h2">Svona verður vefurinn þinn til.</h2>
          <ol className="ny-steps">
            {steps.map((step, i) => (
              <li key={step.n} className={`st${i + 1}`}>
                <span className="ny-steps__n">{step.n}</span>
                <span className="ny-steps__t">
                  <b>{step.title}</b>
                  <span>{step.desc}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="ny-track" aria-hidden="true"><span className="bprog" /></div>
        </div>

        <div className="ny-build__visual" aria-hidden="true">
          <div className="ny-browser">
            <div className="ny-browser__bar">
              <span className="ny-dots"><span /><span /><span /></span>
              <span className="ny-url">
                <span className="url-old">Drög</span>
                <span className="url-new"><Lock size={12} strokeWidth={2.5} color="#34D399" />fyrirtaekid.is</span>
              </span>
              <span className="ny-browser__live"><span className="ny-live-dot pulse" />Í loftinu</span>
            </div>

            <div className="ny-browser__body">
              <div className="wire" />
              <div className="ny-mock-nav blk dash">
                <span className="ny-line paint-g" style={{ width: 70, height: 12, borderRadius: 3, background: "#34D399" }} />
                <span className="ny-mock-nav__links"><span /><span /><span /></span>
              </div>

              <div className="ny-mock-hero blk b2 paint">
                <div className="ny-mock-hero__text">
                  <span className="ny-mock-head">
                    <span className="old-head">
                      <span className="ny-line txt" style={{ width: "90%", height: 17, background: "#FFFFFF" }} />
                      <span className="ny-line txt t2" style={{ width: "64%", height: 17, background: "#FFFFFF" }} />
                    </span>
                    <span className="new-head">Velkomin til okkar</span>
                  </span>
                  <span className="ny-line txt t3" style={{ width: "60%", height: 9, background: "#BFD3FF" }} />
                  <span className="ny-line paint-g" style={{ width: 92, height: 26, borderRadius: 5, background: "#34D399", marginTop: 4 }} />
                </div>
                <div className="photo">
                  <span className="sun" />
                  <svg viewBox="0 0 100 60" preserveAspectRatio="none">
                    <polygon points="0,60 0,34 28,10 50,32 66,18 100,44 100,60" fill="#34D399" />
                    <polygon points="0,60 0,46 34,28 60,48 82,36 100,50 100,60" fill="#0E7A55" />
                  </svg>
                </div>
              </div>

              <div className="ny-mock-cards blk b3">
                {cards.map((card, i) => (
                  <div key={i} className="ny-mock-card dash">
                    <span className={`ico ${card.ico}`} style={{ background: card.color }} />
                    <span className={`ny-line ${card.lines[0]}`} style={{ width: "80%" }} />
                    <span className={`ny-line ${card.lines[1]}`} style={{ width: "55%" }} />
                  </div>
                ))}
              </div>

              <div className="cms">
                <span className="cms__top">
                  <span>Vefumsjón</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Pencil size={13} />Forsíða</span>
                </span>
                <span className="cms__label">Fyrirsögn</span>
                <span className="cms__field"><span className="cms-type">Velkomin til okkar</span><span className="cms__caret" /></span>
                <span className="cms-save"><Check size={12} strokeWidth={3} />Vistað</span>
              </div>

              <div className="toast">
                <span className="toast__ico"><Check size={12} strokeWidth={3.2} color="#0C2233" /></span>
                Vefurinn er kominn í loftið
              </div>
            </div>
          </div>

          <div className="ny-chips">
            {chips.map((chip, i) => (
              <span key={chip} className={`ny-chip chip ${i ? `c${i + 1}` : ""}`}>
                <span className="ny-live-dot" />{chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Build
