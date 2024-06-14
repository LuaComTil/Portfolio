import { Container, Grid, NativeSelect, Typography, styled } from "@mui/material";
import StyledCard from "../../../../components/StyledCard"


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
            <Grid display="flex" justifyContent="center">
                <Typography variant="h6" m="1rem">What technologies are you looking for?</Typography>
                <NativeSelect>
                    <option>Everything</option>
                    <option>Landing Page</option>
                    <option>React</option>
                </NativeSelect>
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
