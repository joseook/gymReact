import React from 'react';
import '../../style/header.css';
import logo from '../../img/wight.png';

const nav__links = [
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#Exercises',
    display: 'Schedule',
  },
  {
    path: '#trainer',
    display: 'Classes',
  },
  {
    path: '#pricing',
    display: 'Pricing',
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav__bar">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="#" />
            </div>
            <h2 className="title">FitUI</h2>
          </div>

          <div className="navigation">
            <ul className="menu">
              {nav__links.map((link, index) => (
                <li className="nav__item" key={index}>
                  <a href={link.path}>{link.display}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="button-nav">
            <button className="register_btn">Register</button>
            <button className="login-btn">Login</button>
            <div className="hamb__menu">
              <i class="ri-menu-add-fill"></i>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
