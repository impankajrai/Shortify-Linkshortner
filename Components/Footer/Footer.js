import React from 'react';
import Image from 'next/image'
import {StyledFooter,IconLinks,Logo,SocialIcons,FooterLinks,LinkList,ListHeading} from './Style'

function Footer() {
  return (
    <>
      <StyledFooter>
        <IconLinks>
          <Logo>
            <Image src="/logo-footer.svg" width={121} height={33}/>
          </Logo>
          <SocialIcons>
            <ul>
              <li><Image src="/icon-facebook.svg" width={24} height={24} /></li>
              <li><Image src="/icon-twitter.svg" width={24} height={20}/></li>
              <li><Image src="/icon-pinterest.svg" width={24} height={24}/></li>
              <li><Image src="/icon-instagram.svg" width={24} height={24} /></li>
            </ul>
          </SocialIcons>
        </IconLinks>

        <FooterLinks>
          <LinkList>
            <ul>
              <ListHeading><b>Features</b></ListHeading>
              <li><a href="#">Link Shortening</a></li>
              <li><a href="#">Branded Links</a></li>
              <li><a href="#">Analytics</a></li>
            </ul>
          </LinkList>

          <LinkList>
            <ul>
              <ListHeading><b>Resources</b></ListHeading>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </LinkList>

          <LinkList>
            <ul>
              <ListHeading><b>Company</b></ListHeading>
              <li><a href="#">About</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </LinkList>

        </FooterLinks>
      </StyledFooter>

    </>
  )
}

export default Footer