import React from 'react';

function DogPhoto(props) {
  return (
    <div>
      {props.data.map(photo => {
        return <img src={photo} alt="dog" />;
      })}
    </div>
  );
}

export default DogPhoto;
