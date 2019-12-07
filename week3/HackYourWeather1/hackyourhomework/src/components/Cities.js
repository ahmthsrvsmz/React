import React from 'react';
import CityBox from './CityBox';

const Cities = props => {
  return (
    <div>
      {props.data.map((city, index) => {
        return <CityBox data={city} key={index} id={index} click={props.handle} />;
      })}
    </div>
  );
};

export default Cities;
