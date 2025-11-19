import styles from "./ContactFooter.module.css"

/* TODO: Add in phone popup */

function ContactFooter() {
  return (
    <div id="contact-footer" className="footer-container">
      <div className="flex-column">

        <h2 style={{color: "FFFFFF"}}>Get in Touch!</h2>
        <div className={styles.row} >

          <a href="mailto:celesteolmstead10@gmail.com">
            <img src="./icons/email.svg" className={styles.icon} />
          </a>

          <a href="https://www.figma.com/@celesteolmstead" target="_blank" rel="noopener noreferrer">
            <img src="./icons/figma.svg" className={styles.icon} />
          </a>

          <a href="https://www.linkedin.com/in/celesteolmstead0921" target="_blank" rel="noopener noreferrer">
            <img src="./icons/linkedin.svg" className={styles.icon} />
          </a>

          {/* on click, little alert comes up - could use later as a security measure by having to type each digit to reveal the next so i dont get scam calls */}
          <img src="./icons/phone.svg" className={styles.icon} />

        </div>
      </div>
    </div>
  );
}

export default ContactFooter;