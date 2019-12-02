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
        <TextField onChange={props.change} id="standard-basic" label="Enter City Name" />
        <Button onClick={props.click} variant="contained" color="primary">
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBar;
