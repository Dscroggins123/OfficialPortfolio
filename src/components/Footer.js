import React from 'react'
import styled from 'styled-components';



const StyledFooter = styled.div`


padding-top:50px;
margin-top: 200px;
 
a{
    text-decoration:none;
    color:black;
    text-align:center;
}
a: hover{
    color: #E55E38
}




`

function Footer () {


return(
<StyledFooter>
 <footer>
     <a href="https://github.com/Dscroggins123/OfficialPortfolio" target="blank" ><p>Built by Dustin Scroggins</p></a>
 </footer>
 </StyledFooter>

)


}
 export default Footer