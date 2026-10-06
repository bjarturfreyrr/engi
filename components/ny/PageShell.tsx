import Header from "./Header"
import Contact from "./Contact"
import Footer from "./Footer"

// Rammi fyrir sérsíður: haus, efni síðunnar, sambandsform og fótur
const PageShell = ({ current, title, children }: { current: string; title: string; children: React.ReactNode }) => {
  return (
    <>
      <a className="ny-skip" href="#efni">Fara beint í efni</a>
      <Header current={current} />
      <main id="efni">
        {/* Kaflarnir nota h2, svo síðan fær sjónrænt falinn h1 fyrir skjálesara og leitarvélar */}
        <h1 className="ny-sr">{title}</h1>
        {children}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default PageShell
