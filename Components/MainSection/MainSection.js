import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Heading, Cartoon, BackgroundChange, LongLink, LinkContainer, RecentLink, Background, RecentLinkContainer, ShortLink, ButtonContainer, OnError, Section } from './Style'


function MainSection() {
  return (
    <>
      <Heading>
        <h1>
          MORE THAN JUST <span> SHORTNER LINKS</span>
        </h1>
      </Heading>
      <Cartoon>
        <Image src="/people-working.svg" width={404.88} height={405} alt='people' />
      </Cartoon>
      <GetLinkContainer />
    </>
  )
}

const GetLinkContainer = () => {
  const [NewUrlData, SetNewUrlData] = useState({ longUrl: "", shortUrl1: "", shortUrl2: "", shortUrl3: "", err: "" });

  const submitLink = async () => {
    //black textbox handeling
    if (LinkTextBox.current.value === "") {
      LinkTextBox.current.placeholder = "Enter Valid URL";
      LinkTextBox.current.style.border = "2px solid red";
    } else {
      let fetchdata = await fetch(`https://api.shrtco.de/v2/shorten?url=${LinkTextBox.current.value}`)
      fetchdata = await fetchdata.json();

      //Error handeling
      if (fetchdata.ok) {
        const { full_short_link, full_short_link2, full_short_link3, original_link } = fetchdata.result;
        SetNewUrlData({ err: "", longUrl: original_link, shortUrl1: full_short_link, shortUrl2: full_short_link2, shortUrl3: full_short_link3 });
      } else {
        SetNewUrlData({ err: fetchdata.error, longUrl: "", shortUrl1: "", shortUrl2: "", shortUrl3: "" });
      }

    }
  }
  const copyHandel = (e, id) => {

    //Deselect another 
    btn1.current.style.background = "#2bd1d1";
    btn1.current.style.padding = "10% 90%";
    btn1.current.innerHTML = "Copy";

    btn2.current.style.background = "#2bd1d1";
    btn2.current.style.padding = "10% 90%";
    btn2.current.innerHTML = "Copy";

    btn3.current.style.background = "#2bd1d1";
    btn3.current.style.padding = "10% 90%";
    btn3.current.innerHTML = "Copy";



    //select 
    id.current.style.background = "#3a3053";
    id.current.style.padding = "10% 45%";
    id.current.innerHTML = "Copied!";

    //copy
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(e);
    return Promise.reject('The Clipboard API is not available.');


  }

  //refs
  const LinkTextBox = useRef(null);
  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const btn3 = useRef(null);

  return (
    <>
      <BackgroundChange>
        <LinkContainer>
          <Background>
            <input type="text" ref={LinkTextBox} placeholder="Shorten a link here..." />
            <button onClick={submitLink}>Shorten It!</button>
          </Background>
        </LinkContainer>
      </BackgroundChange>
      <Section>
        {NewUrlData.shortUrl1 && <RecentLinkContainer>
          <RecentLink>
            <LongLink>
              <p>{NewUrlData.longUrl}</p>
            </LongLink>
            <ShortLink>
              <p>{NewUrlData.shortUrl1}</p>
            </ShortLink>
            <ButtonContainer>
              <button ref={btn1} name={NewUrlData.shortUrl1} onClick={() => { copyHandel(NewUrlData.shortUrl1, btn1) }}>Copy</button>
            </ButtonContainer>
          </RecentLink>
        </RecentLinkContainer>}

        {NewUrlData.shortUrl2 && <RecentLinkContainer>
          <RecentLink>
            <LongLink>
              <p>{NewUrlData.longUrl}</p>
            </LongLink>
            <ShortLink>
              <p>{NewUrlData.shortUrl2}</p>
            </ShortLink>
            <ButtonContainer>
              <button ref={btn2} name={NewUrlData.shortUrl2} onClick={() => { copyHandel(NewUrlData.shortUrl2, btn2) }}>Copy</button>
            </ButtonContainer>
          </RecentLink>
        </RecentLinkContainer>}

        {NewUrlData.shortUrl3 && <RecentLinkContainer>
          <RecentLink>
            <LongLink>
              <p>{NewUrlData.longUrl}</p>
            </LongLink>
            <ShortLink>
              <p>{NewUrlData.shortUrl3}</p>
            </ShortLink>
            <ButtonContainer>
              <button ref={btn3} name={NewUrlData.shortUrl3} onClick={() => { copyHandel(NewUrlData.shortUrl3, btn3) }}>Copy</button>
            </ButtonContainer>
          </RecentLink>
        </RecentLinkContainer>}

        {NewUrlData.err && <RecentLinkContainer>
          <OnError>
            <p style={{ color: "red" }}>{NewUrlData.err}</p>
          </OnError>
        </RecentLinkContainer>}
      </Section>
    </>
  )

}

export default MainSection