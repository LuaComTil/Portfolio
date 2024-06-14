import { AppBar, Grid, Link, styled } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {

    const LinkIconLined = styled(Link)(()=>({
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }))

  return (
    <>
        <AppBar position="fixed">
            <Grid display="flex" justifyContent="center" gap="32px" fontSize="3rem">
                <LinkIconLined color="#FFF" href="#"><GitHubIcon fontSize="inherit"/></LinkIconLined>
                <LinkIconLined color="#FFF" href="#"><LinkedInIcon fontSize="inherit"/></LinkIconLined>
            </Grid>
        </AppBar>
    </>
  )
}

export default Header;