import React, { useEffect, useState } from 'react';
import projectsData from "../../../../data/projects.json";
import StyledCard from '../../../../StyledComponents/StyledCard';
import StyledButton from '../../../../StyledComponents/StyledButton';
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

interface ProjectsProps {
    selectedTech?: string;
}

const Projects: React.FC<ProjectsProps> = ({ selectedTech }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    useEffect(() => {
        if (selectedTech && selectedTech !== "Any of them") {
            setProjects(projectsData.filter(project =>
                project.technologies.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase()))
            ));
        } else {
            setProjects(projectsData);
        }
    }, [selectedTech]);


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

                <Grid item key={project.id} md={3}>
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
