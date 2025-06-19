import "./Footer.css";
import Email from "../../../Images/Footer/Email.svg";
import Phone from "../../../Images/Footer/Phone.svg";
import Marker from "../../../Images/Footer/Marker.svg";
import Image from "../../../Images/Footer/footer-puppy.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <h2 className="footer__title">For questions and suggestions</h2>
          <div className="footer__info1">
            <img src={Email} alt="Email" />
            email@shelter.com
          </div>
          <div className="footer__info2">
            <img src={Phone} alt="Phone" />
            +13 674 567 75 54
          </div>
        </div>
        <div className="footer__item">
          <h2 className="footer__title">We are waiting for your visit</h2>
          <div className="footer__info1">
            <img src={Marker} alt="Marker" />1 Central Street, Boston (entrance
            from the store)
          </div>
          <div className="footer__info2">
            <img src={Marker} alt="Marker" />
            18 South Park, London
          </div>
        </div>
        <div className="footer__image">
          <img src={Image} alt="Image" />
        </div>
      </div>
    </footer>
  );
}
