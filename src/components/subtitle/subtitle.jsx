import "./subtitle.css"
function subtitle({ subtitle }) {
  return (
      <div className="subtitle">
          <h2 className="subtitle-bold">{subtitle}</h2>
      </div>
  );
}

export default subtitle;