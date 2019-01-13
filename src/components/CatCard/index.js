import React from "react";
import "./style.css";

function CatCard(props) {
  return (
    <div className="card" onClick={()=>props.cardIncrement(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
      </div>
    </div>
  );
}

export default CatCard;
