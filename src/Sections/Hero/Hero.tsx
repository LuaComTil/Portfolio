import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../Contexts/ThemeContext';
//import avatar from "../../assets/images/avatar.jpg";
import CV from "../../../public/CV.pdf"
import StyledButton from '../../Components/StyledButton';
import "../../styles/Hero.css"


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
  gap: 6rem;
  font-family: "Rubik", sans-serif;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const SwipeOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
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
    <SwipeOverlay>
      <svg style={{height:"64px"}} fill={theme.text} viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 1000 1000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"> <path d="M550.5,3490.5L100,3040l126.1-124.1l124.1-126.1L600.5,3040l250.3,250.3V1572.5V-143.3h170.2h170.2v1725.8v1727.8l260.3-260.3l260.3-260.3l120.1,120.1l120.1,120.1l-454.5,454.5c-250.3,252.3-464.5,456.5-476.5,456.5C1008.9,3940.9,798.7,3738.7,550.5,3490.5z"></path> <path d="M3127.1,3080c-174.2-18-318.3-38-322.3-42c-2-4-76.1-166.2-160.2-360.4l-156.2-354.4l746.8-1027.1C3645.6,729.6,3998,245.1,4018,217.1c36-50,34-54.1-224.2-830.8c-142.1-428.5-260.3-790.8-260.3-804.8c0-14,216.2-320.3,480.5-682.7l480.5-660.7l274.3-110.1c152.1-62.1,686.7-276.3,1187.2-480.5l910.9-368.4l154.2,112.1c86.1,62.1,156.2,116.1,156.2,122.1c0,6-510.5,216.2-1135.2,468.5c-626.6,252.2-1183.2,478.5-1237.3,502.5c-94.1,40-122.1,74.1-496.5,586.6c-216.2,300.3-394.4,556.6-394.4,570.6c0,12,86.1,284.3,192.2,600.6c156.2,466.5,198.2,572.6,218.2,550.6c18-20,364.4-496.5,939-1291.3c6-8,270.3,184.2,272.3,196.2c0,8-598.6,834.8-1329.4,1841.9L2876.8,2369.3l50.1,110.1c26,60.1,64.1,142.1,82.1,180.2l34,70.1l194.2,20l192.2,20l824.8-1135.2c454.5-626.6,834.9-1137.2,842.9-1137.2c26,0,256.3,168.2,258.3,188.2c0,8-82.1,128.1-182.2,266.3c-98.1,136.1-186.2,262.3-192.2,278.3c-6,18,22,106.1,64.1,198.2c82.1,186.2,74.1,180.2,320.3,200.2l160.2,12l190.2-270.3c104.1-148.1,198.2-270.3,206.2-272.3c38-2,274.3,184.2,260.3,206.2c-8,14-66.1,104.1-130.1,200.2c-132.1,196.2-130.1,174.2-24,404.4c60.1,132.1,76.1,150.2,124.1,152.2c30,0,116.1,6,192.2,16l136.1,14l132.1-196.2c72.1-108.1,136.1-196.2,144.2-196.2c20,0,260.3,180.2,260.3,196.2c0,8-42,68.1-90.1,132.1c-50.1,66.1-90.1,126.1-90.1,136.1s32,94.1,72.1,186.2c82.1,186.2,72.1,180.2,318.3,200.2l160.2,12l560.6-774.8c308.3-426.4,580.6-802.8,606.6-838.9c32.1-44,128.1-364.4,304.3-1001l258.3-935l126.1-174.2c68.1-94.1,186.2-256.3,262.3-358.4l136.1-186.2l64.1,48c36,26,94.1,68.1,130.1,94.1c34,26,64.1,54.1,64.1,64.1c0,8-106.1,162.2-236.2,342.3L9427.5-832l-166.2,608.6c-92.1,334.3-208.2,756.8-260.3,939L8907,1048l-676.7,931c-372.4,512.5-680.7,935-682.7,936.9c-12,14-778.8-76.1-790.8-92.1c-8-8-44.1-84.1-82.1-172.2c-42.1-100.1-82.1-162.2-108.1-172.2c-22-8-188.2-36-368.4-62.1l-328.3-48l-86.1-184.2c-62.1-132.1-96.1-186.2-122.1-186.2c-68.1,0-750.8-80.1-764.8-88.1c-8-6-46-82.1-84.1-170.2c-38-90.1-74.1-162.2-82.1-162.2c-6,0-264.3,346.3-570.6,768.8l-556.6,770.8l-80.1-2C3479.4,3116.1,3301.3,3100.1,3127.1,3080z"></path> </g> </g> </g></svg>
    </SwipeOverlay>
    <Container>
      <div>
        {/* <img style={{width:"333px", borderRadius: "50%"}} src={avatar} */}
        <svg style={{height:"333px"}} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M97.8357 54.6682C177.199 59.5311 213.038 52.9891 238.043 52.9891C261.298 52.9891 272.24 129.465 262.683 152.048C253.672 173.341 100.331 174.196 93.1919 165.763C84.9363 156.008 89.7095 115.275 89.7095 101.301" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3318 190.694C-10.6597 291.485 121.25 273.498 148.233 295.083" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M98.3301 190.694C99.7917 213.702 101.164 265.697 100.263 272.898" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M208.308 136.239C208.308 131.959 208.308 127.678 208.308 123.396" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M177.299 137.271C177.035 133.883 177.3 126.121 177.3 123.396" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M203.398 241.72C352.097 239.921 374.881 226.73 312.524 341.851" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M285.55 345.448C196.81 341.85 136.851 374.229 178.223 264.504" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M180.018 345.448C160.77 331.385 139.302 320.213 120.658 304.675" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C219.024 205.562 219.594 220.898 219.594 236.324" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.395 190.156C225.896 202.037 232.97 209.77 241.777 230.327" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M80.1174 119.041C75.5996 120.222 71.0489 119.99 66.4414 120.41" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M59.5935 109.469C59.6539 117.756 59.5918 125.915 58.9102 134.086" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M277.741 115.622C281.155 115.268 284.589 114.823 287.997 114.255" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M291.412 104.682C292.382 110.109 292.095 115.612 292.095 121.093" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M225.768 116.466C203.362 113.993 181.657 115.175 160.124 118.568" stroke={theme.text} stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </div>
      <div>
        <h1 className='title'>Luã de Freitas Ramos</h1>
        <h6  className='subtitle'>Software Developer</h6>
        <p style={{ padding: "0.6rem 0"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum lacus, pretium at vehicula eget, porttitor ut purus. Donec sagittis nisi a tristique dapibus. Maecenas fermentum odio odio, sit amet condimentum lorem facilisis nec. Curabitur lorem leo, aliquet id posuere id, hendrerit quis libero. Aenean suscipit ante sit amet nulla rhoncus malesuada.</p>
        <div style={{gap: "1rem", display: "flex", justifyContent: "space-evenly"}}>
        <StyledButton onClick={handleDownload}>
        <svg style={{height:"1.2rem"}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5535 16.5061C12.4114 16.6615 12.2106 16.75 12 16.75C11.7894 16.75 11.5886 16.6615 11.4465 16.5061L7.44648 12.1311C7.16698 11.8254 7.18822 11.351 7.49392 11.0715C7.79963 10.792 8.27402 10.8132 8.55352 11.1189L11.25 14.0682V3C11.25 2.58579 11.5858 2.25 12 2.25C12.4142 2.25 12.75 2.58579 12.75 3V14.0682L15.4465 11.1189C15.726 10.8132 16.2004 10.792 16.5061 11.0715C16.8118 11.351 16.833 11.8254 16.5535 12.1311L12.5535 16.5061Z" fill={theme.text}></path> <path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill={theme.text}></path> </g></svg>
          <p>Download CV</p>
        </StyledButton>
        <StyledButton onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=luadefreitasramos@gmail.com", '_blank')}>
          <svg style={{height:"1.2rem"}} fill={theme.text} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M22,3H2A1,1,0,0,0,1,4V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V4A1,1,0,0,0,22,3ZM21,19H3V9.477l8.628,3.452a1.01,1.01,0,0,0,.744,0L21,9.477ZM21,7.323l-9,3.6-9-3.6V5H21Z"></path></g></svg>
          <p>Contact Me</p>
        </StyledButton>
        </div>
      </div>
    </Container>
  </SyledBackground>
  );
};

export default Hero;
