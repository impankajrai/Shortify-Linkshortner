import styled from 'styled-components';

export const Boostlink = styled.div`
  margin-top: 100px;
  background-image: url('/Meteor.svg');
  display: flex;
  padding: 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

h1 {
  color: white;
}
button {
  cursor: pointer;
  background: #9be3e2;
  padding: 12px 27px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
button:hover {
  color: white;
}

@media screen and (max-width: 375px){
  padding: 50px 14px;
  h1 {
    font-size: 25px;
  } 

}
`