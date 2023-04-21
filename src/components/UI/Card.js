import React from "react";
import "./Card.css";
function Card(props) {
  const classes = "card " + props.className;
  // Any value set on the className prop is added to this long string of class names
  // which is then finally set on the below div inside of the card.
  return <div className={classes}>{props.children}</div>;
}

export default Card;
