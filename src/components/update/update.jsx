import "./update.css"
import { Link } from 'react-router-dom';

function update({id, title, date, summary, image, path}) {
    return (
        <Link to={path}>

            <section className="update" key={id}>
                <div className="update-spacing">

                    <div className="image-spacing">
                        <img src={image} className="update-image" />
                    </div>

                    <div className="update-info">

                        <div className="info">
                            <h1 className="update-title">{title}</h1>
                        </div>

                        <div className="info-">
                            <h2 className="timestamp">{date}</h2>
                        </div>

                        <div className="info">
                            <p className="summary">{summary}</p>
                        </div>

                    </div>

                </div>
            </section>
        </Link>

  );
}

export default update;