import React,{useState} from 'react';
import {Header, HeaderContainer,NavBar, Navbar2, NavLink, NavList, Toggle} from './Style'
import Image from 'next/image';

function Nav() {
  const [display, setDisplay] = useState(false)
  return (
    <>
    <HeaderContainer>
    <Header>
        <div>
          <Image src="/logo.svg" alt="logo" width={121} height={33} />
        </div>
        
        <NavBar>
          <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Resources</a></li>
          </ul>
        </NavBar>

        <Toggle>
            <Image src="/togglebtn.svg" width="50px" height="50px" onClick={()=>{setDisplay(true)}} alt='hamburger'/>
        </Toggle>
    </Header>
</HeaderContainer>

{display&&<div>
    <Navbar2>
        <ul>
          <li> <button onClick={()=>{setDisplay(false)}}> X </button></li>
          <NavLink><a href="#">Features</a></NavLink>
          <NavLink><a href="#">Pricing</a></NavLink>
          <NavLink><a href="#">Resources</a></NavLink>
        </ul>
      </Navbar2>
</div>}
</>
  )
}

export default Nav