import Image from "@/components/Image"
import "./updateCard.css"

function UpdateCard({ id, title, date, summary, image }) {

    return (

            <div className="update-container" key={id}>
                <div>

                    <Image
                        src={image}
                        use="top"
                    />

                    <div className="flex-column" style={{padding: "2rem", position: "relative"}}>

                        <div className="flex-row">
                            <h2 style={{ color: "#D23278", marginBottom: "4rem"}}>{title}</h2>
                        </div>

                        <div className="flex-row" style={{position: "absolute", top: "20%"}}>
                            <h3>{date}</h3>
                        </div>

                        <div className="flex-row">
                            <p style={{textAlign: "justify", marginInline: "1rem"}}>{summary}</p>
                        </div>

                    </div>

            </div>
        </div>


  );
}

export default UpdateCard;