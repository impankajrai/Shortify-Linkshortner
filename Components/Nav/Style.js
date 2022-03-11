import styled from "styled-components";
import Image from 'next/image';

export const HeaderContainer=styled.div`
           width: 100%;
            height: 7rem;
            display: flex;
            justify-content: center;
            align-items: center;
`
export const Header=styled.header`
            width: 80%;
            display: flex;

`
export const NavBar=styled.nav`
      
      ul{
            display: flex;
            text-decoration: none;
            list-style: none;
            align-items: center;
            height: 100%;
            margin: 0 30px;
        }
        ul li{
            margin: 0 15px;
        }
        ul li a{
            text-decoration: none;
            color: gray;
            font-weight: 600;
        }
        ul li a:hover{
            color: black;
        }

        @media screen and (max-width: 375px){
          display: none;
         
          ul{
                list-style: none;
            }
            li{
                margin-top: 5px;
            }

            ul li a {
                color: white;
                font-size: 24px;
            }

            ul li button{
                background-color: black;
                width: 40px;
                height: 40px;
                color: white;
                font-size: 35px;
                outline: none;
                border: none;
                position: absolute;
                right: 15px;
                top: 15px;
            }

        }     
`
export const Toggle=styled.ul`
            width: 30px;
            height: 30px;
            border-radius: 4px;
            display: none;
            float: right;

    img{
            width: 2.5rem;
        }
        @media screen and (max-width: 375px){
            display: block;
            position: absolute;
            right: 15px;
            top: 15px;
        }
`
export const Navbar2=styled.nav`
display:block;
 @media screen and (max-width: 375px){
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0, 0,.9);
                display: flex;
                justify-content: center;
                align-items: center;
                ul{
                  list-style: none;
                }
                li{margin-top: 5px;}
            
                ul li a {
                color: white;
                font-size: 24px;
            }
            ul li button{
                background-color: black;
                width: 40px;
                height: 40px;
                color: white;
                font-size: 35px;
                outline: none;
                border: none;
                position: absolute;
                right: 15px;
                top: 15px;
            }
 }
`
export const NavLink=styled.li`
 @media screen and (max-width: 375px){
                background-color: red;
                width: 100vw;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;
 }

`