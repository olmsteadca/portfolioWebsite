import { Link } from 'react-router-dom';
import Image from "./image.jsx"

function update({ id, title, date, summary, image, path }) {

    return (
        <Link to={path} style={{textDecoration : "none"}}>

            <div className="card-container" key={id} style={{height: "1100px"}} >
                <div>

                    <Image
                        src={image}
                        use="top"
                    />

                    <div className="flex-column" style={{marginInline: "2rem"}}>

                        <div className="flex-row">
                            <h2 className="title">{title}</h2>
                        </div>

                        <div className="flex-row">
                            <h3 className="title">{date}</h3>
                        </div>

                        <div className="flex-row">
                            <p className="body">{summary}</p>
                        </div>

                    </div>

                </div>
            </div>
        </Link>

  );
}

export default update;