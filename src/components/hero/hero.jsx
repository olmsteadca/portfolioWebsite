import "./hero.css"
import Subtitle from "../subtitle/subtitle.jsx"
import Icon from "../icon/icon.jsx"

function hero() {
    return (
        <section className="section-container" id="introduction_section">
            <div className="hero-section">

                <div className="introduction">
                    <div className="greeting-spacing">
                        <h1 className="greeting">Hi, I'm Celeste!</h1>
                    </div>

                    <Subtitle subtitle="Full Stack Developer | UI Designer"/>
                </div>

                <div className="tagline-margin">
                    <p className="tagline">
                        I want to help you deliver products your users want to engage with! To make that happen, I focus on designs that are: 
                    </p>
                </div>

                <div className="design-values">
                    <div className="labeled-icon">
                        <Icon
                            image="./adaptable.svg"
                            alt="adaptable puzzle piece icon"
                        />
                        <h2 className="title">Adaptable</h2>
                    </div>
                    <div className="labeled-icon">
                        <Icon
                            image="./intuitive.svg"
                            alt="intuitive lightbulb icon"
                        />
                        <h2 className="title">Intuitive</h2>
                    </div>
                    <div className="labeled-icon">
                        <Icon
                            image="./accessible.svg"
                            alt="universal person icon"
                        />
                        <h2 className="title">Accessible</h2>
                    </div>
                </div>
                
            </div>
        </section>
  );
}

export default hero;