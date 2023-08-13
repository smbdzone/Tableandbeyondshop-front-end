import './App.css'
import Navbar from './components/Navbar'
import MegaNav from './components/MegaNav'
import ContactBar from './components/ContactBar'
import Landing from './components/Landing'
import Carousel  from './components/Carousel'
import Display from './components/Display'
import ImageCarousel from './components/ImageCarousel'
import Footer from './components/Footer'
import Table from './components/Table'

function App() {
  return (
    <>
     <Navbar />
     <MegaNav />
     <ContactBar />
     <Landing />
     <Carousel />
    
     <Display />

     <ImageCarousel />
     <Table />
     <Footer />
    </>
  )
}

export default App
