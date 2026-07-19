import CareOSHeader from './components/CareOSHeader.jsx'
import CareOSHero from './sections/CareOSHero.jsx'
import ProjectOverview from './sections/ProjectOverview.jsx'
import BusinessChallenge from './sections/BusinessChallenge.jsx'
import SolutionOverview from './sections/SolutionOverview.jsx'
import BusinessAnalysis from './sections/BusinessAnalysis.jsx'
import SystemArchitecture from './sections/SystemArchitecture.jsx'
import Applications from './sections/Applications.jsx'
import DatabaseDesign from './sections/DatabaseDesign.jsx'
import TechnologyStack from './sections/TechnologyStack.jsx'
import DevelopmentJourney from './sections/DevelopmentJourney.jsx'
import Gallery from './sections/Gallery.jsx'
import './careos.css'

export default function CareOSPage() {
  return (
    <div className="careos-page">
      <CareOSHeader />
      <main>
        <CareOSHero />
        <ProjectOverview />
        <BusinessChallenge />
        <SolutionOverview />
        <BusinessAnalysis />
        <SystemArchitecture />
        <Applications />
        <DatabaseDesign />
        <TechnologyStack />
        <DevelopmentJourney />
        <Gallery />
      </main>
      <footer className="careos-footer">
        <div className="container careos-footer__inner">
          <p>CareOS / Portfolio case study</p>
          <a href="#careos-top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
