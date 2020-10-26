import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "./again.png"
import { gsap } from "gsap";





const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  AppBar: {
    background: "transparent",
    boxShadow:'none',
    paddingTop:'5px',
   
  },
  menuButton: {
    marginRight: theme.spacing(1),
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
  
  useEffect(() => {

    gsap.timeline().from('#hero',{opacity:0,delay:2.5})
    .from("#link",{opacity:0})
    
  }, [])
   

  return (
    
      <AppBar className={classes.AppBar}  position="static"  id="hero">
        <Toolbar>
          
          <Typography variant="h5" className={classes.title}>
            <img src={logo} style={{height:'100px',width:'100px'}}/>
          </Typography>
          <a href="#about"className={classes.link} ><Button color="black" className={classes.Button} id='link'><span style={{color:'#E55E38'}}>I. &nbsp;</span>About</Button></a>
          <a href="#skills" className={classes.link}><Button color="black" className={classes.Button} id='link'><span style={{color:'#E55E38'}}>II. &nbsp;</span>Skills</Button> </a>
          <a href="#projects" className={classes.link}><Button color="black" className={classes.Button} id='link'><span style={{color:'#E55E38'}}>III. &nbsp;</span>Projects</Button> </a>
          <a href="#contact" className={classes.link}><Button color="black" className={classes.Button} id='link'><span style={{color:'#E55E38'}}>IV. &nbsp;</span>Contact</Button></a>
        </Toolbar>
      </AppBar>
  );
}
