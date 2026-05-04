import React from "react";
import "./Footer.css";
import ContactIcon from "../../components/Contact/ContactIcon";
import RoundedButton from "../../components/RoundedButton/RoundedButton";
import ContactData from "../../data/ContactData";

function Footer() {
  return (
    <footer>
      <div className="contact-container footer-container">
        <h2>Get In Touch</h2>
        <div>
          {ContactData.map((x) => {
            return (
              <ContactIcon
                key={x.id}
                link={x.link}
                target={x.target}
                rel={x.rel}
                icon={x.imgurl}
                alt={x.alt}
              />
            );
          })}
        </div>
        <div>
          <div>
            <a href="/assets/YEE QIAN HUI-resume.pdf" download>
              <RoundedButton Text="Download Resume" />
            </a>
          </div>
        </div>
      </div>
      <p>Made from scratch by Zen!</p>
    </footer>
  );
}

export default Footer;
