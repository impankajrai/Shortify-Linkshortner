import styled from "styled-components";
import BackgroundImage from "../../public/Meteor.svg";

export const Heading = styled.div`
h1 {
  color: hsl(255deg 11% 22%);
  font-size: 104px;
  line-height: 115px;
  text-align: center;
  margin: 20px 0px;
  word-spacing: 5px;
  letter-spacing: 2px;
}
@media screen and (max-width: 375px){
  h1{
    font-size: 2.8rem;
    line-height: 67px;
    margin: 24px 47px;
  }
  h1 span {
    font-size: 2.8rem;
  }

}


span {
  font-size: 95px;
}
`
export const Cartoon = styled.div`
display: flex;
justify-content:center;
align-items:center;

@media screen and (max-width: 375px){

    height: 450px;

    img {
    height: 315px;
  }
}

`

export const BackgroundChange = styled.div`
background-color: hsl(230deg 25% 95%);
  width: 100%;
  min-height: 20vh;
  padding-bottom: 25px;
  margin: 5% 0;
  position: relative;
  margin-bottom: 0;
  
`
export const LinkContainer = styled.div`
  display: flex;
  position: absolute;
  top: -165px;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 333px;
  margin-top: 3%;
  flex-direction: column;
`
export const Background = styled.div`
 background-image: url('/Meteor.svg');
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

input {
  padding: 18px 5%;
    width:62%;
  border-radius: 9px;
  font-size: 16px;
  font-weight: 700;
}
button {
  padding: 15px 30px;
  border-radius: 9px;
  margin-left: 5%;
  font-size: 1rem;
  font-weight: 700;
}
@media screen and (max-width: 375px){
    padding: 0;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    min-height: 142px;
    input{
      width:85%;
    }
}
`
export const Section=styled.div`
background-color: hsl(230deg 25% 95%);
margin: -5px auto;
`
export const RecentLinkContainer = styled.div`
  width: 100%;
  margin: 0.5% 0;
  z-index:999;
  background-color: hsl(230deg 25% 95%);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 375px){
    margin: 3% auto;
  }
`
// export const ErrorContainer=styled(RecentLink)`
// `
export const RecentLink = styled.div`
  background: white;
  box-shadow: -1px 4px 24px -2px rgb(0 0 0 / 51%);
  display: flex;
  width: 80%;
  z-index:999;
  font-weight: 600;
  border-radius: 10px;

  @media screen and (max-width: 375px)
  {
    flex-direction: column;
    width: 94%;
  }
`
export const OnError=styled(RecentLink)`
 border:2px solid red;
 p{
   color: red;
   margin:16px auto;
 }
`


export const LongLink = styled.div`
  width: 50%;
  padding: 0 3%;
  overflow: hidden;
 
  @media screen and (max-width: 375px)
  {
    width: 100%;
    border-bottom: 2px solid gray;
    box-sizing: border-box;
  }
  
`
export const ShortLink = styled.div`
  width: 25%;
  margin: 0 2%;
  overflow: hidden;
  color: #4ed1c9;
  
  @media screen and (max-width: 375px)
  {
    width: 100%;
  }
`
export const ButtonContainer = styled.div`
display: flex;
align-items: center;

button {
  font-weight: 800;
  padding: 10% 90%;
  border-radius: 5px;
  background-color: #2bd1d1;
  color: white;
  cursor: pointer;
}

button:active {
background-color: #3a3053;
}

button:hover {
  background-color: #9be3e2;
  }

@media screen and (max-width: 375px){
   button{
      padding: 2vh 0;
      width: 100%;
    }
  }
`
