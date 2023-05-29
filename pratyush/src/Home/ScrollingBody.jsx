import React from "react";
import Main from './articleBox'
import styled from "@emotion/styled";


const Style=styled("Box")({
   
    
    width:"100%",
    height:"90vh",
    display: "flex",
   columnGap: '30px',
   flexDirection:'row',
   alignItems:'center',
   backgroundColor:'black'


  
})

function Body()
{
    return(
        <Style > 
             
            <Main/>   
            <Main/>     
            <Main/>     
           

             
            
        </Style>
    )
}
export default Body