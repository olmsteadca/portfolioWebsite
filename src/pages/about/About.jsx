import Image from "@/components/image.jsx";
import portrait from "@/pages/about/assets/portrait-sims.jpg";
import workHistory from "@/data/work.json";
import WorkCard from "./components/WorkCard"; // Make sure path is correct!

function About() {
    return (
        <>
            <div className="transparent-container">
                <div className="section-content">
                    <Image src={portrait} />
                    <h1 style={{ fontSize: "8rem", color: "#29478A" }}>Celeste Olmstead</h1>
                    <p>I start with an introduction. Then I talk about why I made this website.</p>
                    <p style={{width: "90%"}}>Then I give the some more information about me. Work wise, I'm curious and passionate with a great work ethic. I solve problems using my analytical thinking and creativity. I love computers. This is where I probably write too much about liking video games.</p>
                    <p>Currently working on this website :P</p>
                </div>
            </div>

            <div className="section-container">
                <div className="section-content">
                    <h1>Work History</h1>
                    <div className="transparent-container" style={{ paddingBlock: "2rem" }}>
                        <p style={{width: "80%", justifySelf: "center" }}>You'll notice I don't have professional experience yet. To get a better a idea of my skills, take a look at my projects page.</p>
                        <div className="flex-column" style={{ width: '95%', justifySelf: "center" }}>
                            {workHistory.map((job) => (
                                <WorkCard
                                    key={job.id}
                                    title={job.title}
                                    dates={job.dates}
                                    desc={job.desc}
                                    tags={job.tags}
                                    jobs={job.jobs}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container">
                <div className="section-content">
                    <h1>Fun Facts!</h1>
                </div>
            </div>
        </>
    );
}

export default About;