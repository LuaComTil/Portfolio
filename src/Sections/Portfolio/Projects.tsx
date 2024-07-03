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
            <img style={{maxWidth:"700px", maxHeight:"300px", objectFit: "contain"}} src={project.preview}/>
            {project.linkCode && (
              <StyledButton onClick={() => window.open(project.linkCode, '_blank')}>
                <svg style={{height:"1.4rem"}} fill={theme.text} viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" style={{fill: 'none',stroke: `${theme.text}`,strokeWidth: '2',strokeLinecap: 'round',strokeLinejoin: 'round',fillRule: 'evenodd'}}></path></g></svg>
                <p>View Code</p>
              </StyledButton>
            )}
            {project.linkView && (
              <StyledButton onClick={() => window.open(project.linkView, '_blank')}>
                <svg style={{height:"1.4rem"}} fill={theme.text} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.474 10.002c-1.1 0-2.157.462-2.966 1.195-.925.84-1.508 2.047-1.508 3.294 0 .665 1 .688 1 .024 0-.965.466-1.93 1.182-2.58.627-.57 1.47-.908 2.318-.934.655 0 .672-.998-.026-.998zM15 8c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6zm0-3c-4.883 0-8.625 1.953-11.13 4.02-1.254 1.033-2.2 2.095-2.843 2.968-.32.437-.565.826-.736 1.15-.17.325-.29.52-.29.862 0 .34.12.537.29.86.172.326.416.715.737 1.152.642.873 1.59 1.935 2.842 2.968C6.374 22.047 10.116 24 15 24c4.883 0 8.625-1.953 11.13-4.02 1.254-1.033 2.2-2.095 2.843-2.968.32-.437.565-.826.736-1.15.17-.325.29-.52.29-.862 0-.34-.12-.537-.29-.86-.172-.326-.416-.715-.737-1.152-.642-.873-1.59-1.935-2.842-2.968C23.626 7.953 19.884 6 15 6zm0 1c4.617 0 8.125 1.838 10.494 3.79 1.185.978 2.082 1.984 2.674 2.79.296.403.515.758.656 1.024.175.327.136.55 0 .792-.147.263-.36.62-.656 1.024-.592.806-1.49 1.812-2.674 2.79C23.124 21.16 19.617 23 15 23s-8.125-1.838-10.494-3.79c-1.185-.978-2.082-1.984-2.674-2.79-.296-.403-.51-.76-.656-1.024-.14-.25-.17-.485 0-.792.145-.264.36-.62.656-1.024.592-.806 1.49-1.812 2.674-2.79C6.876 8.84 10.383 7 15 7z"></path></g></svg>
                <p>View Project</p>
              </StyledButton>
            )}
          </div>
        </StyledProject>
      ))}
    </StyledProjectDisplay>
  );
};

export default Projects;
