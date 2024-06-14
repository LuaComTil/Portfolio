import { Container, Grid, NativeSelect, Typography, styled } from "@mui/material";
import StyledCard from "../../../../components/StyledCard"


const Projects = () => {

    const ProjectsHeaderBackground = styled("div")(()=>({
        background: "linear-gradient(90deg, rgba(5,5,51,1) 0%, rgba(29,4,41,1) 100%)",
    }))

    const ProjectsBackground = styled("div")(()=>({
        background: "linear-gradient(to right, #000000, #434343)",
        boxShadow: "0px 44px 24px -24px #FFF inset",

    }))

    return (
    <>
        <ProjectsHeaderBackground>
            <Grid color="#FFF" display="flex" justifyContent="center">
                <Typography variant="h6" m="1rem">What technologies are you looking for?</Typography>
                <NativeSelect>
                    <option>Everything</option>
                    <option>Landing Page</option>
                    <option>Wordpress</option>
                    <option>NodeJS</option>
                    <option>React</option>
                    <option>React Native</option>
                    <option>Solidity</option>
                </NativeSelect>
            </Grid>
            <Typography variant="h3" p="2rem 0" textAlign="center" color="#FFF">Projects</Typography>
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
