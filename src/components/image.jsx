/*TODO: fill bottom image and right image if necessary */

function Image({ src, use }) {

    var returnValue;

    const midImage = {
        borderRadius: "1rem 1rem 1rem 1rem",
        height: "contain",
        width: "25rem"
    };

    const topImage = {
        borderRadius: "1rem 1rem 0 0",
        objectFit: "cover",
        height: "25rem",
        width: "stretch"
    };

    const botImage = {

    };

    const leftImage = {
        borderRadius: "1rem 0 0 1rem",
        objectFit: "cover",
        height: "stretch",
        width: "25rem"
    };

    const rightImage = {

    };

    
    if (use === "top") {
        returnValue = (
            <img src={src} style={topImage} />
        );
    } else if (use === "bot") {
        returnValue = (
            <img src={src} style={botImage} />
        );
    } else if (use === "left") {
        returnValue = (
            <img src={src} style={leftImage} />
        );
    } else if (use === "right") {
        returnValue = (
            <img src={src} style={rightImage} />
        );
    } else {
        returnValue = (
            <img src={src} style={midImage} />
        );
    }

    return returnValue;
}

export default Image;