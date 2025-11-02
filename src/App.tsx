import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ExpertiseSection from './components/ExpertiseSection'
import PositionsSection from './components/PositionsSection'
import ResearchSection from './components/ResearchSection'
import PublicationsSection from './components/PublicationsSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <ExpertiseSection />
      <PositionsSection />
      <ResearchSection />
      <PublicationsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
