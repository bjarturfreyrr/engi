import Image from "next/image"

type Project = {
  title: string
  domain: string
  url?: string
  image: string
  meta: string
  // Breiðar skjámyndir: festa vinstri brún svo textinn klippist ekki
  objectPosition?: string
}

const projects: Project[] = [
  { title: "Aurlind", domain: "aurlind.is", url: "https://aurlind.is", image: "/aurlind-2026.jpg", meta: "Fasteignafjárfestingar · Hönnun, viðhald, hýsing", objectPosition: "left top" },
  { title: "Týr", domain: "Týr · F.U.S. í Kópavogi", image: "/tyr.jpg", meta: "Félagasamtök · Hönnun, viðhald, hýsing", objectPosition: "left top" },
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
          {projects.map((project) => {
            const content = (
              <>
                <div className="ny-case__frame">
                  <div className="ny-case__bar">
                    <span className="ny-dots"><span /><span /><span /></span>
                    {project.domain}
                  </div>
                  <div className="ny-case__img">
                    <Image src={project.image} alt={`Vefsíða ${project.title}`} fill sizes="(max-width: 860px) 78vw, 760px" style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined} />
                  </div>
                </div>
                <div className="ny-case__meta">
                  <b>{project.title}</b>
                  <span>{project.meta}</span>
                </div>
              </>
            )
            // Verk án opinberrar slóðar eru sýnd án hlekks
            return project.url ? (
              <a key={project.title} className="ny-case" href={project.url} target="_blank" rel="noopener noreferrer">{content}</a>
            ) : (
              <div key={project.title} className="ny-case">{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Work
