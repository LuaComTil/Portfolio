import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../Contexts/ThemeContext';
import StyledButton from '../../../Components/StyledButton';
import { useTranslation } from 'react-i18next';

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

const ProjectImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: 8px;
`;

const transformDescription = (description: string) => {
  return description.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

const Projects: React.FC<ProjectsProps> = ({ selectedTech }) => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    import(`../../../data/projects-${i18n.language}.json`)
      .then(data => {
        setProjects(data.default);
        setFilteredProjects(data.default);
      })
      .catch(err => console.error(`Failed to load projects for ${i18n.language}`, err));
  }, [i18n.language]);

  useEffect(() => {
    if (selectedTech && selectedTech !== "All") {
      const filtered = projects.filter(project =>
        project.technologies.some(tech => tech.toLowerCase().includes(selectedTech.toLowerCase())));
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  }, [selectedTech, projects]);

  return (
    <StyledProjectDisplay theme={theme}>
      {filteredProjects.map(project => (
        <StyledProject theme={theme} key={project.id}>
          <div>
            <h3 style={{ fontSize: "2rem" }}>{project.title}</h3>
            <p
              dangerouslySetInnerHTML={{ __html: transformDescription(project.description) }}
              style={{ lineHeight: "1.5rem", padding: "1rem 1rem 1rem 0", whiteSpace: "pre-wrap" }}
            />
          </div>
          <div style={{ flexShrink: "0", flexBasis: "40%", position: "relative", gap: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <ProjectImage src={project.preview} alt={`Preview of ${project.title}`} />
            {project.linkCode && (
              <StyledButton onClick={() => window.open(project.linkCode, '_blank')}>
                <svg style={{height:"1.4rem"}} fill={theme.text} viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path> </g></svg>
                <p>{t("portfolio.projects.code")}</p>
              </StyledButton>
            )}
            {project.linkView && (
              <StyledButton onClick={() => window.open(project.linkView, '_blank')}>
                <svg style={{height:"1.4rem"}} fill={theme.text} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.474 10.002c-1.1 0-2.157.462-2.966 1.195-.925.84-1.508 2.047-1.508 3.294 0 .665 1 .688 1 .024 0-.965.466-1.93 1.182-2.58.627-.57 1.47-.908 2.318-.934.655 0 .672-.998-.026-.998zM15 8c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 1c3.32 0 6 2.68 6 6s-2.68 6-6 6-6-2.68-6-6 2.68-6 6-6zm0-3c-4.883 0-8.625 1.953-11.13 4.02-1.254 1.033-2.2 2.095-2.843 2.968-.32.437-.565.826-.736 1.15-.17.325-.29.52-.29.862 0 .34.12.537.29.86.172.326.416.715.737 1.152.642.873 1.59 1.935 2.842 2.968C6.374 22.047 10.116 24 15 24c4.883 0 8.625-1.953 11.13-4.02 1.254-1.033 2.2-2.095 2.843-2.968.32-.437.565-.826.736-1.15.17-.325.29-.52.29-.862 0-.34-.12-.537-.29-.86-.172-.326-.416-.715-.737-1.152-.642-.873-1.59-1.935-2.842-2.968C23.626 7.953 19.884 6 15 6zm0 1c4.617 0 8.125 1.838 10.494 3.79 1.185.978 2.082 1.984 2.674 2.79.296.403.515.758.656 1.024.175.327.136.55 0 .792-.147.263-.36.62-.656 1.024-.592.806-1.49 1.812-2.674 2.79C23.124 21.16 19.617 23 15 23s-8.125-1.838-10.494-3.79c-1.185-.978-2.082-1.984-2.674-2.79-.296-.403-.51-.76-.656-1.024-.14-.25-.17-.485 0-.792.145-.264.36-.62.656-1.024.592-.806 1.49-1.812 2.674-2.79C6.876 8.84 10.383 7 15 7z"></path></g></svg>
                <p>{t("portfolio.projects.view")}</p>
              </StyledButton>
            )}
          </div>
        </StyledProject>
      ))}
    </StyledProjectDisplay>
  );
};

export default Projects;
