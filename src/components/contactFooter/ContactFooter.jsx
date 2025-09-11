import "./contact-footer.css"


function ContactFooter() {
  return (
      <div id="contact-footer" className="footer-container">
          <div className="flex-column">
              <h2>Get in Touch!</h2>

              <div className="contact-row">
                  <img src="/icons/email.svg" className="contact-icon" />
                  <img src="/icons/figma.svg" className="contact-icon" />
                  <img src="/icons/linkedin.svg" className="contact-icon" />
                  <img src="/icons/phone.svg" className="contact-icon" />
              </div>
          </div>
      </div>
  );
}

export default ContactFooter;