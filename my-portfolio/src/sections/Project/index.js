import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

import Project3 from "./Screen Shot 2020-10-12 at 2.00.57 AM.png";
import Project2 from "./Screen Shot 2020-10-14 at 5.17.40 PM.png";
import Project1 from "./Screen Shot 2020-10-19 at 10.01.42 PM.png"
import weblink from "./img_216136.png"
import github from "../../githubnew.png"


const StyledProjects = styled.div`
  
  
  width: 100%;
  @media screen and (max-width: 980px) {
    
    margin: 5px;
  }
  @media screen and (max-width: 740px) {
    width: 90%;
    margin: 10px;
    

    p {
      text-align: left;
    }
    h3 {
      text-align: left;
    }
    
  }

  .sectionName {
    color: #353746;
    font-size: 27px;
  }
  img {
    height: 360px;
    width: 575px;
    border-radius: 1%;
    box-shadow: 0 10px 30px -15px #1b1e22;
    filter: grayscale(80%);
  }
  .productDetail {
    width: 100%;
    background-color: #e4f1eb;
    position: relative;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding: 25px;
    border-radius: 4px;
    text-align: initial;
    box-shadow: 0 10px 30px -15px #778392;
  }
  .productLeft {
    background-color: #e4f1eb;
    position: relative;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding: 25px;
    border-radius: 4px;

    box-shadow: 0 10px 30px -15px #778392;
  }
  .projectContent {
    width: 100%;

    text-align: right;
    display: block;
    margin-bottom: 180px;
  }
  .projectContentLeft {
    width: 100%;
    position: relative;
    text-align: left;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 25px 0px 10px;
    position: relative;
    list-style: none;
    padding: 0px;
  }
  li {
    display: list-item;
    text-align: -webkit-match-parent;
    margin: 0px 0px 5px 20px;
  }
  a{
    margin:10px;
  }
`;

function Project() {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Show More Projects");
  const handleClose = () => {
    setText("Show More Projects");
    setShow(false);
  };
  const handleShow = () => {
    setText("Show Less Projects");
    setShow(true);
  };
  console.log(show);

  return (
    <StyledProjects id="projects">
      <h3 className="sectionName">
        <span style={{ fontSize: "21px", color: "#E55E38" }}>III. &nbsp;</span>{" "}
        Projects I've Built
      </h3>

      <Grid container style={{ paddingTop: "2%" }}>
        <Grid item md={6} xs={12}>
          <img src={Project3} />
        </Grid>
        <Grid item md={6} xs={12} className="projectContent">
          <p style={{ fontSize: "17px", marginBottom: "0%", color: "#E55E38" }}>
            {" "}
            Featured Project
          </p>
          <h3 style={{ fontSize: "24px", marginTop: "5px" }}>
            {" "}
            Muse eXchange{" "}
          </h3>
          <div style={{ marginRight: "50px" }}>
            <p className="productDetail">
              {" "}
              A music marketplace where users leverage their talents to make
              money by selling their music or time in the form of tutorials.
              Sign Up and explore different talents or upload your own products
              and see the sales come in!{" "}
            </p>
          </div>
          <ul style={{ justifyContent: "flex-end" }}>
            <li>React.js</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
          <div>
           <a href="https://arcane-everglades-49918.herokuapp.com/" target="blank"><img src={weblink}style={{height:'20px',width:'20px'}} /></a>
           <a href="https://github.com/nickgusd/Muse-eXchange" target="blank"><img src={github}style={{height:'20px',width:'20px'}} /></a>
          </div>
        </Grid>

        <Grid item md={5} xs={12} className="projectContentLeft">
          <p style={{ fontSize: "17px", marginBottom: "0%", color: "#E55E38" }}>
            {" "}
            Featured Project
          </p>
          <h3 style={{ fontSize: "24px", marginTop: "5px" }}> DreamQuest </h3>
          <div>
            <p className="productLeft">
              {" "}
              A Javascript adventure game where users can create their own
              characters and take them through a quest that features minigames,
              riddles, and tons of other fun. Are you prepared to take the
              Quest??{" "}
            </p>
          </div>

          <ul style={{ justifyContent: "flex-start" }}>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>Node.js</li>
            <li>My SQL/Sequelize</li>
          </ul>
          <div>
           <a href="https://boiling-scrubland-47240.herokuapp.com" target="blank"><img src={weblink}style={{height:'20px',width:'20px'}} /></a>
           <a href="https://github.com/BlakeQuake/Dream-Quest" target="blank"><img src={github}style={{height:'20px',width:'20px'}} /></a>
          </div>
        </Grid>
        <Grid item md={7} xs={12} style={{ marginBottom: "100px" }}>
          <img src={Project2} />
        </Grid>

        <Grid item md={6} xs={12}>
          <img src={Project1} />
        </Grid>
        <Grid item md={6} xs={12} className="projectContent">
          <p style={{ fontSize: "17px", marginBottom: "0%", color: "#E55E38" }}>
            {" "}
            Featured Project
          </p>
          <h3 style={{ fontSize: "24px", marginTop: "5px" }}>
            {" "}
            Village{" "}
          </h3>
          <div style={{ marginRight: "50px" }}>
            <p className="productDetail">
              {" "}
              A community service app where users can search for good deeds to complete in their local area.{" "}
            </p>
          </div>
          <ul style={{ justifyContent: "flex-end" }}>
            <li>JQuery</li>
            
            <li>Javascript</li>
            <li>GoogleMapAPI</li>
          </ul>
          <div>
          <a href="https://github.com/scrunchyblue/Village_GP1" target="blank"><img src={github}style={{height:'20px',width:'20px'}} /></a>
          </div>
        </Grid>
      
      
      </Grid>
      
    </StyledProjects>
  );
}

export default Project;
