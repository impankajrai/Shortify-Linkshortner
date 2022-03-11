import styled from 'styled-components';

export const MiddleHeading = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  box-sizing:border-box;
  flex-direction: column;
  margin-bottom: -20px;
  align-items: center;
  justify-content: center;

  p {
  text-align: center;
  color: hsl(240deg 4% 61%);
  font-weight: lighter;
  padding-bottom: 90px;
  word-spacing: 2px;
  margin-top: 5px;
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  }
  h1 {
  line-height: 0;
  font-size: -webkit-xxx-large;
  color: hsl(251deg 12% 19%);
  }

  @media screen and (max-width: 375px){
    box-sizing: border-box;
    padding-top: 55px;

  h1 {
    font-size: 31px;
    }
    
   p {
    font-size: 17px;
    padding-bottom: 0;
    }
  }

`