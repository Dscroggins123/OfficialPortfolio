import React from 'react'
import styled from 'styled-components';


const StyledFooter = styled.div`
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
     <a href="https://github.com/Dscroggins123/OfficialPortfolio" target="blank" ><p>Made by Dustin Scroggins 2020</p></a>
 </footer>
 </StyledFooter>

)


}
 export default Footer