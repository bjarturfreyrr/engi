import Image from "next/image"

const projects = [
  { title: "Chad Grooming", domain: "chadgrooming.is", url: "https://chadgrooming.is", image: "/chadgrooming2.png", meta: "Netverslun · Hönnun, viðhald, hýsing" },
  { title: "Thor Travel", domain: "thortravel.is", url: "https://thortravel.is", image: "/thor.png", meta: "Ferðaþjónusta · Viðhald, hýsing" },
  { title: "K R Law", domain: "iplaw.is", url: "https://iplaw.is", image: "/krlaw.png", meta: "Lögfræðistofa · Hönnun, viðhald, hýsing" },
]

// Kaflinn situr fastur á meðan verkin renna lárétt (sjá ny.css, --hs)
const Work = () => {
  return (
    <section id="verkin" className="ny-work">
      <div className="ny-work__pin">
        <div className="ny-work__head">
          <div>
            <p className="ny-eyebrow">Verkin</p>
            <h2 className="ny-h2">Vefir í rekstri hjá okkur.</h2>
          </div>
          <div className="ny-work__hint ny-hide-sm" aria-hidden="true">
            Skrunaðu<span className="ny-track"><span className="hbar" /></span>
          </div>
        </div>
        <div className="htrack">
          {projects.map((project) => (
            <a key={project.url} className="ny-case" href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="ny-case__frame">
                <div className="ny-case__bar">
                  <span className="ny-dots"><span /><span /><span /></span>
                  {project.domain}
                </div>
                <div className="ny-case__img">
                  <Image src={project.image} alt={`Vefsíða ${project.title}`} fill sizes="(max-width: 860px) 78vw, 760px" />
                </div>
              </div>
              <div className="ny-case__meta">
                <b>{project.title}</b>
                <span>{project.meta}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
