import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      mobMax: 767,
      tablet: 768,
      tabMax: 1279,
      desktop: 1280,
    },
  },
});
