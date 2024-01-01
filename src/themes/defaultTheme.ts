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
      font: string;
      weight: number;
      size: string;
      lineheight: string;
    };
    smileh2eading: {
      font: string;
      weight: number;
      size: string;
      lineheight: string;
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
      font: "Red Hat Display",
      weight: 900,
      size: "64px",
      lineheight: "64px",
    },
    smileh2eading: {
      font: "Red Hat Display",
      weight: 900,
      size: "40px",
      lineheight: "44px",
    },
  },
};
