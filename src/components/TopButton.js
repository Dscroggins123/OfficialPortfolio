import React,{useEffect} from 'react'
import Top from './arrow.png'
import styled from 'styled-components';
import { gsap } from "gsap";




const StyledLink = styled.div`

position: fixed;
right: 0;
top: 50%;
width: 4em;
margin-top: -2.5em;



img{
    height:40px;
width:40px;
margin:0;
}
a{
    text-decoration:none;
    color:black;
}


`


function TopButton ({scroll}) {
    

    useEffect(() => {
        gsap.fromTo('#toggle',{
            autoAlpha:0,
           
        },{
            autoAlpha:1,
            duration:2,
            delay:1

            
           
           

        })
        
    }, [])



return (
    <StyledLink >
    {scroll > 700?
    <a href="#hero" id="toggle"> 
        <img src={Top}/>
        
    </a>: ''}
    </StyledLink>
)



}

export default TopButton