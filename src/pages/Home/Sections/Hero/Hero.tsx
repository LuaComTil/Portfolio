import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from "../../../../assets/images/avatar.jpg";
import ButtonWhite from "../../../../components/ButtonWhite";
import AnimatedBackground from "../../../../components/AnimatedBackground";

const Hero = () => {

    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: "transparent",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "280px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0px",
        },

      }))

      const StyledImg = styled("img")(()=>({
        width: "80%",
        borderRadius: "50%",
        boxShadow: "0px 0px 16px 8px black",
      }))

    return (
    <>
        <StyledHero>
            <Box position="absolute" width="100%" top="0" left="0" zIndex="-1">
                <AnimatedBackground/>
            </Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12}  md={4} textAlign="center">
                        <StyledImg src={Avatar}/>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography color="secondary" variant="h1" textAlign="center" pb={2}>Luã de Freitas Ramos</Typography>
                        <Typography color="secondary" variant="h2" textAlign="center">Software Developer</Typography>
                        <Grid container  display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <ButtonWhite onClick={() => console.log("download")}>
                                    <DownloadIcon/>
                                    <Typography>
                                    Download CV
                                    </Typography>
                                </ButtonWhite>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <ButtonWhite onClick={() => console.log("contact")}>
                                    <EmailIcon/>
                                    <Typography>
                                    Contact Me
                                    </Typography>
                                </ButtonWhite>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    </>
  )
}

export default Hero;
