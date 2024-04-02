import './App.css';
import Aboutus from './Pages/Aboutus';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from './Pages/Contactus';
import Residencial from './Pages/Residencial';
import Commercial from './Pages/Commercial';
import Modularworks from './Pages/Modularworks';
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="about-us" element={<Aboutus />} />
        <Route path="residencial-interior" element={<Residencial />} />
        <Route path="commercial-interior" element={<Commercial />} />
        <Route path="contact-us" element={<Contactus />} />
        <Route path="modular-workes" element={<Modularworks />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
