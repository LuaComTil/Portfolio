import { Container, Grid, NativeSelect, Typography, styled } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import Projects from "../../../../components/Projects.tsx"

const Portfolio = () => {

    const PortfolioHeaderBackground = styled("div")(()=>({
        background: "#aaaaaa",
    }))

    const PortfolioBackground = styled("div")(()=>({
        background: "linear-gradient(to right, #000000, #434343)",

    }))

    return (
    <>
        <PortfolioHeaderBackground>
            <Grid sx={{
                        '@media (max-width: 600px)': {
                        flexDirection: "column"
                        }}} display="flex" justifyContent="center" alignItems="center" p="8px">
                <Typography variant="h6" m="1rem">What technology would solve your problem?</Typography>
                <NativeSelect disableUnderline>
                    <option>Any of them</option>
                    <option>Wordpress</option>
                    <option>Landing Page</option>
                    <option>React</option>
                </NativeSelect>
                <Typography 
                    sx={{
                        '@media (max-width: 600px)': {
                        display: "none"
                        }}} fontSize="32px">
                    <WestIcon fontSize="inherit"/>
                </Typography>
            </Grid>
        </PortfolioHeaderBackground>
        <PortfolioBackground>
            <Container maxWidth="lg">
                <Typography color="white" textTransform="uppercase" variant="h3" p="2rem 0" textAlign="center">My Projects</Typography>
                <Projects/>
            </Container>
        </PortfolioBackground>
    </>
  )
}

export default Portfolio;
