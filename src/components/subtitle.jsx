function subtitle({ text }) {

    const subtitleContainer = {
        justifyContent: "center",
        width: "fit-content",
        height: "fit-content",
        backgroundColor: "#FAFAFA",
        borderRadius: "1rem",
    };

    return (
        <div style={subtitleContainer}>
            <p className="subtitle">{text}</p>
        </div>
  );
}

export default subtitle;