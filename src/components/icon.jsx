

/* TODO: on hover change icon img, on click expand into a tooltip */

function Icon({ image, alt }) {
  return (
    <img src={image} className="opaque-container" style={{ width: "8rem", height: "8rem", padding: "1rem" }} alt={alt} />
  );
}

export default Icon;