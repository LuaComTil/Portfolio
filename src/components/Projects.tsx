import React, { useEffect, useState } from 'react';
import projectsData from "../data/projects.json";
import StyledCard from './StyledCard';
import StyledButton from './StyledButton';
import { Grid, Typography, styled } from '@mui/material';

interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    linkCode: string;
    linkView: string;
    technologies: string[];
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);


    const StyledImg = styled("img")(({theme})=>({
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "4px",
        width: "100%",
        height: "auto",
        aspectRatio: 16/9,
        objectFit: "cover"
    }))


    return (
        <Grid className="projects" container gap={3} py="2rem" display="flex" justifyContent="space-evenly">
            {projects.map(project => (

                <Grid key={project.id} md={3}>
                    <StyledCard>
                        <Grid>
                        <Typography variant="h6"><b>{project.title}</b></Typography>
                        <StyledImg src={project.image} alt={project.title}/>
                        <p>{project.description}</p>
                        </Grid>
                        <Grid mb="8px" gap={2} display="flex" justifyContent="space-evenly">
                            <StyledButton onClick={() => window.open(project.linkCode, '_blank')}>
                                View Code
                            </StyledButton>
                            <StyledButton onClick={() => window.open(project.linkView, '_blank')}>
                                View Project
                            </StyledButton>
                        </Grid>
                    </StyledCard>
                </Grid>

            ))}
        </Grid>
    );
};

export default Projects;
