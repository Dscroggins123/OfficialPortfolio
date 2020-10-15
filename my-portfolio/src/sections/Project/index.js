import React from 'react'
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Project3 from "./Screen Shot 2020-10-12 at 2.00.57 AM.png"
import Project2 from "./Screen Shot 2020-10-14 at 5.17.40 PM.png"

const StyledProjects = styled.div`
height:100vh;

width:100%;
@media screen and (max-width: 980px){
    background-color:yellow;
    margin:5px;
    
    
   
}
 @media screen and (max-width: 740px) {
    width:90%;  
    margin:10px;
    background-color:green;
    
   
    
        
      
      p {
          
          text-align: left;
          
      }
      h3{
        text-align: left; 
      }
      
      
      }



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
        
   
    background-color:#E4F1EB;
    position: relative;
    margin-block-start: 1em;
    margin-block-end: 1em;
    padding: 25px;
    border-radius:4px;
    
    box-shadow: 0 10px 30px -15px #778392;
        }
.projectContent{
    width:100% ;
    
    text-align:right;
  display:block;
  margin-bottom:180px;
}
.projectContentLeft{
    width:100%;
    position: relative;
    text-align:left;

}
ul{
   display:flex; 
   flex-wrap: wrap;
margin:25px 0px 10px;
position: relative;
list-style:none;
padding: 0px;


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
 <Grid item md={6} xs={12} >
 <img src={Project3} />
 </Grid>
 <Grid item md={6} xs={12}  className='projectContent'>
 <p style={{fontSize:'17px',marginBottom:'0%' ,color:'#E55E38'}}> Featured Project</p>
 <h3 style={{fontSize:'24px',marginTop:'5px'}}> Muse eXchange </h3>
 <div style={{marginRight:'50px'}} > 
  <p className='productDetail'> A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. 
      Sign Up and explore different talents or upload your own products and see the sales come in!  </p>   
</div>
<ul style={{justifyContent:'flex-end'}} > 
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>Express.js</li>
</ul>

 </Grid>
 
 <Grid item md={5} xs={12}  className='projectContentLeft' >
 <p style={{fontSize:'17px',marginBottom:'0%' ,color:'#E55E38'}}> Featured Project</p>
 <h3 style={{fontSize:'24px',marginTop:'5px'}}> DreamQuest </h3>
 <div > 
  <p  className='productLeft'> A Javascript adventure game where users can create their own characters and take them through a quest that features minigames, riddles, and tons of other fun.
      Are you prepared to take the Quest?? </p>   
</div>

<ul style={{justifyContent:'flex-start'}}> 
    <li>Javascript</li>
    <li>JQuery</li>
    <li>Node.js</li>
    <li>My SQL/Sequelize</li>
</ul>

 </Grid>
 <Grid item md={7} xs={12}  style={{marginBottom:'100px'}}>
    
 <img src={Project2} />
 
 </Grid>

 <Grid item md={6} xs={12} >
 <img src={Project3} />
 </Grid>
 <Grid item md={6} xs={12}  className='projectContent'>
 <p style={{fontSize:'17px',marginBottom:'0%' ,color:'#E55E38'}}> Featured Project</p>
 <h3 style={{fontSize:'24px',marginTop:'5px'}}> Muse eXchange </h3>
 <div style={{marginRight:'50px'}} > 
  <p className='productDetail'> A music marketplace where users leverage their talents to make money by selling their music or time in the form of tutorials. 
      Sign Up and explore different talents or upload your own products and see the sales come in!  </p>   
</div>
<ul style={{justifyContent:'flex-end'}}> 
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Node.js</li>
    <li>Express.js</li>
</ul>

 </Grid>

</Grid>
 <button> More Projects</button>

</StyledProjects>



)




}

export default Project 