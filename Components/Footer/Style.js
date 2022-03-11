import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: hsl(266deg 10% 14%);
  height: 250px;

  @media screen and (max-width: 375px){
    flex-direction: column;
    position: relative;
    height: 650px;
  }
`
export const IconLinks = styled.div`
 width: 20%;
  margin: auto 0;

  @media screen and (max-width: 375px){
    width:100%;
  }
`
export const Logo = styled.div`
 text-align: center;
`
export const SocialIcons = styled.div`
 ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 0 0px;
}

li {
  cursor: pointer;
}

li img:hover {
  stroke: #383153;
  border-color: #383153;
  filter: brightness(0) saturate(100%) invert(75%) sepia(92%) saturate(410%)
    hue-rotate(118deg) brightness(87%) contrast(85%);
}

@media screen and (max-width: 375px)
   { width: 70%;
    position: absolute;
    bottom: 10px;
    left: 50px;
  }

`

export const FooterLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  margin: auto 0;

  @media screen and (max-width: 375px)
  {
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 20%;
  }
`
export const LinkList = styled.div`
ul {
  list-style: none;
}

li{
  margin: 5px 0;
}

ul li a {
  color: hsl(280deg 1% 45%);
  font-weight: 400;
  text-decoration: none;
}

a:hover {
  color: hsl(184deg 45% 41%);
}

@media screen and (max-width: 375px)
{
  ul{
    text-align: center;
    align-items: center;
    padding: 0;
  }
}
`
export const ListHeading=styled.li`
  color: white;
  margin: 10px 0;
`
