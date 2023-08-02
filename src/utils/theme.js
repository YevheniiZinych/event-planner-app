const mainVars = {
  breakpoints: {
    mob: "320px",
    mobMax: "767px",
    tab: "768px",
    tabMax: "1279px",
    desk: "1280px",
  },
  fontWeights: {
    s: 400,
    m: 500,
    l: 600,
    xl: 700,
  },
  transitions: {
    main: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const mainTheme = {
  ...mainVars,
  color: {
    main: "#7B61FF",
    white: "#FFFFFF",
    descrColor: "#49454F",
    low: "#6BD475",
    medium: "Medium",
    high: "#FF2B77",
    selectMainColor: "#ACA7C3",
    button: {
      default: "#7B61FF",
      hover: "#6243FF",
      disable: "#ACA7C3",
    },
  },
};
