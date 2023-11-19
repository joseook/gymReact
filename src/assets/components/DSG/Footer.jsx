import React from 'react';
import '../../style/footer.css';
import logo from '../../img/wight.png';

const company = [
  {
    path: '#',
    display: 'Our Plan',
  },
  {
    path: '#',
    display: 'Our Program',
  },
  {
    path: '#',
    display: 'Become a Member',
  },
];

const resources = [
  {
    path: '#',
    display: 'About us',
  },
  {
    path: '#',
    display: 'Contact us',
  },
  {
    path: '#',
    display: 'Support',
  },
];

const socialLinks = [
  {
    path: 'https://instagram.com',
    spanIcon: <i class="ri-instagram-line"></i>,
    display: 'Instagram',
  },

  {
    path: 'https://facebook.com',
    spanIcon: <i class="ri-facebook-box-fill"></i>,
    display: 'Facebook',
  },

  {
    path: 'https://twitter.com',
    spanIcon: <i class="ri-twitter-x-line"></i>,
    display: 'Twitter',
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="footer"
      id="footer"
      data-aos="fade-up"
      data-aos-duration="1500">
      <div className="container footer__wrapper">
        <div className="footer_box">
          <div className="footer__img">
            <div className="footer_logo">
              <img src={logo} alt="FitUI Logo" />
            </div>
            <h2 className="titleMain">FitUI</h2>
          </div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>

        <div className="footer_box">
          <h4 className="title">Company</h4>
          <ul className="footer__links">
            {company.map((item, index) => (
              <li className="li_nav" key={index}>
                <a href={item.path}>{item.display}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer_box">
          <h4 className="title">Resources</h4>
          <ul className="footer__links">
            {resources.map((item, index) => (
              <li className="li_nav" key={index}>
                <a href={item.path}>{item.display}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer_box">
          <h4 className="title">Follow Us</h4>
          <ul className="footer__links">
            {socialLinks.map((link, index) => (
              <li className="li_nav" key={index}>
                <a class="socialL" href={link.path} target="__blank">
                  <div className="Icon">{link.spanIcon}</div>
                  <span className="social-text">{link.display}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="copyright">
        Copyright - {year} developed by Joseok. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
