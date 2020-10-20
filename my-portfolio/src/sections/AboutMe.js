import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import logo from '../components/again.png'


const StyledAboutMe = styled.div`

width:750px;
margin-left:40px;

height: 100vh;
padding-top:50px;

@media screen and (max-width: 980px) {
    width:70%;  
    
    margin-left:40px;
   
    
    
        
      }


h3 {
    color:#353746;
    font-size:27px;
    font-size: clamp(24px, 4vw, 30px);
}
p{
    
    font-size: clamp(16px, 2vw, 20px);
}
img{
    width: clamp(400px, 300px, 600px);
    height:clamp(400px, 300px, 600px);
    
}






`






function AboutMe ( ){


return(

   <StyledAboutMe id="about">
       <h3> <span style={{fontSize:'21px',color:'#E55E38'}}>I. &nbsp;</span> About Me</h3>
       <Grid container  >
        <Grid item xs={12} sm={8}  >
            <p>Hi, I'm <span style={{color:'#E55E38'}}>Dustin Scroggins </span> a Software Developer based in 
                Moreno Valley, CA</p>
            <p>I find joy experiementing with technologies to build things
                that live on the internet, whether that be websites , applications or
                anything else that sparks my interest. I thrive to build highly functional, 
                but very aesthetically pleasing products that bring joy and simplicity to those that use them.
            </p>
            <p>When I'm not improving my coding skills or learning new frameworks , I enjoy releasing my stress lifting heavy weights, 
                watching sports and building my investment portfolio.</p>
                
           
        </Grid> 
        <Grid item xs={12} sm={4} >
            <img src={logo}  />
        </Grid>     





       </Grid>
    

   
  
</StyledAboutMe>




)
}

export default AboutMe;