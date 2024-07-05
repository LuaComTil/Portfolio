import styled from 'styled-components';
import { useTheme } from "../Contexts/ThemeContext"
import i18next from 'i18next';
import { useEffect, useState } from 'react';

const Styledheader = styled.header`
  background: ${props => props.theme.overlay};
  color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  gap: 32px;
  width: 100%;
  padding: 8px 0;
  position: fixed;
  transition: 0.5s;
  box-shadow: 0 8px 16px #0000001a;
  z-index: 9;
  font-family: "Rubik", sans-serif;
`

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    const storedLanguage = localStorage.getItem('userLanguage');
    console.log(storedLanguage);
    return storedLanguage || i18next.language;
    console.log(storedLanguage);
  });

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng);
      localStorage.setItem('userLanguage', lng);
    };

    i18next.on('languageChanged', handleLanguageChange);

    return () => {
      i18next.off('languageChanged', handleLanguageChange);
    };
  }, []);

  const handleChangeLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'pt' : 'en';
    i18next.changeLanguage(newLang);
  };

  return (
    <Styledheader theme={theme}>
      <div onClick={handleChangeLanguage} style={{cursor: "pointer", display: "flex", flexDirection: "column", gap:"2px"}}>
        <svg style={{height:"48px"}}fill={theme.text} version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000.000000 1000.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,1000.000000) scale(0.100000,-0.100000)"stroke="none"><path d="M6973 8037 c-216 -144 -392 -267 -390 -274 1 -6 139 -167 306 -358 209 -239 306 -343 311 -334 4 8 15 70 25 139 29 204 33 232 39 238 17 16 295 -13 500 -54 775 -153 1167 -501 1256 -1116 14 -93 14 -406 0 -546 -16 -167 -38 -314 -71 -475 -17 -82 -28 -151 -25 -154 2 -3 19 -6 37 -6 l32 -2 33 125 c197 728 188 1332 -27 1763 -254 510 -815 863 -1542 971 -57 9 -110 16 -116 16 -8 0 -10 11 -6 33 14 73 41 297 35 297 -3 -1 -182 -119 -397 -263z"/><path d="M1520 6755 l0 -1455 960 0 960 0 -2 173 -3 172 -762 3 -763 2 0 535 0 535 763 2 762 3 0 170 0 170 -762 3 -763 2 0 395 0 395 763 2 762 3 3 173 2 172 -960 0 -960 0 0 -1455z"/><path d="M4050 6755 l0 -1455 180 0 180 0 0 1297 c0 713 3 1293 6 1290 4 -4 314 -586 689 -1294 l683 -1288 241 -3 241 -2 0 1455 0 1455 -180 0 -180 0 -2 -1186 -3 -1185 -626 1183 -627 1183 -301 3 -301 2 0 -1455z"/><path d="M1008 5564 c-7 -13 -102 -305 -126 -389 -92 -318 -133 -601 -127 -885 5 -247 36 -413 115 -606 181 -443 591 -792 1170 -995 80 -28 306 -87 368 -95 60 -8 59 -6 37 -109 -30 -138 -45 -219 -41 -223 5 -4 29 9 481 268 176 101 326 189 334 196 11 10 -12 46 -141 216 -85 111 -212 280 -283 373 -70 94 -130 172 -131 173 -4 6 -22 -64 -57 -233 l-34 -160 -44 3 c-69 5 -265 40 -369 66 -382 96 -659 224 -876 407 -194 163 -320 392 -369 670 -31 173 -18 476 30 749 31 174 56 279 111 468 15 50 25 94 22 97 -10 10 -66 17 -70 9z"/><path d="M4030 3695 l0 -1455 195 0 195 0 0 538 0 539 289 6 c485 12 656 55 881 227 140 107 251 272 305 455 21 71 28 119 32 225 11 278 -51 461 -212 626 -122 125 -260 200 -458 248 -157 39 -283 46 -774 46 l-453 0 0 -1455z m925 1115 c325 -31 509 -164 561 -408 63 -302 -79 -590 -341 -688 -116 -43 -214 -54 -497 -54 l-258 0 0 580 0 580 213 0 c116 0 262 -5 322 -10z"/><path d="M6052 4978 l3 -173 518 -3 517 -2 0 -1280 0 -1280 195 0 195 0 0 1280 0 1280 518 2 517 3 3 173 2 172 -1235 0 -1235 0 2 -172z"/></g></svg>
        <p style={{textAlign:"center"}}>Lenguage</p>
      </div>
      <div onClick={toggleTheme} style={{cursor: "pointer", display: "flex", flexDirection: "column", gap:"2px"}}>
        <svg style={{height:"48px"}}fill={theme.text} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>dark-mode</title> <g id="Layer_2" data-name="Layer 2"> <g id="Icons"> <g> <rect width="48" height="48" fill="none"></rect> <g> <path d="M14,24A10,10,0,0,0,24,34V14A10,10,0,0,0,14,24Z"></path> <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM6,24A18.1,18.1,0,0,1,24,6v8a10,10,0,0,1,0,20v8A18.1,18.1,0,0,1,6,24Z"></path> </g> </g> </g> </g> </g></svg>
        <p style={{textAlign:"center"}}>Light Mode</p>
      </div>
      <a style={{display: "flex", flexDirection: "column", gap:"2px"}} href="https://github.com/LuaComTil" target="_blank">
        <svg style={{height:"48px"}} fill={theme.text} viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><path d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5" style={{fill: 'none',stroke: `${theme.text}`,strokeWidth: '2',strokeLinecap: 'round',strokeLinejoin: 'round',fillRule: 'evenodd'}}></path></g></svg>
        <p style={{textAlign:"center"}}>Github</p>
      </a>
      <a style={{display: "flex", flexDirection: "column", gap:"2px"}} href="https://www.linkedin.com/in/lu%C3%A3/" target="_blank">
        <svg style={{height:"48px"}} fill={theme.text} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-143 145 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path> <rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect> <path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path> <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path> </g> </g></svg>            
        <p style={{textAlign:"center"}}>LinkedIn</p>
      </a>
    </Styledheader>
  );
};

export default Header;
