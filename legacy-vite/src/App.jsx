import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SiteHeader from './components/SiteHeader.jsx'
import Hero from './sections/Hero.jsx'
import SelectedWork from './sections/SelectedWork.jsx'
import Approach from './sections/Approach.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import CareOSPage from './pages/careos/CareOSPage.jsx'

function HomePage() {
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/careos" element={<CareOSPage />} />
      </Routes>
    </BrowserRouter>
  )
}
