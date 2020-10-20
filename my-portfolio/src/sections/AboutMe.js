import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';



const StyledAboutMe = styled.div`

width:750px;
margin-left:40px;
height: 90vh;
padding-top:50px;
@media screen and (max-width: 740px) {
    width:100%;  
    
    margin:5px;
        
      }


h3 {
    color:#353746;
    font-size:27px;
    font-size: clamp(24px, 4vw, 30px);
}
p{
    
    font-size:20px
}




`






function AboutMe ( ){


return(

   <StyledAboutMe id="about">
       <h3> <span style={{fontSize:'21px',color:'#E55E38'}}>I. &nbsp;</span> About Me</h3>
       <Grid container spacing={3} >
        <Grid item xs={12} md={8} >
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
        <Grid item xs={12} md={4} >
            <p>HYUH DSHOSJD DSOIDSSD SODSI</p>
            <p>hdffdbifddfbjkdfddofbdfobfd</p>
        </Grid>     





       </Grid>
    

   
  
</StyledAboutMe>




)
}

export default AboutMe;