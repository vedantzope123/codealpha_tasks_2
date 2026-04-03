import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Connect */}
          <div className="contact-box">
            <h4>Connect</h4>

            <p>
              <a
                href="https://www.linkedin.com/in/vedant-zope270807/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Vedant Zope
              </a>
            </p>

            <p>
              <a
                href="https://github.com/vedantzope123"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub — vedantzope123
              </a>
            </p>

            <p>
              <a
                href="https://www.instagram.com/offx.vedanthh/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Instagram — offx.vedanthh
              </a>
            </p>

            <h4>Education</h4>
            <p>B.Tech Computer Engineering</p>
            <p>Trinity College — 2025–2029</p>
          </div>

          {/* Social */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/vedantzope123"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/vedant-zope270807/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/offx.vedanthh/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Vedant Zope</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;