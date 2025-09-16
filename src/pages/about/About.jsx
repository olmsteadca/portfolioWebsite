import Image from "@/components/image.jsx";
import portrait from "@/pages/about/assets/portrait-sims.jpg";
import workHistory from "@/data/work.json";
import WorkCard from "./components/WorkCard.jsx";

function About() {
  return (
    <>
      <div className="transparent-container">
        <div className="section-content">
          <Image src={portrait} />
          <h1 style={{ color: "#29478A" }}>Celeste Olmstead</h1>
          <p style={{ width: "85%" }}>Nice to meet you, and thanks for checking out my website!</p>
          <p style={{ width: "85%", textAlign: "justify"}}>Here's a bit about how I work:
            I like to approach problems from multiple frames of mind- to learn new perspectives. Nothing gets my brain moving more than combining creative and analytical thoughts. If I let myself think too long, I'll come up with all sorts of fantastical things to create. I also love a bit of challenge and tedium (as evidenced by my favorite game at the moment, Vintage Story).</p>
          <p style={{ width: "fit-content", textAlign: "justify", alignSelf: "center"}}>Please reach out if you'd like to work together! Currently working on this website.</p>
        </div>
      </div>

      <div className="section-container">
        <div className="section-content">
          <h1>Work History</h1>
          <div className="transparent-container" style={{ paddingBlock: "2rem" }}>
            <p style={{ width: "80%", justifySelf: "center" }}>You'll notice I don't have professional experience yet. To get a better a idea of my skills, take a look at my projects page.</p>
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
       
      {/*<div className="section-container">
        <div className="section-content">
          <h1>Fun Facts!</h1>
        </div>
      </div>*/}

    </>

    );
}

export default About;