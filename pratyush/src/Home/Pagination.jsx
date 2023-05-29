import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';


export default function BasicPagination() {
  return (
    <Grid style ={paginationBox.container}>
    <Grid style ={pagination.container}>
    <Stack spacing={2}>
      <Pagination count={10}  color="secondary" />
    </Stack>
    </Grid>
    </Grid>
  );
}
const pagination = {
    container:
    {backgroundColor:'lightBlue',
    display:'flex',
   justifyContent:'center',
   postion:'relative',
   border:'2px solid white',
   borderRadius:'4px',
   boxShadow:'2px 2px 12px white'
   
    }
} 
 const paginationBox ={
    container: 
    { 
        
        width:'100%',
        height:'80px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    }
 }