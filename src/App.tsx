import './App.css'
import NavbarApp from './components/Navbar'
import "./scss/index.scss"
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Gallery from './components/Gallery'
import Form from './components/EnrolForm'
import About from './components/About'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <NavbarApp/>
    <Routes>
      <Route path='/' element={<Main/>}  />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/enrol' element={<Form/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
