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
     <div style ={ArticleSt.container} >
        <Grid style ={GridStyle.container}>
            <div style = {headingStyle.container}>
        <h3 >Explained | How recession in Germany will impact the Indian economy  </h3></div>
        </Grid>
        <Grid style ={GridStyleBody.container} >
       
        Germany, long touted as Europe's growth engine and the world’s fourth largest economy, entered recession as its Gross Domestic Product fell 0.3 per cent in the first quarter of 2023. This follows a decline of 0.5 per cent in the fourth quarter of the last year, effectively pushing the country into a recession. Germany’s economy minister Robert Habeck blamed the country’s previous high dependency on Russian gas for the prevailing economic crisis. Speaking at an event in Berlin on Thursday, Habeck said, “We're fighting our way out of this crisis.
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
const ArticleSt ={
    container:
    {    marginLeft:'40px',
    border:'2px solid lightBlue',
borderRadius:'4px',
boxShadow:'2px 2px 6px lightBlue',
postion:'fixed'}
}
const headingStyle ={
    container:{
        postion:'absolute',
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
        width: '100%',
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
        width:'80%',
    //  marginLeft:'30px',  
        position:'relative',
        height:'185px'
     
    }
 }

 export default ArticleFixed