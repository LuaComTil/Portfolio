import { Container, Typography } from "@mui/material";
import Projects from "./Projects.tsx"

const Portfolio = () => {

    return (
    <>
        <section style={{ background: "linear-gradient(to right, #000000, #434343)"}}>
            <Container sx={{
                    '@media (max-width: 600px)': {
                    padding: "0"
                    }}} maxWidth="lg">
                <Typography color="white" textTransform="uppercase" variant="h3" p="2rem 0" textAlign="center">My Projects</Typography>
                <Projects/>
            </Container>
        </section>
    </>
  )
}

export default Portfolio;
