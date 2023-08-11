import React from 'react'
import background from "../../assets/background.jpg";
import { BackgroundImage } from './Home.styled.components.js';

export default function Home() {
  return (
    <BackgroundImage>    
        <img src={background} alt="Background"/>    
    </BackgroundImage>
  );
}
