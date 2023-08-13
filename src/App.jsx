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
import { RouterProvider } from 'react-router-dom'
import router from './routes/route'

function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
