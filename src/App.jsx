import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import CustomQuote from './pages/CustomQuote/CustomQuote';
import Consultation from './pages/Consultation/Consultation';
import ContactUs from './pages/ContactUs/ContactUs';
import { CssBaseline } from '@mui/material';
import AppBarHeader from './utilities/AppBarHeader';
import BottomNav from './utilities/BottomNav';

function App() {
  return (
    <>
    <BrowserRouter>
      <CssBaseline/>
      <AppBarHeader/>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/custom" element={<CustomQuote />}/>
        <Route path="/consultation" element={<Consultation />}/>
        <Route path="/contactUs" element={<ContactUs />}/>
      </Routes>
      <BottomNav/>
    </BrowserRouter>
    </>
  );
}

export default App
