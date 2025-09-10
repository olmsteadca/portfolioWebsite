import Image from "@/components/image.jsx"
import portrait from "@/pages/about/assets/portrait-sims.jpg"

function About() {

    return (
        <>
            <div className="transparent-container">
                <div className="section-content">
                    
                    <Image
                        src={portrait}
                    />
                
                    <h1 style={{ fontSize: "8rem", color:"#29478A"}}>Celeste Olmstead</h1>

                    <p>I start with an introduction. Then I talk about why I made this website.</p>
                    <p>Then I give the some more information about me. Work wise, I'm curious and passionate with a great work ethic.</p>
                    <p>I solve problems using my analytical thinking and creativity. I love computers.</p>
                    <p>This is where I probably write too much about liking video games.</p>
                    <p>Currently working on this website :P</p>
                </div>
            </div>

            <div className="section-container">
                <div className="section-content">
                    <h1 className="title">Work History</h1>
                    <p className="body" style={{color: "#FFFFFF", width: "60%"}}>You'll notice I don't have professional experience yet. To get a better a idea of my skills, take a look at my projects page.</p>
                </div>
            </div>

            <div className="section-container">
                <div className="section content">
                    <h1>Fun Facts!</h1>
                    <h2></h2>
                </div>
            </div>
        </>
    );
}

export default About;