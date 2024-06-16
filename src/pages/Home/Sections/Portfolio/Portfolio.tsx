import { Container, Grid, NativeSelect, Typography, styled } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import Projects from "./Projects";
import { useState } from "react";


const Portfolio = () => {
    const [selectedTech, setSelectedTech] = useState<string>('Any of them')

    const handleTechChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedTech(event.target.value as string);
    }

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
                <NativeSelect value={selectedTech} onChange={handleTechChange} disableUnderline>
                    <option value="Any of them">Any of them</option>
                    <option value="Landing Page">Landing Page</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Typescript">Typescript</option>
                    <option value="React">React</option>
                    <option value="Material UI">Material UI</option>
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
                <Projects selectedTech={selectedTech}/>
            </Container>
        </PortfolioBackground>
    </>
  )
}

export default Portfolio;