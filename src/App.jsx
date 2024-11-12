import Story from './components/Story'
import Header from './components/Header'
import Services from './components/Services'
import Roadmap from './components/Roadmap'
import Testimonial from './components/Testimonial'
import Team from './components/team'
import Booking from './components/Booking'
import Footer from './components/Footer'
import Support from './components/Support'


const App = () => {
  return (
    <section className=' max-w-[1400px] mx-auto px-5 lg:px-20'>
      <Header/>
      <Services/>
      <Story/>
      <Roadmap/>
      <Testimonial/>
      <Team/>
      <Support/>
      <Footer/>
    </section>
  )
}

export default App