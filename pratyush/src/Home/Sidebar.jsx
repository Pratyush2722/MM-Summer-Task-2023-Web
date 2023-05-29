import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import StarBorder from '@mui/icons-material/StarBorder';


import NewReleasesIcon from '@mui/icons-material/NewReleases';
import FilterIcon from '@mui/icons-material/Filter';
export default function NestedList() {
  


  return (
    <List
      sx={{ width: '180px', bgcolor: 'lightBLue',position:"absolute" ,zIndex:"1",color:'black',}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
         
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <MenuIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <NewReleasesIcon />
        </ListItemIcon>
        <ListItemText primary="Trending" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <FilterIcon/>
        </ListItemIcon>
        <ListItemText primary="Filter" />
      </ListItemButton>
    
        <List>
          <ListItemButton >
            <ListItemIcon>
              <StarBorder/>
            </ListItemIcon>
            <ListItemText primary="Favourites" />
          </ListItemButton>
        </List>
    
    </List>
  );
    };
