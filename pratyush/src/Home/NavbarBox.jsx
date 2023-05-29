import { Grid } from "@mui/material";
import Navbar from './Navbar'
function NavbarBox() {
    return (
        <Grid  style={NavbarBoxStyle.container}>
            <Navbar/>
               </Grid>
    )

}
 const NavbarBoxStyle ={
    container : {
        position: 'relative',
        width: '100%',
        height:'73px',
        backgroundColor:'skyBlue',
       


    }
 }
 export default NavbarBox