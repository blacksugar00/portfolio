import "./style/Card.css";

function Card({ Icon, textHead, mainText}) {
  return (
    <div className="card">
      <div className="head-card1">

        <div className="img-card1">
          {Icon && <Icon size={30} className="text-orange-500" />}
        </div>

        <div className="text-head-card1">
          <strong>{textHead}</strong>
        </div>
      </div>

      <div className="main-text">{mainText}</div>
    </div>
  );
}

export default Card;