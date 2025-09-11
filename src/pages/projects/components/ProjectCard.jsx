import "./projectCard.css"
import Image from "@/components/image.jsx"
import TagGroup from "@/components/tagGroup.jsx"


function projectCard({ title , date, desc, thumbnail, tags }) {
    return (
        <div className="project-container" id="project-card">

            <div className="flex-row" style={{ flexWrap: "nowrap", gap: "0"}}>

                <Image
                    src={thumbnail}
                    use="left"
                />

                <div className="flex-column" style={{ margin: "1rem", gap: "0.5rem"}}>

                    <div className="project-row">
                        <h2 className="project-title">{title}</h2>
                        <h3 className="project-date">{date}</h3>
                    </div>

                    <div className="project-row">
                        <p className="project-desc">{desc}</p>
                    </div>



                    <div className="project-row">
                        <TagGroup tags={tags} />
                    </div>



                </div>

            </div>

        </div>
    );
}

export default projectCard;