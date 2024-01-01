import styled from "styled-components";
import meet from "./meet.svg";
import heroOneLeftImage from "../../assets/desktop/image-hero-left.png";
import heroOneRightImage from "../../assets/desktop/image-hero-right.png";
import { defaultTheme } from "../../themes/defaultTheme";

const Nav = styled.nav({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const Hero = styled.div({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "50px",
  alignContent: "center",
  textAlign: "center"
})
const HeroOneLeft = styled.img({

})
const HeroOneRight = styled.img({

})
const HeroContent = styled.div({


})
const HeroContentHeading = styled.h1({
  width: "445px",
  paddingTop: "50px",
  fontWeight: defaultTheme.typography.bigh1eading.fontweight,
  fontSize: defaultTheme.typography.bigh1eading.fontsize,
  lineHeight: defaultTheme.typography.bigh1eading.lineheight,


})
const HeroContentParagrap = styled.p({

  width: "540px",
  paddingTop: "25px",
  fontFamily: defaultTheme.typography.bodyMedium.fontfamily,
  fontSize: defaultTheme.typography.bodyMedium.fontsize,
  fontWeight: defaultTheme.typography.bodyMedium.fontweight,
  lineHeight: defaultTheme.typography.bodyMedium.lineheight,
  letterSpacing: defaultTheme.typography.bodyMedium.letterspacing,
  color: defaultTheme.colors.osloGrey
})
const MeetImage = styled.img({
  paddingTop: "28px"
})
const Buttons = styled.div({
  display: "flex",
  justifyContent:"center",
  gap: "16px",
  paddingTop: "30px"
})
const DownloadButton = styled.button({
  fontSize: "16px",
  fontWeight: "900",
  lineHeight: "26px",
  letterSpacing: "0px",
  textAlign: "left",
  width: "195px",
  height: "60px",
  textAlignLast: "center",
  backgroundColor: defaultTheme.colors.hippieBlue,
  borderRadius: "29px",
  border: "none",
  cursor: "pointer"

});
const DownloadButtonSpan = styled.span({
  fontFamily: defaultTheme.typography.overlineAllCaps.fontfamily,
  fontSize: defaultTheme.typography.overlineAllCaps.fontsize,
  fontWeight: defaultTheme.typography.overlineAllCaps.fontweight,
  lineHeight: defaultTheme.typography.overlineAllCaps.lineheight,
  letterSpacing: defaultTheme.typography.overlineAllCaps.letterspacing,
  color: defaultTheme.colors.alabasterWhite
})
const WhatButton = styled.button({
  width: "140px",
  height: "60px",
  borderRadius: "29px",
  background: "#855FB1",
  border: "none",
  textAlignLast: "center",
  cursor: "pointer"


})
const WhatButtonSpan = styled.span({
  fontFamily: defaultTheme.typography.overlineAllCaps.fontfamily,
  fontSize: defaultTheme.typography.overlineAllCaps.fontsize,
  fontWeight: defaultTheme.typography.overlineAllCaps.fontweight,
  lineHeight: defaultTheme.typography.overlineAllCaps.lineheight,
  color: defaultTheme.colors.alabasterWhite
  
})

export const Headers = () => {
  return (
    <header>
      <Nav>
        <MeetImage src={meet} alt="Meet" />
      </Nav>
      <Hero>
        <HeroOneLeft src={heroOneLeftImage} />
        <HeroContent>
          <HeroContentHeading>Group Chat for Everyone</HeroContentHeading>
          <HeroContentParagrap>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.</HeroContentParagrap>
          <Buttons>
            <DownloadButton><DownloadButtonSpan>Download</DownloadButtonSpan><span style={{ color: defaultTheme.colors.columbiaBlue }}> v1.3</span></DownloadButton>
            <WhatButton>
              <WhatButtonSpan>What is it?</WhatButtonSpan>
            </WhatButton>
          </Buttons>
        </HeroContent>
        <HeroOneRight src={heroOneRightImage} />
      </Hero>
    </header>

  );
};
