import { Link } from 'react-router-dom';
import Image from "./image.jsx"

function update({ id, title, date, summary, image, path }) {

    return (
        <Link to={path} style={{textDecoration : "none"}}>

            <div className="card-container" key={id} style={{height: "1000px"}} >
                <div>

                    <Image
                        src={image}
                        use="top"
                    />

                    <div className="flex-column" style={{padding: "2rem", position: "relative"}}>

                        <div className="flex-row">
                            <h2 style={{ color: "#D23278", marginBottom: "4rem"}}>{title}</h2>
                        </div>

                        <div className="flex-row" style={{position: "absolute", top: "15%"}}>
                            <h3>{date}</h3>
                        </div>

                        <div className="flex-row">
                            <p style={{textAlign: "justify", marginInline: "1rem"}}>{summary}</p>
                        </div>

                    </div>

                </div>
            </div>
        </Link>

  );
}

export default update;