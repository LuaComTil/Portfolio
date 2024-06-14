import Hero from "./Sections/Hero/Hero";
import Projects from "./Sections/Projects/Projects"
import Header from "../../components/Header";
//import SwipeUpIcon from '@mui/icons-material/SwipeUp';
//import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Home = () => {

  return (
    <>
      <Header/>
      <Hero/>
      <Projects/>
    </>
  )
}

export default Home;
