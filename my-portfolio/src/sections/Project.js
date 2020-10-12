import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Project3 from "../Screen Shot 2020-10-12 at 2.00.57 AM.png"

const StyledProjects = styled.div`
height:100vh;
padding-top:2%;
width:800px;

h3 {
    color:#353746;
    font-size:27px;
    text-align:center
}
img {
    height:400px;
    width500px
}
`




function Project (){


return (
<StyledProjects id="projects" >
<h3><span style={{fontSize:'21px',color:'#E55E38',}}>III. &nbsp;</span> Projects I Built</h3>

<Grid container>
 <Grid item sm={12}>
 <img src={Project3} />
 </Grid>

</Grid>
</StyledProjects>



)




}

export default Project 