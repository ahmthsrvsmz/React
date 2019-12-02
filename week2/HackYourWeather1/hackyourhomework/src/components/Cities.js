import React from 'react';

function Cities(props) {
  return (
    <div className="box">
      <h1>
        {props.name}, {props.sys.country}
      </h1>
      <h2 className="weather">{props.weather.map(weat => weat.main)}</h2>
      <p className="description">
        {props.weather.map(weat => weat.description[0].toUpperCase() + weat.description.slice(1))}
      </p>
      <p>min temp: {props.main.temp_min}</p>
      <p>max temp: {props.main.temp_max}</p>
      <p>
        location: {props.coord.lon} / {props.coord.lat}
      </p>
    </div>
  );
}

export default Cities;
