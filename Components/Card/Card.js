import React from 'react';
import {CardContainer,BackLine,CardBody,CardImage} from './Style';

function Card() {
  return (
    <>
    <CardContainer>
    <BackLine/>

    <CardBody>
      <CardImage>
        <img src="/icon-brand-recognition.svg"/>
      </CardImage>
      <h2>Brand Recognition</h2>
      <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
        confidence in your content.</p>
    </CardBody>

    <CardBody>
      <CardImage>
        <img src="/icon-brand-recognition.svg"/>
      </CardImage>
      <h2>Brand Recognition</h2>
      <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
        confidence in your content.</p>
    </CardBody>

    <CardBody>
      <CardImage>
        <img src="/icon-brand-recognition.svg"/>
      </CardImage>
      <h2>Brand Recognition</h2>
      <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil
        confidence in your content.</p>
    </CardBody>

  </CardContainer>
    </>
  )
}

export default Card