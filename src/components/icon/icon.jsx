import './icon.css'

function icon({ image, alt }) {
  return (
      <div>
          <img src={image} className="icon" alt={alt} />
      </div>
  );
}

export default icon;