import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { otherProjects } from "../../config";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    width: 300,
    height: 300,
    float: "left",
    margin: 10,
    textAlign:'left'
  },

  title: {
    fontSize: 14,
  },
  pos: {
    
    display:"flex",
    
    
    
  },
  
});

function ExtraProjects({ state }) {
  const classes = useStyles();
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {otherProjects.map((project) => (
            <Card id="extra" className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {project.name}
                </Typography>
                <Typography className={classes.pos} >
                  {project.tech.map((techlist) => {
                    return (
                    <p>{techlist}&nbsp;&nbsp; </p>
                    );
                  })}
                </Typography>
                <Typography variant="body2" component="p">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <a href={project.url}>
                  <Button size="small">Visit</Button>
                </a>
              </CardActions>
            </Card>
          ))
        }
    </div>
  );
}

export default ExtraProjects;
