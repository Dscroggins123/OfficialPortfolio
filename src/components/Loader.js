import React,{useEffect} from 'react'
import styled from 'styled-components';
import { gsap } from "gsap";

const styleLoader = styled.div`

background-color:black;
color:white;
postion:static;
text-align:center;
margin:0;

height:100vh;
width:100vw;



`

function Loader (){
    
    useEffect(() => {
        gsap.from('#yeah',{
            opacity:1
        })
    }, [])
    
    
    
    return(
<styleLoader id="yeah">
<h1> Hey </h1>
</styleLoader>

    )
}
export default Loader