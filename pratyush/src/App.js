
import React from "react";
import Navbar from './Home/Navbar';
import { Box } from "@mui/material";
import Body from './Home/Body';


function App() {
  return (
   <Box sx = {{ backgroundColor :'black'}}>
    <Navbar/>
     <Body/>
   </Box>

  )
}

export default App;
