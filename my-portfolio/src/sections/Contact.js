import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledContact = styled.div`
padding-top:20%;
height:100vh;
width: 60%;
display:block;
margin-left:20%;

h1{
  font-size: clamp(40px, 5vw, 60px);
}
.contactbutton {
  
  margin-left:40%;
  paddingTop:150px
  
}
.large{
  font-size:6rem;
  addingTop:5px;
  position:absolute
}


`

function Contact() {
  return (
      <StyledContact>
      <Grid container>
          <Grid item md={12} >
    <h3 style={{textAlign:"center",color:"#E55E38"}}>
      <span style={{ fontSize: "18px", color: "#E55E38" }}>IV. &nbsp;</span>
      Need to Contact Me?
      </h3>
      <h1 style={{textAlign:"center",color: '#353746'}}> Get in Touch</h1>
    <p style={{textAlign:"center"}}> 
        I'm currently in search for fulltime work as a FrontEnd Developer or freelance projects that may spark my interest. If you have any other question please dont hesitate to reach out to me, I look forward to speaking with you!
    </p>
    <div className='contactbutton'>
    <a style={{color:'#353746'}} href="mailto:dscroggins123@gmail.com"><i className="large material-icons"  >mail</i></a>
    </div>
    </Grid>
    </Grid>
    </StyledContact>
  );
}

export default Contact;
