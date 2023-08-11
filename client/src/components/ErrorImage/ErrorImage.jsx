import React from 'react'
import errorImage from '../../assets/error.png'
import { BackgroundImage } from './ErrorImage.styled.components'

export default function ErrorImage() {

  return (
    <BackgroundImage>
        <img src={errorImage} alt="Error" />
    </BackgroundImage>
  );
}
