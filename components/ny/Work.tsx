"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

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

// .htrack er position: relative, svo offsetLeft spjaldanna miðast við brautina
const padLeft = (el: HTMLElement) => parseFloat(getComputedStyle(el).paddingLeft)

// Hringekja sem notandinn flettir sjálfur: strjúka, skruna til hliðar eða örvar
const Work = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const update = () => {
      const cards = Array.from(track.children) as HTMLElement[]
      const left = track.scrollLeft + padLeft(track)
      // Spjaldið næst vinstri brún telst vera það sem er sýnt
      let closest = 0
      cards.forEach((card, i) => {
        if (Math.abs(card.offsetLeft - left) < Math.abs(cards[closest].offsetLeft - left)) closest = i
      })
      setIndex(closest)
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 4)
    }
    update()
    track.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      track.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  const go = (dir: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const cards = Array.from(track.children) as HTMLElement[]
    const target = cards[Math.min(Math.max(index + dir, 0), cards.length - 1)]
    track.scrollTo({ left: target.offsetLeft - padLeft(track) })
  }

  return (
    <section id="verkin" className="ny-work">
      <div className="ny-work__pin">
        <div className="ny-work__head">
          <div>
            <p className="ny-eyebrow rv">Verkin</p>
            <h2 className="ny-h2 rv s2">Vefir í rekstri hjá okkur.</h2>
          </div>
          <div className="ny-work__nav">
            <span className="ny-work__count" aria-hidden="true">{index + 1}/{projects.length}</span>
            <button type="button" className="ny-arrow" onClick={() => go(-1)} disabled={index === 0} aria-label="Fyrra verk">
              <ArrowLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" className="ny-arrow" onClick={() => go(1)} disabled={atEnd} aria-label="Næsta verk">
              <ArrowRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div ref={trackRef} className="htrack" tabIndex={0} role="region" aria-label="Verkin okkar">
          {projects.map((project) => {
            const content = (
              <>
                <div className="ny-case__frame">
                  <div className="ny-case__bar">
                    <span className="ny-dots"><span /><span /><span /></span>
                    {project.domain}
                  </div>
                  <div className="ny-case__img">
                    <Image
                      src={project.image}
                      alt={`Vefsíða ${project.title}`}
                      fill
                      sizes="(max-width: 860px) 78vw, 760px"
                      style={project.objectPosition ? { objectPosition: project.objectPosition } : undefined}
                    />
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
