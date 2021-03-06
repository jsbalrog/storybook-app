import React from 'react';

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.label && <span>{props.label}</span>}
    </button>
  );
}

export default Button;
