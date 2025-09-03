import { Link } from 'react-router-dom';

function update({ id, title, date, summary, image, path }) {
    const updateCard = {
        display: "flex",
        flexDirection: "column",
        width: "100px"
    };

    const containRow = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "contain"
    };

    const updateImage = {
        borderRadius: "1rem 1rem 0 0",
        objectFit: "cover",
        height: "20rem",
        width: "stretch"
    };

    const imageSpacing = {
        overflow: "hidden",
        width: "100%",
        height: "30%"
    };

    return (
        <Link to={path} style={{textDecoration : "none"}}>

            <section className="card-container" key={id}>
                <div className={updateCard}>

                    <div className={imageSpacing}>
                        <img src={image} className={updateImage}/>
                    </div>

                    <div className="flex-text-column">

                        <div className={containRow}>
                            <h2 className="title">{title}</h2>
                        </div>

                        <div className={containRow}>
                            <h3 className="title">{date}</h3>
                        </div>

                        <div className={containRow}>
                            <p className="body">{summary}</p>
                        </div>

                    </div>

                </div>
            </section>
        </Link>

  );
}

export default update;