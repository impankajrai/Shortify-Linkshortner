import styled from "styled-components";

export const CardContainer=styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;

  @media screen and (max-width: 375px){
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 1200px;
  }
`
export const BackLine=styled.div`
background: hsl(180deg 66% 49%);
  width: 38%;
  position: absolute;
  top: 130px;
  height: 10px;

  @media screen and (max-width: 375px)
  {
    height: 80%;
    width: 7px;
    left: 47%;
  }
`
export const CardBody=styled.div`
padding: 55px 20px;
  width: 25%;
  background: white;
  position: relative;
  border-radius: 5px;
  p {
  font-family: "Poppins", sans-serif;
  color: gray;
}

@media screen and (max-width: 375px)
{
    width: 90%;
    margin: 28px 7.5%;
    box-sizing: border-box;
    padding: 55px 20px;
    
    h2,p{
      text-align: center;
    }
}
`
export const CardImage=styled.div`
background: #383153;
  width: 48px;
  border-radius: 50px;
  padding: 9px;
  position: absolute;
  top: -35px;

  @media screen and (max-width: 375px){
    left: 36%;
    padding: 17px;
  }
`