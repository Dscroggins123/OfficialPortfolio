import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Project3 from "./Screen Shot 2020-10-12 at 2.00.57 AM.png"

const StyledProjects = styled.div`
height:100vh;
padding-top:2%;
width:100%;



.sectionName {
    color:#353746;
    font-size:27px;
    
}
img {
    height:360px;
    width:575px;
    border-radius:1%;
    box-shadow: 0 10px 30px -15px #1B1E22;

}
.productDetail {
    
    width:100%;
    background-color:#E4F1EB;
    position: relative;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding: 25px;
    border-radius:4px;
    text-align:initial;
    box-shadow: 0 10px 30px -15px #778392;
    }
.productLeft {
        
        width:400px;
        background-color:#E4F1EB;
        position: relative;
        margin-block-: 1em;
        margin-block-end: 1em;
        padding: 25px;
        border-radius:4px;
        text-align:initial;
        box-shadow: 0 10px 30px -15px #778392;
        }
.projectContent{
    width:100% ;
    
    text-align:right;
  display:block;
  margin-bottom:180px
}
.projectContentLeft{
    width:100%;
    
    text-align:left;
display:block;
}
ul{
   display:flex; 
   flex-wrap: wrap;
margin:25px 0px 10px;
position: relative;
list-style:none;
padding: 0px;
justify-content: flex-end;

}
li{
    display: list-item;
    text-align: -webkit-match-parent;
    margin: 0px 0px 5px 20px;
}

`




function Project (){


return (
<StyledProjects id="projects" >
<h3 className="sectionName"><span style={{fontSize:'21px',color:'#E55E38',}}>III. &nbsp;</span> Projects I've Built</h3>

<Grid container  style={{paddingTop:'2%'}}>
 <Grid item sm={6}>
 <img src={Project3} />
 </Grid>
 <Grid item sm={6} className='projectContent'>
 <p style={{fontSize:'17px',marginBottom:'0%' ,color:'#E55E38'}}> Featured Project</p>
 <h3 style={{fontSize:'24px',marginTop:'5px'}}> Muse eXchange </h3>
 <div style={{marginRight:'50px'}} > 
  <p className='productDetail'> A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. 
      Sign Up and explore different talents or upload your own products and see the sales come in!  </p>   
</div>
<ul> 
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>Express.js</li>
</ul>

 </Grid>
 
 <Grid item sm={6} className='projectContentLeft' >
 <p style={{fontSize:'17px',marginBottom:'0%' ,color:'#E55E38'}}> Featured Project</p>
 <h3 style={{fontSize:'24px',marginTop:'5px'}}> Muse eXchange </h3>
 <div className='productLeft'> 
  <p > A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. 
      Sign Up and explore different talents or upload your own products and see the sales come in!  </p>   
</div>
<ul style={{justifyContent:'flex-start'}}> 
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>Express.js</li>
</ul>

 </Grid>
 <Grid item sm={6} style={{marginBottom:'100px'}}>
    
 <img src={Project3} />
 
 </Grid>

 <Grid item sm={6}>
 <img src={Project3} />
 </Grid>
 <Grid item sm={6} className='projectContent'>
 <p style={{fontSize:'17px',marginBottom:'0%' ,color:'#E55E38'}}> Featured Project</p>
 <h3 style={{fontSize:'24px',marginTop:'5px'}}> Muse eXchange </h3>
 <div style={{marginRight:'50px'}} > 
  <p className='productDetail'> A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. 
      Sign Up and explore different talents or upload your own products and see the sales come in!  </p>   
</div>
<ul> 
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>Express.js</li>
</ul>

 </Grid>

</Grid>


</StyledProjects>



)




}

export default Project 