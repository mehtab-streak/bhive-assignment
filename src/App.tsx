import Hero from './components/Hero'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Spaces from './components/Spaces'
import Header from './components/Header'
import { facilities } from './utils/const'

function App() {

  return (
    <div className=''>
      <Header />
      <Hero />
      <Facilities facilities={facilities} />
      <Spaces />
      <Footer />
    </div>

  )
}

export default App
