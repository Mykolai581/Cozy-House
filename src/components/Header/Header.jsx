import "./Header.css";
import { useState } from "react";
import Logo from "../../../Images/Logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#" className="logo__link">
            <img src={Logo} alt="Logo" />
            <div className="logo__text">Shelter for pets in Boston</div>
          </a>
        </div>

        <button
          className={
            isOpen ? "header-menu__button active" : "header-menu__button"
          }
          onClick={openMenu}
        >
          <span className="icon__menu"></span>
          <span className="icon__menu"></span>
          <span className="icon__menu"></span>
        </button>

        <div
          className={isOpen ? "header__menu menu active" : "header__menu menu"}
        >
          <nav className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="#" className="menu__link">
                  About the shelter
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Our pets
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Help the shelter
                </a>
              </li>
              <li className="menu__item">
                <a href="#" className="menu__link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
