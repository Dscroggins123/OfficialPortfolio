import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { gsap } from "gsap";

const StyledFrontPage = styled.section`
margin-bottom: 200px;
padding-top:8%;
width:100%;
@media screen and (max-width: 740px) {
    
width:100%;
 


}  

p{
    width:500px
}

    
  }
h1 {
    color: #E55E38;
    font-size: clamp(45px,7vw, 80px);
    margin:0;
    width:85%
}

.line {
    color:#353746 
}
p{
    color:#353746 ;
    font-size:20px;
    
    width:500px
}

`;

function FrontPage() {

    const heroRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(heroRef.current,{
            x:-1200,
           
        },{
            x:0,
            
            delay:1
            
           
           

        })
        
    }, [])



  return (
    <StyledFrontPage id="hero">
      <Grid container>
        <Grid item xs={12} ref={heroRef} >
          <p>Hello, my name is</p>
          <h1> Dustin Scroggins.</h1>
          <h1 className={"line"}>I express myself through the Web.</h1>
          <p>
            {" "}
            I'm a software developer, from the Golden State(CA) with a passion
            for building websites that feature user friendly functionality,
            visually appealing design, and everything in between.
          </p>
        </Grid>
      </Grid>
    </StyledFrontPage>
  );
}

export default FrontPage;
