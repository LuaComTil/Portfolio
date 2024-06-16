import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from "../../../../assets/images/avatar.jpg";
import StyledButton from "../../../../StyledComponents/StyledButton";
import AnimatedBackground from "./AnimatedBackground";
import SimpleLine from "../../../../StyledComponents/StyledSimpleLine";

const Hero = () => {

    const handleDownload = () => {
        const fileUrl = 'https://luacomtil.github.io/Portfolio/assets/CV.pdf'; //TEST IF IT'LL WORK
        const link = document.createElement('a');

        link.href = fileUrl;
        link.setAttribute('download', 'CV.pdf');
        link.click();
    };

    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: "transparent",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "40px",
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
                        <Typography color="secondary" variant="h2" textAlign="center">Front-End Developer</Typography>
                        <SimpleLine/>
                        <Grid container  display="flex" justifyContent="center" spacing={3} py={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={handleDownload}>
                                    <DownloadIcon/>
                                    <Typography>
                                    Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=luadefreitasramos@gmail.com", '_blank')}>
                                    <EmailIcon/>
                                    <Typography>
                                    Contact Me
                                    </Typography>
                                </StyledButton>
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
