import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const StyledFrontPage = styled.section`
margin-bottom: 200px;
padding-top:8%;
width:850px;
@media screen and (max-width: 740px) {
width:100%;  
p{
    width:500%
}

    
  }
h1 {
    color: #E55E38;
    font-size: 66px;
    margin:0;
}
h3 {
    color:  #07090F ;
    font-size:20px;
}
.line {
    color:#353746 
}
p{
    color:#353746 ;
    font-size:20px;
    
    width:500px
}

`



function FrontPage ({opacity}) {
 
    return(

        <StyledFrontPage style={{opacity}}>
        <Grid container >
            <Grid item xs={12}>
        <h3>Hello, my name is</h3>
        <h1> Dustin Scroggins.</h1>
        <h1 className={'line'}>I express myself through the Web.</h1>
        <p> I'm a software developer, from the Golden State(CA) with a passion for building websites that feature user friendly functionality, visually appealing design, and everything in between.</p>
            </Grid>     
        </Grid>
        </StyledFrontPage>






    )




}

export default FrontPage