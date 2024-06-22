import React from 'react';
import Hero from "./Hero/Hero.tsx"
import Portfolio from "./Portfolio/Portfolio.tsx"
import Header from "../Components/Header.tsx"


const Home: React.FC = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Portfolio/>
    </>);
};

export default Home;
