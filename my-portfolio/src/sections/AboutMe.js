import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';



const StyledAboutMe = styled.div`

width:750px;
margin-left:40px;
height: 90vh;
padding-top:50px;


h3 {
    color:#353746;
    font-size:27px;
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
        <Grid item sm={8} >
            <p>Hi, I'm Dustin Scroggins a Software Developer based in 
                Moreno Valley, CA</p>
            <p>I find joy experiementing with technologies to build things
                that live on the internet, whether that be websites , applications or
                anything else that sparks my interest. I thrive to build highly functional, 
                but very aesthetically pleasing products that bring joy and simplicity to those that use them.
            </p>
            <p>When I'm not improving my coding skills or learning new frameworks , I enjoy releasing my stress lifting heavy weights, 
                watching sports and building my investment portfolio.</p>
                
           
        </Grid> 
        <Grid item sm={4} >
            <p>HYUH DSHOSJD DSOIDSSD SODSI</p>
            <p>hdffdbifddfbjkdfddofbdfobfd</p>
        </Grid>     





       </Grid>
    

   
  
</StyledAboutMe>




)
}

export default AboutMe;