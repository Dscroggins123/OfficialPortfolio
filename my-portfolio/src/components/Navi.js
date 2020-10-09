import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    background: "transparent"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <AppBar className={classes.AppBar} position="static" >
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
            Dustin Scroggins
          </Typography>
          <a href="#about" ><Button color="black"><span>I. &nbsp;</span>About</Button></a>
          <a href="#skills" ><Button color="black" ><span>II. &nbsp;</span>Skills</Button></a>
          <Button color="black" ><span>III. &nbsp;</span>Projects</Button>
          <Button color="black" ><span>IV. &nbsp;</span>Contact</Button>
        </Toolbar>
      </AppBar>
  );
}
