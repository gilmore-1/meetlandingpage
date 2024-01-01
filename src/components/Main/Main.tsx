import styled from "styled-components";
import { defaultTheme } from "../../themes/defaultTheme";
import imagewomaninvideocall from "../../assets/desktop/image-woman-in-videocall.jpg"
import imagewomenvideochatting from "../../assets/desktop/image-women-videochatting.jpg"
import imagemeninmeeting from "../../assets/desktop/image-men-in-meeting.jpg"
import imagemantexting from "../../assets/desktop/image-man-texting.jpg"
import mainsvg from "./main.svg"
const Mained = styled.main({

    textAlign: "center",
    paddingLeft: "60px",
    paddingTop: "65px",
})
const ImageContainer = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: "30px",
    paddingBottom: "30px"

})
const SvgImage = styled.img({
    paddingTop: "130px",
})
const Image = styled.img({

    width: "300px",
    borderRadius: "10px"
})
const BultSpan = styled.span({
    fontFamily: defaultTheme.typography.overlineAllCaps.fontfamily,
    fontSize: defaultTheme.typography.overlineAllCaps.fontsize,
    fontWeight: defaultTheme.typography.overlineAllCaps.fontweight,
    lineHeight: defaultTheme.typography.overlineAllCaps.lineheight,
    color: defaultTheme.colors.hippieBlue,
    textTransform: "uppercase",
})
const TextContent = styled.div({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: "20px"

})
const Smartermeetingsal = styled.h1({
    fontFamily: defaultTheme.typography.smileh2eading.fontfamily,
    fontSize: defaultTheme.typography.smileh2eading.fontsize,
    fontWeight: defaultTheme.typography.smileh2eading.fontweight,
    lineHeight: defaultTheme.typography.smileh2eading.lineheight,
    letterSpacing: defaultTheme.typography.smileh2eading.letterspacing,
    color: defaultTheme.colors.blue,
    width: "445px",
    paddingTop: "15px"
})
const SendMessage = styled.p({
    fontFamily: defaultTheme.typography.bodyMedium.fontfamily,
    fontSize: defaultTheme.typography.bodyMedium.fontsize,
    fontWeight: defaultTheme.typography.bodyMedium.fontweight,
    lineHeight: defaultTheme.typography.bodyMedium.lineheight,
    letterSpacing: defaultTheme.typography.bodyMedium.letterspacing,
    color: defaultTheme.colors.osloGrey,
    width: "540px",
    paddingTop: "30px"

})
export const Main = () => {
    return (
        <Mained>
            <SvgImage src={mainsvg} />

            <ImageContainer>
                <Image src={imagewomaninvideocall} alt="imagewomaninvideocall" />
                <Image src={imagewomenvideochatting} alt="imagewomenvideochatting" />
                <Image src={imagewomaninvideocall} alt="imagewomaninvideocall" />
                <Image src={imagemeninmeeting} alt="imagewomaninvideocall" />
                <Image src={imagemantexting} alt="imagewomaninvideocall" />
            </ImageContainer>
            <TextContent>
                <BultSpan>Built for modern use</BultSpan>
                <Smartermeetingsal>Smarter meetings, all in one place</Smartermeetingsal>
                <SendMessage>Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can join with invite-only team access, data encryption, and data export.</SendMessage>
            </TextContent>
        </Mained>
    )

}
