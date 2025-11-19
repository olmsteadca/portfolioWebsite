import Icon from "@components/Icon/Icon"
import adaptable from "@pages/Home/assets/adaptable.svg"
import intuitive from "@pages/Home/assets/lightsOn.svg"
import intuitiveClicked from "@pages/Home/assets/lightsOff.svg"
import accessible from "@pages/Home/assets/accessible.svg"

function Hero() {
  return (
    <section id="introduction_section" className="transparent-container">
      <div className="section-content">

        <h1 style={{ fontSize: "8rem", color: "#29478A" }}>
          Hi, I'm Celeste!
        </h1>

        <div className="opaque-container" style={{ backgroundColor: "#FAFAFA", height: "6rem" }}>
          <h4 style={{ color: "#D23278", fontSize: "2rem", marginInline: "1rem", lineHeight: "2rem", marginBlock: "2rem" }}>Full Stack Developer | UI Designer</h4>
        </div>

        <p style={{ width: "60%", textAlign: "center" }}>
          I want to help you deliver products your users want to engage with! To make that happen, I focus on designs that are: 
        </p>

        <div className="flex-row" style={{ gap: "8rem" }}>
          <div className="flex-column">
            <Icon
              image={adaptable}
              alt="adaptable puzzle piece icon"
            />
            <h2>Adaptable</h2>
          </div>


          <div className="flex-column">
            <Icon
              image={intuitive}
              imageClicked={intuitiveClicked}
              alt="intuitive lightbulb icon"
            />
            <h2>Intuitive</h2>
          </div>

          <div className="flex-column">
            <Icon
              image={accessible}
              alt="universal person icon"
            />
            <h2>Accessible</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;