import { Check } from "lucide-react"

const items = [
  { title: "Vefhönnun", desc: "Ein síða eða allt að 10 undirsíður eftir leið, lagaðar að merkinu þínu. Virkar jafnvel í síma og tölvu." },
  { title: "Vefumsjónarkerfi", desc: "Þú breytir texta og myndum sjálf/ur, hvenær sem er." },
  { title: "Hýsing, SSL og lén", desc: "Hraður og öruggur vefur á þínu eigin léni." },
  { title: "Viðhald og uppfærslur", desc: "Tæknilegt viðhald og öryggisuppfærslur. Við vöktum, þú sefur." },
]

const Included = () => {
  return (
    <section id="innifalid" className="ny-section">
      <div className="ny-incl">
        <div className="ny-incl__intro">
          <p className="ny-eyebrow rv">Innifalið</p>
          <h2 className="ny-h2 rv s2">Þrjú lög.<br /><span style={{ color: "#8FA6B5" }}>Eitt gjald.</span></h2>
          <div className="ny-incl__layers" aria-hidden="true">
            <div className="ny-layer ny-layer--blue grow">Hönnun</div>
            <div className="ny-layer ny-layer--green grow s2">Hýsing</div>
            <div className="ny-layer ny-layer--outline grow s3">Viðhald</div>
          </div>
        </div>
        <ul className="ny-spec">
          {items.map((item) => (
            <li key={item.title} className="rv-l">
              <Check size={22} strokeWidth={2.5} color="#34D399" aria-hidden="true" />
              <span className="ny-spec__t"><b>{item.title}</b><span>{item.desc}</span></span>
            </li>
          ))}
          <li className="rv-l">
            <Check size={22} strokeWidth={2.5} color="#3B82F6" aria-hidden="true" />
            <span className="ny-spec__t">
              <b>Bókanir <span className="ny-tag">Bókun</span></b>
              <span>Bókunarkerfi á vefnum, með áminningum í tölvupósti til viðskiptavina þinna.</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Included
