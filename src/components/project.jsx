import Image from "./image.jsx"
import TagGroup from "./tagGroup.jsx"


function projectCard({ title , date, desc, thumbnail, tags }) {
    return (
        <div className="card-container">

            <div className="flex-row" style={{ flexWrap: "nowrap" }}>

                <Image
                    src={thumbnail}
                    use="left"
                />

                <div className="flex-column" style={{ marginInline: "2rem"}}>

                    <div className="flex-row" style={{ justifyContent: "space-between", width: "100%"}}>
                        <h2 style={{ color: "#D23278" }}>{title}</h2>
                        <h3>{date}</h3>
                    </div>

                    <div className="flex-row" style={{ justifyContent: "space-between", width: "100%" }}>
                        <p className="body" style={{ textAlign: "justify" }}>{desc}</p>
                    </div>



                    <div className="flex-row" style={{ justifyContent: "space-between", width: "100%" }}>
                        <TagGroup tags={tags} />
                    </div>



                </div>

            </div>

        </div>
    );
}

export default projectCard;