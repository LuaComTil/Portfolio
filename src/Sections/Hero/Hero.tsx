import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../Contexts/ThemeContext';
import avatar from "../../assets/images/avatar.jpg";
import CV from "../../../public/CV.pdf"
import StyledButton from '../../Components/StyledButton';


const SyledBackground = styled.section`
    background: ${props => props.theme.background};
    color: ${props => props.theme.text};
    max-width: 100vw;
    height: 100vh;
    transition: 1s;
`;

const Container = styled.div`
    max-width: 100%;
    height: 100%;
    padding: 0 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    font-family: "Rubik", sans-serif;
        @media (max-width: 1200px) {
    flex-direction: column;
    padding-top: 40px;
    }
`;

const Hero: React.FC = () => {
    const { theme } = useTheme();

    const handleDownload = () => {
        const fileUrl = CV;
        const link = document.createElement('a');

        link.href = fileUrl;
        link.setAttribute('download', 'CV.pdf');
        link.click();
    };

    return (
    <SyledBackground theme={theme}>
        <Container>
            <div>
                <img style={{width:"333px", borderRadius: "50%"}} src={avatar}/>
            </div>
            <div>
                <h1 style={{fontSize:"4rem"}}>Luã de Freitas Ramos</h1>
                <h6 style={{fontSize:"2rem"}}>Front-End Developer</h6>
                <div style={{gap: "1rem", display: "flex", justifyContent: "space-evenly", padding:"0.5rem"}}>
                <StyledButton onClick={handleDownload}>Download CV</StyledButton>
                <StyledButton onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=luadefreitasramos@gmail.com", '_blank')}>Contact Me</StyledButton>
                </div>
            </div>
        </Container>
    </SyledBackground>
    );
};

export default Hero;
