import { Box, Container, Grid, NativeSelect, Typography, styled } from "@mui/material";
import StyledCard from "../../../../components/StyledCard"
import WestIcon from '@mui/icons-material/West';


const Projects = () => {

    const ProjectsHeaderBackground = styled("div")(()=>({
        background: "#aaaaaa",
    }))

    const ProjectsBackground = styled("div")(()=>({
        background: "linear-gradient(to right, #000000, #434343)",

    }))

    return (
    <>
        <ProjectsHeaderBackground>
            <Grid display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h6" m="1rem">What technology would solve your problem?</Typography>
                <NativeSelect disableUnderline>
                    <option>Any of them</option>
                    <option>Wordpress</option>
                    <option>Landing Page</option>
                    <option>React</option>
                </NativeSelect>
                <Box fontSize="32px">
                <WestIcon fontSize="inherit"/>
                </Box>
            </Grid>
            <Typography textTransform="uppercase" variant="h3" p="2rem 0" textAlign="center">My Projects</Typography>
        </ProjectsHeaderBackground>
        <ProjectsBackground>
            <Container maxWidth="lg">
                <Grid container gap={3} py="2rem" display="flex" justifyContent="space-evenly">
                    <Grid md={3}>
                    <StyledCard/>
                    </Grid>

                    <Grid md={3}>
                    <StyledCard/>
                    </Grid>

                    <Grid md={3}>
                    <StyledCard/>
                    </Grid>

                    <Grid md={3}>
                    <StyledCard/>
                    </Grid>

                    <Grid md={3}>
                    <StyledCard/>
                    </Grid>
                </Grid>
            </Container>
        </ProjectsBackground>
    </>
  )
}

export default Projects;
