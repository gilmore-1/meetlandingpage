interface DefaultThemeinterface {
  colors: {
    hippieBlue: string; //#4D96A9
    purple: string; //#855FB1
    blue: string; //#28283D
    osloGrey: string; //#87879D
    columbiaBlue: string; //#8FE3F9
    lightViolet: string; //#D9B8FF
    alabasterWhite: string; //#FAFAFA
  };
  typography: {
    bigh1eading: {
      fontfamily: string;
      fontsize: string;
      fontweight: number;
      lineheight: string;
      letterspacing: string;
    };
    smileh2eading: {
        fontfamily: string;
        fontsize: string;
        fontweight: number;
        lineheight: string;
        letterspacing: string;
    };
    bodyMedium: {
      fontfamily: string;
      fontsize: string;
      fontweight: number;
      lineheight: string;
      letterspacing: string;
    };
    overlineAllCaps: {
      fontfamily: string;
      fontsize: string;
      fontweight: number;
      lineheight: string;
      letterspacing: string;
    };
    
  };
}
export const defaultTheme: DefaultThemeinterface = {
  colors: {
    hippieBlue: "#4D96A9",
    purple: "#855FB1",
    blue: "#28283D",
    osloGrey: "#87879D",
    columbiaBlue: "#8FE3F9",
    lightViolet: "#D9B8FF",
    alabasterWhite: "#FAFAFA",
  },
  typography: {
    bigh1eading: {
      fontfamily: "Red Hat Display;",
      fontsize: "64px",
      fontweight: 900,
      lineheight: "64px",
      letterspacing: "0px",
    },
    smileh2eading: {
        fontfamily: "Red Hat Display",
        fontsize: "40px",
        fontweight: 900,
        lineheight: "44px",
        letterspacing: "0px",
    },
    bodyMedium: {
      fontfamily: "Red Hat Display",
      fontsize: "18px",
      fontweight: 500,
      lineheight: "26px",
      letterspacing: "0px",
    },
    overlineAllCaps: {
      fontfamily: "Red Hat Display",
      fontsize: "16px",
      fontweight: 900,
      lineheight: "26px",
      letterspacing: "4px",
    },
  },
};
