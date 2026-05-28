import Link from "next/link";

import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer__section">
      <div className="footer__container container">
        <div className="footer__address">
          <h5>About</h5>
          <p>Mona Montessori School.</p>
          <ul className="footer__location">
            <li>
              <a href="/">
                <i className="fas fa-map-marker-alt"></i>
              </a>
              "Nigeria"
              <br />
              "Delta State Sapele"
            </li>
            <li>
              <a href="/">
                <i className="far fa-envelope"></i>
              </a>
              info@monaschool.ng
            </li>
            <li>
              <a href="/">
                <i className="fas fa-tty"></i>
              </a>
              +2348076646400
            </li>
          </ul>
          
        </div>
          <div className="footer__address">
          <h5>Quick Links</h5>
          <ul className="footer__address-link">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer__address">
          <h5>Login</h5>
          <ul className="footer__courses">
            <li>
              <a href="https://portal.monaschool.ng/site/userlogin">Student</a>
            </li>
            <li>
              <a href="https://portal.monaschool.ng/site/login">Staff</a>
            </li>
            <li>
              <Link href="https://portal.monaschool.ng/site/userlogin">Parent</Link>
            </li>
          </ul>
        </div>
        <div className="footer__address">
          <h5>Connect</h5>
          <ul className="footer__socials">
            <li>
              <a href="/">
                <i className="far fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2024 Design by Team ThinkTech Templates</p>
      </div>
    </footer>
  );
};

export default Footer;
