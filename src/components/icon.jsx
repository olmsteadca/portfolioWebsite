
function icon({ image, alt }) {

  return (
      <img src={image} className="opaque-container" style={{width: "8rem", height: "8rem", padding: "1rem"}} alt={alt}/>
  );
}

export default icon;