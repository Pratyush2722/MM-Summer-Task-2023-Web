import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const cardStyle= {
  box:{
    height :'60vh',
    backgroundColor:'black',
    width:'50rem',
    boxShadow:'1px 1px 13px 1px grey',
    color:'white'
  }
}
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card style={cardStyle.box}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
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
      <CardMedia
        component="img"
        height="100"
        image="./im.jpg"
        alt="BlackCaat Hackers group"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        BlackCat hacker group breaches major consulting firm, Mazars Group
        
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph>
          The FBI has been investigating the financial activities of ALPHV/BlackCat, leading to connections with other ransomware gangs like Darkside and Blackmatter. This suggests that the group has an established network within the RaaS business, including money launderers. Their extensive involvement in the ransomware landscape has earned them a reputation as one of the most active gangs.
          </Typography>
          <Typography paragraph>
          {/* According to the dark web blog of ALPHV/BlackCat, a ransomware syndicate with ties to Russia, Mazars Group has fallen victim to a significant data breach. The post on the group’s blog claims that the criminals successfully obtained over 700 GB of sensitive information, encompassing various documents such as agreements, financial records, and other confidential data.

BlackCat is a rapidly growing malicious actor, accounting for a notable 9.6% of RaaS attacks during the first quarter of 2022. ALPHV/BlackCat came online around 2021, with the group claiming responsibility for over 60 major cyberattacks since then. They operate as a ransomware-as-a-Service (RaaS) business. Similar to other groups, they sell malware subscriptions to other criminals. What sets them apart is their utilisation of the Rust Programming language, as noted in Microsoft’s analysis. This choice of language discloses their possible ties with other prominent ransomware families such as Conti, LockBit, and REvil. */}


          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
