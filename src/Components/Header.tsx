import styled from 'styled-components';
import { useTheme } from "../Contexts/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Styledheader = styled.header`
    background: ${props => props.theme.headerBg};
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    gap: 32px;
    font-size: 3rem;
    width: 100%;
    padding: 8px 0;
    position: fixed;
    transition: 0.5s;
    box-shadow: 0 8px 16px #0000001a;
    z-index: 9;
`

const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Styledheader theme={theme}>
            <FontAwesomeIcon style={{cursor:"pointer"}} onClick={toggleTheme} icon={faLightbulb}/>
            <a href="https://github.com/LuaComTil">
            <FontAwesomeIcon icon={faGithub}/>
            </a>
            <a href="https://www.linkedin.com/in/lu%C3%A3/">
            <FontAwesomeIcon icon={faLinkedin}/>
            </a>
        </Styledheader>
    );
};

export default Header;