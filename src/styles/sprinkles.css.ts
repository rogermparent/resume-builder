import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"

import { tailwind } from "@theme-ui/presets"

const textDecoration = {
  underline: "underline",
  overline: "overline",
  "line-through": "line-through",
  "no-underline": "none",
}

const borders = {
  none: "none",
  default: "2px solid",
}

const solarized = {
  base03: "#002b36",
  base02: "#073642",
  base01: "#586e75",
  base00: "#657b83",
  base0: "#839496",
  base1: "#93a1a1",
  base2: "#eee8d5",
  base3: "#fdf6e3",
  yellow: "#b58900",
  orange: "#cb4b16",
  red: "#dc322f",
  magenta: "#d33682",
  violet: "#6c71c4",
  blue: "#268bd2",
  cyan: "#2aa198",
  green: "#859900",
}

export const colors = {
  ...solarized,
  black: "#000",
  white: "#FFF",
  body: solarized.base01,
  background: solarized.base3,
  altBackground: solarized.base2,
}

const tailwindSpacing = {
  0: "0px",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
  auto: "auto",
  "1/2": "50%",
  "1/3": "33.333333%",
  "2/3": "66.666667%",
  "1/4": "25%",
  "2/4": "50%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.666667%",
  "2/6": "33.333333%",
  "3/6": "50%",
  "4/6": "66.666667%",
  "5/6": "83.333333%",
  "1/12": "8.333333%",
  "2/12": "16.666667%",
  "3/12": "25%",
  "4/12": "33.333333%",
  "5/12": "41.666667%",
  "6/12": "50%",
  "7/12": "58.333333%",
  "8/12": "66.666667%",
  "9/12": "75%",
  "10/12": "83.333333%",
  "11/12": "91.666667%",
  full: "100%",
  screen: "100vw",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
}

const minHeight = {
  0: "0px",
  full: "100%",
  screen: "100vh",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
}

const tailwindMaxWidth = {
  0: "0rem",
  none: "none",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  full: "100%",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
  prose: "65ch",
  "screen-sm": "640px",
  "screen-md": "768px",
  "screen-lg": "1024px",
  "screen-xl": "1280px",
  "screen-2xl": "1536px",
}

const tailwindMinWidth = {
  0: "0px",
  full: "100%",
  min: "min-content",
  max: "max-content",
  fit: "fit-content",
}

const fontFamily = {
  ...tailwind.fonts,
  heading:
    "Roboto Condensed,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
  body: '"Roboto Slab", serif',
}

const responsiveProperties = defineProperties({
  conditions: {
    default: {},
    sm: { "@media": "screen and (min-width: 640px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
    xl: { "@media": "screen and (min-width: 1280px)" },
    "2xl": { "@media": "screen and (min-width: 1536px)" },
    print: { "@media": "print" },
  },
  defaultCondition: "default",
  responsiveArray: ["default", "sm", "md", "lg", "xl", "2xl"],
  properties: {
    lineHeight: tailwindSpacing,
    selectors: { links: { "& a": {} } },
    resize: ["both", "vertical", "horizontal", "none"],
    position: ["relative", "absolute", "sticky"],
    display: ["none", "flex", "block", "inline", "inline-block"],
    flexDirection: ["row", "column"],
    flexWrap: ["wrap", "nowrap"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
      "space-evenly",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    width: tailwindSpacing,
    height: tailwindSpacing,
    minWidth: tailwindMinWidth,
    minHeight,
    maxWidth: tailwindMaxWidth,
    maxHeight: tailwindSpacing,
    marginTop: tailwindSpacing,
    marginBottom: tailwindSpacing,
    marginLeft: tailwindSpacing,
    marginRight: tailwindSpacing,
    paddingTop: tailwindSpacing,
    paddingBottom: tailwindSpacing,
    paddingLeft: tailwindSpacing,
    paddingRight: tailwindSpacing,
    top: tailwindSpacing,
    bottom: tailwindSpacing,
    left: tailwindSpacing,
    right: tailwindSpacing,
    fontFamily,
    fontSize: tailwind.fontSizes,
    fontWeight: tailwind.fontWeights,
    borderWidth: tailwind.borderWidths,
    borderTopRightRadius: tailwind.radii,
    borderBottomRightRadius: tailwind.radii,
    borderTopLeftRadius: tailwind.radii,
    borderBottomLeftRadius: tailwind.radii,
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexBasis: tailwindSpacing,
    float: ["right", "left"],
    clear: ["right", "left"],
    textAlign: ["left", "right", "center"],
    borderTop: borders,
    borderBottom: borders,
    borderLeft: borders,
    borderRight: borders,
    listStyle: ["none"],
    verticalAlign: ["middle"],
    textDecoration,
  },
  shorthands: {
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    borderRadius: [
      "borderTopRightRadius",
      "borderBottomRightRadius",
      "borderTopLeftRadius",
      "borderBottomLeftRadius",
    ],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    placeItems: ["justifyContent", "alignItems"],
    border: ["borderTop", "borderBottom", "borderLeft", "borderRight"],
  },
})

export const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
    print: { "@media": "print" },
    hover: { selector: "&:hover" },
    visited: { selector: "&:visited" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    borderColor: colors,
    background: colors,
    backgroundColor: colors,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0]
