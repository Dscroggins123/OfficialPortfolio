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
    background: "transparent",
    boxShadow:'none',
    paddingTop:'20px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  Button: {
    marginRight:'10px'
  },
  link: {
    textDecoration:'none'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <AppBar className={classes.AppBar}  position="static" >
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
            Dustin Scroggins
          </Typography>
          <a href="#about"className={classes.link} ><Button color="black" className={classes.Button}><span style={{color:'#E55E38'}}>I. &nbsp;</span>About</Button></a>
          <a href="#skills" className={classes.link}><Button color="black" className={classes.Button}><span style={{color:'#E55E38'}}>II. &nbsp;</span>Skills</Button> </a>
          <a href="#projects" className={classes.link}><Button color="black" className={classes.Button}><span style={{color:'#E55E38'}}>III. &nbsp;</span>Projects</Button> </a>
          <Button color="black" className={classes.Button} ><span style={{color:'#E55E38'}}>IV. &nbsp;</span>Contact</Button>
        </Toolbar>
      </AppBar>
  );
}
