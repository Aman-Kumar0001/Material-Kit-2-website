import './App.css'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import { Footer } from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <div className="sec-1-bg">
        <Navbar />
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Footer />
    </>
  )
}

export default App
