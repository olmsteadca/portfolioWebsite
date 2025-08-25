import AutoSizeImage from "../components/autosizeImage/autosizeImage.jsx";

function About() {
    // hard coding instead of using components - they currently need a rework

    return (
        <>
            <div className="section-container">
                <div className="section-content">
                    <AutoSizeImage
                        height= "6rem"
                        imagePath="/portrait-sims.jpg"
                    />
                    <h1 className="title">Celeste Olmstead</h1>

                    <p className="paragraph">I start with an introduction. Then I talk about why I made this website.</p>
                    <p className="paragraph">Then I give the some more information about me. Work wise, I'm curious and passionate with a great work ethic.</p>
                    <p className="paragraph">I solve problems using my analytical thinking and creativity. I love computers.</p>
                    <p className="paragraph">This is where I probably write too much about liking video games.</p>
                    <p className="paragraph">Currently working on this website :P</p>
                </div>
            </div>

            <div className="section-container">
                <div className="section content">
                    <h1 className="title">Work History</h1>
                    <h2 className="title">You'll notice I don't have professional experience yet. To get a better a idea of my skills, take a look at my projects page.</h2>
                </div>
            </div>

            <div className="section-container">
                <div className="section content">
                    <h1 className="title">About Me</h1>
                    <h2 className="title"></h2>
                </div>
            </div>
        </>
    );
}

export default About;