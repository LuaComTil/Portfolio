import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../Contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';import { faGitAlt, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileLines } from '@fortawesome/free-solid-svg-icons';
import Projects from './Projects';

interface TechProps {
  selected: boolean;
}

const SyledBackground = styled.section`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  max-width: 100vw;
  min-height: 100vh;
  transition: 1s;
`;

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 0 10%;
  font-family: "Rubik", sans-serif;
  @media (max-width: 600px) {
    padding: 0;
    }
`;

const FilterBox = styled.div`
  padding: 1rem;
  background: ${props => props.theme.overlay};
  border-radius: 8px;
  box-shadow: 0 8px 16px #0000001a;
  @media (max-width: 600px) {
    margin: 0 24px;
    }
`;

const FontsBox = styled.div`
  font-size: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Tech = styled.div<TechProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.3s, border 0.3s;

  ${props =>
    props.selected
      ? css`
          > svg {
            filter: drop-shadow(0px 0px 8px #FF0000);
          }
        `
      : css`
          filter: ;
        `}
`;

const Portfolio: React.FC = () => {
  const { theme } = useTheme();
  const [selectedTech, setSelectedTech] = useState<string>('none');

  const handleTechClick = (tech: string) => {
    setSelectedTech(prevTech => (prevTech === tech ? 'none' : tech));
  };
  
  return (
    <SyledBackground theme={theme}>
      <Container>
        <FilterBox theme={theme}>
          <h6 style={{fontSize: "2rem",textAlign: "center"}}>Select which technologies would solve your problems?</h6>
          <div style={{margin: "8px 0",background: "black", height: "2px", width: "100%"}}></div>
          <FontsBox>
            <Tech
              onClick={() => handleTechClick('React')}
              selected={selectedTech === 'React'}
              theme={theme}
            >
              <FontAwesomeIcon style={{ margin: "4px" }} icon={faReact} />
              <p style={{ fontSize: "1rem" }}>React</p>
            </Tech>
            <Tech
              onClick={() => handleTechClick('React Native')}
              selected={selectedTech === 'React Native'}
              theme={theme}
            >
              <FontAwesomeIcon style={{ margin: "4px" }} icon={faReact} />
              <p style={{ fontSize: "1rem" }}>Native</p>
            </Tech>
            <Tech
              onClick={() => handleTechClick('SQLite')}
              selected={selectedTech === 'SQLite'}
              theme={theme}
            >
              <FontAwesomeIcon style={{ margin: "4px" }} icon={faDatabase} />
              <p style={{ fontSize: "1rem" }}>SQLite</p>
            </Tech>
            <Tech
              onClick={() => handleTechClick('Javascript')}
              selected={selectedTech === 'Javascript'}
              theme={theme}
            >
              <FontAwesomeIcon style={{ margin: "4px" }} icon={faJs} />
              <p style={{ fontSize: "1rem" }}>Javascript</p>
            </Tech>
            <Tech
              onClick={() => handleTechClick('NodeJs')}
              selected={selectedTech === 'NodeJs'}
              theme={theme}
            >
              <FontAwesomeIcon style={{ margin: "4px" }} icon={faNodeJs} />
              <p style={{ fontSize: "1rem" }}>NodeJs</p>
            </Tech>
            <Tech
              onClick={() => handleTechClick('Git')}
              selected={selectedTech === 'Git'}
              theme={theme}
            >
              <FontAwesomeIcon style={{ margin: "4px" }} icon={faGitAlt} />
              <p style={{ fontSize: "1rem" }}>Git</p>
            </Tech>
            <Tech
              onClick={() => handleTechClick('Landing Page')}
              selected={selectedTech === 'Landing Page'}
              theme={theme}
            >
              <FontAwesomeIcon style={{margin: "4px"}} icon={faFileLines}/>
              <p style={{ fontSize: "1rem" }}>Landing Page</p>
            </Tech>
          </FontsBox>
        </FilterBox>

        <Projects selectedTech={selectedTech}/>
      </Container>
    </SyledBackground>
  );
};

export default Portfolio;
