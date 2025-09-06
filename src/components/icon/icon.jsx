import './icon.css'

function icon({ image, alt }) {
  return (
      <img src={image} className="icon" alt={alt}/>
  );
}

export default icon;