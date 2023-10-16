export function createGradient(color1: string, color2: string) {
  return `linear-gradient(90deg, ${color1} 10.76%, ${color2} 133.7%)`;
}

const PRIMARY = {
  lighter: "#898999",
  light: "#3c3c3c",
  main: "#333",
  dark: "#2b2b2b",
  darker: "#222",
};

const SECONDARY = {
  lighter: "#777",
  light: "#6f6f6f",
  main: "#666",
  dark: "#5e5e5e",
  darker: "#555",
};

const SUCCESS = {
  lighter: "#E4FFEB;",
  light: "#AAF27F",
  main: "#47B263",
  dark: "#229A16",
  darker: "#08660D",
};

const WARNING = {
  lighter: "#ffda6e",
  light: "#ffd456",
  main: "#FFC20E",
  dark: "#cc9b0b",
  darker: "#b3880a",
};

const ERROR = {
  lighter: "#FF6161",
  light: "#FF5050",
  main: "#FF3F3F",
  dark: "#FF2E2E",
  darker: "#FF1D1D",
};

const INFO = {
  lighter: "#ceeff5",
  light: "#85d6e7",
  main: "#0aadcf",
  dark: "#3bbdd9",
  darker: "#23b5d4",
};

const GREY: any = {
  0: "#D1D5DB",
  100: "#f9fafb",
  200: "#f8f8fa",
  300: "#f7f7f9",
  400: "#f3f4f6",
  500: "#7a7a7b",
  600: "#4B5563",
  700: "#E5E7EB",
  800: "#1F2937",
  900: "#9CA3AF",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const COMMON = {
  common: { black: "#000", white: "#fff", ghost: "#C4C4CC" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: GREY[800] },
  info: { ...INFO, contrastText: GREY[800] },
  grey: GREY,
  gradients: GRADIENTS,

  divider: GREY[400],
  action: {
    hover: GREY[400],
    selected: GREY[400],
    disabled: GREY[400],
    disabledBackground: GREY[400],
    focus: GREY[400],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const palette = {
  light: {
    ...COMMON,
    mode: "light",
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: "#fff", default: GREY[200], neutral: GREY[200] },
    action: { active: GREY[600], ...COMMON.action },
  },
  dark: {
    ...COMMON,
    mode: "dark",
    text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: GREY[500_16],
    },
    action: { active: GREY[500], ...COMMON.action },
  },
};

export default palette;

declare module "@mui/material/styles" {
  interface Palette {
    custom: any;
    blue: any;
  }

  interface PaletteOptions {
    custom?: any;
    blue?: any;
  }
}
