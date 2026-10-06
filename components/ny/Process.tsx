const steps = [
  { k: "Skref 01", title: "Spjall", desc: "Við förum yfir reksturinn þinn og hvað vefurinn þarf að gera." },
  { k: "Skref 02", title: "Hönnun", desc: "Við aðlögum vefinn að merkinu þínu, litum og efni." },
  { k: "Skref 03", title: "Í loftið", desc: "Vefurinn fer á lénið þitt og fyrsta mánaðargjaldið er innheimt." },
  { k: "Og svo", title: "Við sjáum um restina", desc: "Hýsing, uppfærslur og öryggi. Þú einbeitir þér að rekstrinum." },
]

const Process = () => {
  return (
    <section id="ferlid" className="ny-section ny-grid-bg">
      <div className="ny-proc">
        <div className="ny-proc__intro">
          <p className="ny-eyebrow rv">Ferlið</p>
          <h2 className="ny-h2 rv s2">Frá spjalli í loftið.</h2>
        </div>
        <div className="ny-proc__list">
          <span className="ny-proc__rail" aria-hidden="true" />
          <span className="tl" aria-hidden="true" />
          <ol>
            {steps.map((step) => (
              <li key={step.title} className="rv">
                <span className="ny-proc__node" aria-hidden="true" />
                <span className="ny-proc__k">{step.k}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Process
