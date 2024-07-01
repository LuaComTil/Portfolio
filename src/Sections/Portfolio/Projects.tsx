import React, { useEffect, useState } from 'react';
import projectsData from "../../data/projects.json";
import styled from 'styled-components';
import { useTheme } from '../../Contexts/ThemeContext';
import StyledButton from '../../Components/StyledButton';

interface Project {
  id: number;
  title: string;
  description: string;
  preview: string;
  linkCode: string;
  linkView: string;
  technologies: string[];
}

interface ProjectsProps {
  selectedTech?: string;
}

const StyledProjectDisplay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  gap: 2rem;
`;

const StyledProject = styled.div`
  background: ${props => props.theme.overlay};
  border-radius: 8px;
  padding: 2rem;
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
  box-shadow: 0 8px 16px #0000001a;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    box-shadow:
      inset 0px -16px 25px -21px black,
      inset 0px 16px 25px -21px black;
    border-radius: 0px;
  }
`;

const transformDescription = (description: string) => {
  return description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

const Projects: React.FC<ProjectsProps> = ({ selectedTech }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  useEffect(() => {
    if (selectedTech && selectedTech !== "none") {
      setProjects(projectsData.filter(project =>
        project.technologies.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase()))
      ));
    } else {
      setProjects(projectsData);
    }
  }, [selectedTech]);

  return (
    <StyledProjectDisplay theme={theme}>
      {projects.map(project => (
        <StyledProject theme={theme} key={project.id}>
          <div>
            <h3 style={{ fontSize: "2rem" }}>{project.title}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: transformDescription(project.description) }}
              style={{ lineHeight: "1.2rem", padding: "1rem 1rem 1rem 0", whiteSpace: "pre-wrap" }}
            />
          </div>
          <div style={{ flexShrink: "0", flexBasis: "40%", position: "relative", gap: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <img style={{maxHeight:"200px", objectFit: "contain"}} src={project.preview}/>
            {project.linkCode && (
              <StyledButton onClick={() => window.open(project.linkCode, '_blank')}>
                View Code
              </StyledButton>
            )}
            {project.linkView && (
              <StyledButton onClick={() => window.open(project.linkView, '_blank')}>
                View Project
              </StyledButton>
            )}
          </div>
        </StyledProject>
      ))}
    </StyledProjectDisplay>
  );
};

export default Projects;
