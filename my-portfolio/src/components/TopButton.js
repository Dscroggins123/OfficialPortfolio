import React from 'react'
import Top from './arrow.png'
import styled from 'styled-components';




const StyledLink = styled.div`

position: fixed;
right: 0;
top: 50%;
width: 8em;
margin-top: -2.5em;


img{
    height:40px;
width:40px;
}


`


function TopButton () {
    
return (
    <StyledLink>
    <a href="#hero" > 
        <img src={Top}/>
    </a>
    </StyledLink>
)



}

export default TopButton