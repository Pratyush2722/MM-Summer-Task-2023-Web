import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarBorder from '@mui/icons-material/StarBorder';
import HomeIcon from '@mui/icons-material/Home';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import FilterIcon from '@mui/icons-material/Filter';

const sidebarStyle = {
    position:'relative',
    width:'100%',
    height:'35px',
    display:'flex',
    backgroundColor:'skyBlue',
    boxShadow:'2px 2px 13px skyblue',


}


 function NestedList() {
 

 
 

  return (
    <List style = {sidebarStyle}
    >
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <NewReleasesIcon/>
        </ListItemIcon>
        <ListItemText primary="Trending" />
      </ListItemButton>
      <ListItemButton >
        

        <ListItemIcon >
          <FilterIcon />
        </ListItemIcon>
        <ListItemText primary="Filter" />
      </ListItemButton>
   
  


          <ListItemButton sx={{ pl:2}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Favourites" />
          </ListItemButton>
        </List>
     
   
  );
}
export default NestedList