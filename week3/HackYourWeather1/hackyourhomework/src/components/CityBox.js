import React from 'react';

import Button from '@material-ui/core/Button';

function CityBox(props) {
  function changeHandler() {
    props.click(props.id);
  }

  return (
    <div className="box">
      <Button className="x" onClick={changeHandler} variant="outlined">
        X
      </Button>

      <h1>
        {props.data.name}, {props.data.sys.country}{' '}
      </h1>
      <h3>{props.data.weather[0].main} </h3>
      <p>{props.data.weather[0].description} </p>
      <p>Min Temp: {props.data.main.temp_min}</p>
      <p>Max Temp: {props.data.main.temp_max}</p>
      <p>
        Location: {props.data.coord.lon} {props.data.coord.lat}
      </p>
    </div>
  );
}
export default CityBox;
