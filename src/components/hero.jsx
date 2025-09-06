import Subtitle from "./subtitle.jsx"
import Icon from "./icon/icon.jsx"

function Hero() {

    const taglineMargin = {
        display: "flex",
        width: "80%",
        marginInline: "1rem"
    };

    const flexIconRow = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        gap: "8rem",
        justifyContent: "center",
        alignContent: "center"
    };

    return (
        <section id="introduction_section" className="transparent-container">
            <div className="section-content">

                <h1 className="big-title">Hi, I'm Celeste!</h1>
                <Subtitle text="Full Stack Developer | UI Designer" />


                <div style={taglineMargin}>
                    <p className="body">
                        I want to help you deliver products your users want to engage with! To make that happen, I focus on designs that are: 
                    </p>
                </div>

                <div style={flexIconRow}>

                    <div className="flex-column">
                        <Icon
                            image="./adaptable.svg"
                            alt="adaptable puzzle piece icon"
                        />
                        <h2 className="title">Adaptable</h2>
                    </div>

                    <div className="flex-column">
                        <Icon
                            image="./intuitive.svg"
                            alt="intuitive lightbulb icon"
                        />
                        <h2 className="title">Intuitive</h2>
                    </div>

                    <div className="flex-column">
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

export default Hero;