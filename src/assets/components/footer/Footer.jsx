import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import github from "./github.svg";
import whatsapp from "./whatsapp.svg";
import mail from "./mail.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="container" id="container">
      <div className="footer">
        <h2 className="footer__title">Contáctanos</h2>

        <div className="footer__icons"
        target="_blank"
        rel="nooper noreferrer"
          >
          <a href="https://www.facebook.com"
          target="_blank"
          rel="nooper noreferrer"
          >
            <img src={facebook} alt="Facebook" className="footer__icon" />
          </a>
          <a href="https://x.com/?lang=es"
          target="_blank"
          rel="nooper noreferrer"
          >
            <img src={twitter} alt="Twitter" className="footer__icon" />
          </a>
          <a href="https://github.com"
          target="_blank"
          rel="nooper noreferrer"
          >
            <img src={github} alt="GitHub" className="footer__icon" />
            
          </a>
          <a href="https://www.whatsapp.com/?lang=es"
          target="_blank"
          rel="nooper noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" className="footer__icon" />
          </a>
        </div>

        <p className="footer__copy">
          Derechos reservados &copy; Team Developers
        </p>
      </div>

      <figure className="footer__img">
        <img src={mail} className="footer__picture" alt="contactme" />
      </figure>
    </footer>
  );
};

export default Footer;
