import { Link } from "react-router-dom";
import './BottomNavLink.css';
import BottomNavLinkIcons from '../utilities/BottomNavLinkIcons';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '@fortawesome/fontawesome-free/css/all.css';

export default function BottomNavLink() {
  return (
    <div className="container linkItems">
      <div className="column">
        <div className="row">
          <img className="bottomNavLogo" src="/logo/FC - logo - stacked - white.png" alt="" />
        </div>
      </div>
      <div className="column">
        <div className="row">
          <Link to="/" className="links">Home</Link>
        </div>
        <div className="row">
          <Link to="/about" className="links">About</Link>
        </div>
        <div className="row">
          <Link to="/services" className="links">Services</Link>
        </div>
      </div>

      <div className="column">
        <div className="row">
          <Link to="/work" className="links">Work</Link>
        </div>
        <div className="row">
          <Link to="/consultation" className="links">Consultation</Link>
        </div>
        <div className="row">
          <Link to="/contactus" className="links">Contact Us</Link>
        </div>
      </div>

      <div className="column right-icons">
        <div className="row icons-row">
          <BottomNavLinkIcons icon={<InstagramIcon />} />
          <BottomNavLinkIcons icon={<i className="fab fa-discord"></i>} />
          <BottomNavLinkIcons icon={<WhatsAppIcon />} />
        </div>
      </div>
    </div>
  );
}
