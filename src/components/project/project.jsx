import "./project.css"
import Image from "../image.jsx"
import TagGroup from "./tagGroup/tagGroup.jsx"


function projectCard({ title , date, desc, thumbnail, tags }) {
    return (
            <div className="card-container">
                <div className="card-spacing">


                <Image
                    src={thumbnail}
                    use="left"
                 />


                    <div className="info-group">

                        <div className="info-row">
                            <h1 className="project-title">{title}</h1>
                            <h2 className="project-dates">{date}</h2>
                        </div>

                        <div className="info-row">
                            <div className="desc-margin">
                                <p className="project-description">{desc}</p>
                            </div>
                        </div>

                        <div className="info-row">
                            <TagGroup tags={tags}/>
                        </div>

                    </div>
                </div>
            </div>
    );
}

export default projectCard;