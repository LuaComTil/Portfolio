import styled from 'styled-components';
import { useTheme } from '../../Contexts/ThemeContext';
import avatar from "../../assets/images/avatar.jpg";
import CV from "../../../public/CV.pdf"
import StyledButton from '../../Components/StyledButton';
import { useTranslation } from 'react-i18next';
import Swipe from './Swipe';


const SyledBackground = styled.section`
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  max-width: 100vw;
  height: 100vh;
  transition: 0.5s;
`;

const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-family: "Rubik", sans-serif;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const About = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  @media (max-width: 1200px) {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 4px;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  @media (max-width: 1200px) {
    text-align: center;
    font-size: 1.4rem;
  }
`;

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const handleDownload = () => {
    const fileUrl = CV;
    const link = document.createElement('a');

    link.href = fileUrl;
    link.setAttribute('download', 'CV.pdf');
    link.click();
  };


  return (
  <SyledBackground theme={theme}>
    <Swipe/>
    <Container>
      <div>
        <img style={{transition:"0.5s", width:"333px", borderRadius: "64px", boxShadow: `-4px -4px ${theme.shadow}`}} src={avatar}/>
        {/*<svg style={{height:"333px"}} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>*/}
      </div>
      <About>
        <Title>Luã de Freitas Ramos</Title>
        <Subtitle>{t("hero.subtitle")}</Subtitle>
        <p style={{lineHeight: "1.5rem", padding: "0.6rem 0"}}>{t("hero.description")}</p>
        <div style={{gap: "1rem", display: "flex", justifyContent: "space-evenly"}}>
        <StyledButton onClick={handleDownload}>
        <svg style={{height:"1.2rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill={theme.text}></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill={theme.text}></path> </g></svg>
          <p>{t("hero.downloadCV")}</p>
        </StyledButton>
        <StyledButton onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=luadefreitasramos@gmail.com", '_blank')}>
          <svg style={{height:"1.2rem"}} fill={theme.text} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z"></path></g></svg>
          <p>{t("hero.contactMe")}</p>
        </StyledButton>
        </div>
      </About>
    </Container>
  </SyledBackground>
  );
};

export default Hero;
