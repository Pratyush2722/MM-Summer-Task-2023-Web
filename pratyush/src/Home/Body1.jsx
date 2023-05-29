import {Box} from "@mui/material";
import ArticleFixed from "./ArticleFixed";
function Body (){
    return (
      <Box style = {GridStyle.container} >
            <Box><ArticleFixed/></Box>
            <Box><ArticleFixed/></Box>
            <Box><ArticleFixed/></Box>
            <Box><ArticleFixed/></Box>
        </Box>
    )
}

const GridStyle = {
    container:{
    height:'60vh',
    width:'100%',
    }
}
export default Body
