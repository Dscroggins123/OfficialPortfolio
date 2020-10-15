import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import bootstraplogo from '../bootstrapnew.png';
import html from '../html5.png';
import css from '../css (1).png';
import github from '../githubnew.png'
import JQuery from '../JQuery_logo-512.png'
import materialize from '../materialize-logo.png'
import mongodb from '../mongodbnew.png'
import node from '../node.png'
import mysql from '../mysql.png'
import react from '../logo512.png 13-06-14-691.png'
import javascript from '../pngguru.com.png'
import npm from '../800px-Npm-logo.svg.png'





const StyledSkills = styled.div`
padding-top:2%;
width:100%;
height: 100vh;

@media screen and (max-width: 740px) {
    width:100%;  
   
    margin-bottom:225px;
    
.container{
        width:100%;
        margin-left:50px;
    }   
    

      }


h3 {
    color:#353746;
    font-size:27px;
    text-align:center
}
.skilldescription{
    text-align:center;
    font-size:18px;
    width:60%;
    margin-left:20%;
    

}

.tech{
    color:black;
    font-size:20px;
    margin-bottom:40px;
    
}
.container{
    width:600px
}
.skills{
    margin-bottom:10px
}




`

function Skills() {

return (
    <StyledSkills id="skills">
           
        <h3><span style={{fontSize:'21px',color:'#E55E38',}}>II. &nbsp;</span> Skills</h3>
        <p className="skilldescription"> In a fast paced industry I pride myself on my constant pursuit of more knowledge and my ability to process information quickly.
           </p>
        <Grid container className="container"style={{paddingTop:'20px'}}>
        <Grid item xs={12} ><p className="tech"> Technologies I've worked with </p></Grid>
            <Grid item sm={4} xs={6}  className="skills" >
                <img src={html}  height="70px" width="70px"/>
             </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <img src={css}  height="70px" width="70px"/>
            </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <img src={javascript}  height="70px" width="70px"/>
            </Grid>
            <Grid item sm={4} xs={6} className="skills" >
                <img src={JQuery}  height="70px" width="70px"/>
             </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <img src={react}  height="70px" width="70px"/>
            </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <img src={node}  height="70px" width="70px"/>
            </Grid><Grid item sm={4} xs={6} className="skills" >
                <img src={mongodb}  height="70px" width="70px"/>
             </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <img src={mysql}  height="70px" width="70px"/>
            </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <img src={bootstraplogo}  height="70px" width="70px"/>
            </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <img src={materialize}  height="70px" width="70px"/>
            </Grid><Grid item sm={4} xs={6} className="skills" >
                <img src={npm}  height="70px" width="70px"/>
             </Grid>
            <Grid item sm={4} xs={6} className="skills" >
            <a href="https://github.com/Dscroggins123" target="blank"><img src={github}  height="70px" width="70px"/></a>
            </Grid>

        </Grid>

        



    </StyledSkills>

)


}

export default Skills