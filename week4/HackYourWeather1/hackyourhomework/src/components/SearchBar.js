import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function SearchBar(props) {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField onChange={props.change} id="standard-required" label="Enter City Name" />
        <Button
          onClick={props.text.length > 1 ? props.click : null}
          variant="contained"
          color="primary"
        >
          Search
        </Button>
        {props.text.length > 2 ? (
          <p></p>
        ) : (
          <h3 className="oneLetter">Write city full name and click to search, please!!!</h3>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
