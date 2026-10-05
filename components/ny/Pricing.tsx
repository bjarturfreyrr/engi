import { ArrowRight, Check } from "lucide-react"

const plans = [
  {
    name: "Grunnpakki",
    n: "01",
    lead: "Allt sem lítið fyrirtæki þarf.",
    price: "17.990",
    features: [
      "Allt að 5 undirsíður",
      "Vefumsjón og sambandsform",
      "Hýsing, SSL og lén",
      "Viðhald og uppfærslur",
      "30 mín. af breytingum á mánuði",
    ],
    cta: "Velja grunnpakka",
    dark: false,
  },
  {
    name: "Bókunarpakki",
    n: "02",
    lead: "Fyrir stofur sem taka við bókunum.",
    price: "23.990",
    features: [
      "Allt í grunnpakka",
      "Tenging við bókunarkerfi, t.d. Noona",
      "Bókunarhnappur eða innfellt viðmót",
    ],
    cta: "Velja bókunarpakka",
    dark: true,
  },
]

const Pricing = () => {
  return (
    <section id="verd" className="ny-price">
      <div className="ny-price__inner">
        <div className="ny-price__head">
          <div>
            <p className="ny-eyebrow rv">Verð</p>
            <h2 className="ny-h2 rv s2">Ekkert stofngjald.<br />Bara áskrift.</h2>
          </div>
          <p className="rv s3">Þú greiðir fyrst þegar vefurinn fer í loftið. Öll verð eru án vsk.</p>
        </div>
        <div className="ny-plans">
          {plans.map((plan) => (
            <div key={plan.name} className={`ny-plan clip-up ${plan.dark ? "ny-plan--dark" : ""}`}>
              <div className="ny-plan__bar">
                <span>{plan.name}</span>
                <span style={plan.dark ? { color: "#34D399" } : undefined}>{plan.n}</span>
              </div>
              <div className="ny-plan__body">
                <p>{plan.lead}</p>
                <div className="ny-plan__price">
                  <b>{plan.price}</b>
                  <span>kr./mán.</span>
                </div>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={18} strokeWidth={3} color={plan.dark ? "#34D399" : "#0E7A55"} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a className={`ny-btn ${plan.dark ? "ny-btn--green" : "ny-btn--dark-outline"}`} href="#samband">
                  {plan.cta} <ArrowRight className="arr" size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="ny-price__note rv">
          8 mánaða binditími frá því vefurinn fer í loftið. Eftir það getur þú keypt vefinn eða haldið áfram í áskrift.
        </p>
      </div>
    </section>
  )
}

export default Pricing
