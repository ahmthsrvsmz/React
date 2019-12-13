import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import RechartsHourly from './RenderLineChart';
import RechartsDay from './RechartsDay';

function CityBox(props) {
  function changeHandler() {
    props.click(props.id);
  }
  const { name } = props.data;

  const ForecastHour = () => {
    return (
      <div className="forecast-box">
        <Link className="link" to={'/'}>
          🡄
        </Link>
        <div className="button-recharts">
          <Link to={`/Hourly/${name}`}>
            <Button variant="contained">Hourly Forecast</Button>
          </Link>
          <Link to={`/Day/${name}`}>
            <Button variant="contained">5 days Forecast</Button>
          </Link>
        </div>
        <RechartsHourly data={props.data} />
      </div>
    );
  };

  const ForecastDay = () => {
    return (
      <div className="forecast-box">
        <Link className="link" to={'/'}>
          🡄
        </Link>
        <div className="button-recharts">
          <Link to={`/Hourly/${name}`}>
            <Button variant="contained">Hourly Forecast</Button>
          </Link>
          <Link to={`/Day/${name}`}>
            <Button variant="contained">5 days Forecast</Button>
          </Link>
        </div>
        <RechartsDay data={props.data} />
      </div>
    );
  };

  const Home = () => {
    return (
      <div className="box">
        <Button className="x" onClick={changeHandler} variant="outlined">
          X
        </Button>

        <h1>
          {name}, {props.data.sys.country}
        </h1>
        <h3>{props.data.weather[0].main} </h3>
        <p>{props.data.weather[0].description} </p>
        <p>Min Temp: {props.data.main.temp_min}</p>
        <p>Max Temp: {props.data.main.temp_max}</p>
        <p>
          Location: {props.data.coord.lon} {props.data.coord.lat}
        </p>
        <Link to={`/${name}`}>Click Here For Forecast</Link>
      </div>
    );
  };

  return (
    <Router>
      <div key={props.id}>
        <section>
          <Link to={`/`}></Link>
        </section>

        <Switch>
          <Route path={`/Day/${name}`}>
            <ForecastDay />
          </Route>
          <Route path={`/Hourly/${name}`}>
            <ForecastHour />
          </Route>
          <Route path={`/${name}`}>
            <ForecastHour />
          </Route>
          <Route path={`/`}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default CityBox;
