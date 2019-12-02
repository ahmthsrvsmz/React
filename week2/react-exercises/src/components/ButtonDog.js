import React from 'react';

function Button(props) {
  return (
    <div>
      <button onClick={props.onClick}>Get Your First Dog</button>
    </div>
  );
}

export default Button;
