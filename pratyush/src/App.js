
import React from "react";
import { Box } from "@mui/material";
import ScrollingBody from './Home/ScrollingBody';
import Taskbar from './Home/Taskbar';
import NavbarBox from "./Home/NavbarBox"
import Body1 from "./Home/Body1";
import Pagination from "./Home/Pagination";

function App() {
  return (
   
   <Box sx = {{ backgroundColor:'black'}}>
   
    <NavbarBox/>
     <Taskbar/>
  
     
      <ScrollingBody/>
      
   
     <Body1/> 
     <Body1/> 
     <Body1/> 
     <Body1/> 
     <Body1/> 
     <Body1/> 
     <Pagination/>
     </Box>
     

  )
}

export default App;
