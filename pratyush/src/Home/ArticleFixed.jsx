import Badge from '@mui/material/Badge';
import { Box, Button, Grid } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import img from '../Home/download.jpg';
import React from 'react';
function ArticleFixed () {
    const [count,setCount] =React.useState(0)
        const incrementOnClick =()=>{
            setCount(count+1);
        }
    
    return (
        <Box  style={ArticleFix.container}>
            <div  style={imageBox.container}>
     <img  style ={imageStyle.container}src  ={img}></img>
     </div>
     <div >
        <Grid style ={GridStyle.container}>
            <div style = {headingStyle.container}>
        <h3 > IAM DOING A WEB PROJECT it is the first Article </h3></div>
        </Grid>
        <Grid style ={GridStyleBody.container} >
        the body of the   article is this  thank you for watching 

        </Grid>
        <Grid >
        <Badge badgeContent={count } color="success"  >
        <Button onClick={incrementOnClick} >< ThumbUpAltIcon sx ={{color:'lightBlue',backgroundColor:'black',borderRadius:'4px',fontSize:'30px'}} /></Button>
      </Badge>
        </Grid>
     </div>
        


        </Box>
    )

}
const headingStyle ={
    container:{
        postion:'relative',
        width:'100%',
        height:'20px',
       
        marginTop:'15px',
        marginLeft:'30px',

    }
}
 const ArticleFix ={
    container : {
        position: 'absolute',
        width: '100%',
        height:'52vh',
        // backgroundColor:'skyBlue',
        display:'flex',
        flexDirection:'row',
        color:'skyBlue',
        marginTop:'15px',
        marginLeft:'30px',
        
    }
    
 }
  const imageBox ={
    container : {
        position: 'relative',
        width: '50%',
        height:'50vh',
      
        display:'flex',
        flexDirection:'row',
        margin:'4px',
        backgroundColor:'black',
        borderRadius:'10px',
        justifyContent:'center',
       alignItems:'center',
       boxShadow:'5px 5px 13px skyBlue'
        
    }
    
 }

 const imageStyle={
    container:{
        width:'88%',
        height:'45vh',
        position:'relative',
        display:'flex',
       borderRadius:'20px',
       
        
}}
 const GridStyle = {
    container :{
        width:'100%',
        height:'40px',
        postion:'relative',
        marginTop:'20px'
    }
 }
 const GridStyleBody={
    container:{
        width:'100%',
     marginLeft:'30px',  
        position:'relative',
        height:'185px'
     
    }
 }

 export default ArticleFixed