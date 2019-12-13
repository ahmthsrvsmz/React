import React from 'react';
import CityBox from './CityBox';

const Cities = props => {
  if (props.data === []) {
    return (
      <div>
        <h3 className="oneLetter">History deleted</h3>
      </div>
    );
  } else {
    return (
      <div>
        {props.data.map((city, index) => {
          return <CityBox data={city} key={index} id={index} click={props.handle} />;
        })}
      </div>
    );
  }
};

export default Cities;
