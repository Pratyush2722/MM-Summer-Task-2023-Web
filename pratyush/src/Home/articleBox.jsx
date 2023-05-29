import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';


const cardStyle= {
  box:{
    height :'60vh',
    backgroundColor:'skyBlue',
    width:'450px',
    boxShadow:'4px 4px 13px  skyBlue',
    color:'black'

  }
}
export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
   
}
const [count,setCount] =React.useState(0)
const incrementOnClickLike =()=>{
    setCount(count+1);
  };

 return (
    <Card style={cardStyle.box}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'lightBlue' ,color:'black' }} aria-label="recipe">
            Art
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="BlackCat Hacker Group breaches major consulting firm, Mazars Group"
        subheader="22 May , 2023"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary ">
        BlackCat hacker group breaches major consulting firm, Mazars Group
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Badge  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
 badgeContent={count } color="success">
        <Button onClick={incrementOnClickLike} >< FavoriteIcon sx ={{ color:'red',fontSize:'30px',marginTop:'45px',}} /></Button>
        </Badge>
       
        
        
        <IconButton aria-label="share">
          <ShareIcon  sx ={{color:'blue',marginLeft:'220px',marginTop:'45px'}}/>
        </IconButton>
        
      </CardActions>
      <div style={{display:'flex',position:'relative',justifyContent:'center'}}>
      <Button style ={{backgroundColor:'#01f7f7',color:'black',width:"80px",height:'30px',fontSize:'10px',boxShadow:'2px 2px 13px black'}}><h4>Read More</h4></Button>
      </div>
    </Card>
    );
  } 
