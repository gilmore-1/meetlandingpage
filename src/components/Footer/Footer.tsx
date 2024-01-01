import styled from "styled-components";
import { defaultTheme } from "../../themes/defaultTheme";
import footerImage from "../../assets/desktop/image-footer.jpg";

const FooterContent = styled.footer({
    display: "flex",
    alignItems: "center", // Center horizontally
    justifyContent: "space-between", // Center vertically
    height: "308px",
    marginTop: "150px",
    paddingLeft: "165px",
    paddingRight: "165px",
    border: "2px solid black",
    backgroundColor: "#4D96A9",
    backgroundImage: `url(${footerImage})`,
    backgroundPosition: "0px 0px",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
});


const Experience = styled.h1({
    width: "350px",



    fontFamily: defaultTheme.typography.smileh2eading.fontfamily,
    fontSize: defaultTheme.typography.smileh2eading.fontsize,
    fontWeight: defaultTheme.typography.smileh2eading.fontweight,
    lineHeight: defaultTheme.typography.smileh2eading.lineheight,
    letterSpacing: defaultTheme.typography.smileh2eading.letterspacing,
    color: defaultTheme.colors.alabasterWhite,
})
const Stay = styled.p({
    width: "350px",
    fontFamily: defaultTheme.typography.bodyMedium.fontfamily,
    fontSize: defaultTheme.typography.bodyMedium.fontsize,
    fontWeight: defaultTheme.typography.bodyMedium.fontweight,
    lineHeight: defaultTheme.typography.bodyMedium.lineheight,
    letterSpacing: defaultTheme.typography.bodyMedium.letterspacing,
    color: defaultTheme.colors.alabasterWhite,
})
const DownloadButtonSpan = styled.span({
    fontFamily: defaultTheme.typography.overlineAllCaps.fontfamily,
    fontSize: defaultTheme.typography.overlineAllCaps.fontsize,
    fontWeight: defaultTheme.typography.overlineAllCaps.fontweight,
    lineHeight: defaultTheme.typography.overlineAllCaps.lineheight,
    letterSpacing: defaultTheme.typography.overlineAllCaps.letterspacing,
    color: defaultTheme.colors.alabasterWhite
})
const DownloadButton = styled.button({
    width: "195px",
    height: "60px",
    borderRadius: "29px",
    background: "#855FB1",
    border: "none",
    textAlignLast: "center",
    cursor: "pointer"

})
const Two = styled.div({
    position: "absolute",
    width: "56px",
    height: "56px",
    borderRadius: '29px',
    border: '1px solid rgba(135, 135, 157, 0.25)',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: "center",
    left: "50%",
    bottom: "-270px"
});

export const Footer = () => {
    return (
        <>
            <Two>2</Two>

            <FooterContent>

                <Experience>Experience more together</Experience>
                <Stay>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</Stay>
                <DownloadButton><DownloadButtonSpan>Download v1.3</DownloadButtonSpan></DownloadButton>

            </FooterContent>
        </>

    );
};
