import "./autosizeImage.jsx"

function autosizeImage({ height, imagePath }) {
    return (
        <div height= {height}>
            <img src={imagePath} className="image-sizing"></img>
        </div>
    );
}

export default autosizeImage;