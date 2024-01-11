import { Home } from "./components/Home/Home";
import { Routes, Route, HashRouter } from 'react-router-dom'
import { Navbar } from "./components/navbar/navbar";
import { ScrollToTop } from "./scrollToTop";
import { NavbarTop } from "./components/navbar/navbarTop";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/about";
import { Contact } from "./components/Conctact/Contact";
import { Services } from "./components/Services/services";


function App() {

  return (
    <HashRouter>

      <ScrollToTop/>
      <div style={{width:'100%', position:'fixed', top:0, zIndex:999}}>
        <NavbarTop/>
        <div className="bg-primary">
          <Navbar/>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Services" element={<Services/>} />
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
