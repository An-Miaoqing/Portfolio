import SiteHeader from './components/SiteHeader.jsx'
import Hero from './sections/Hero.jsx'
import SelectedWork from './sections/SelectedWork.jsx'
import Approach from './sections/Approach.jsx'
import SiteFooter from './components/SiteFooter.jsx'

export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <SelectedWork />
        <Approach />
      </main>
      <SiteFooter />
    </>
  )
}

