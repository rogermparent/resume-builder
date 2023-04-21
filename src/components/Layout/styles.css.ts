import { globalStyle } from "@vanilla-extract/css"

globalStyle("body, html, #___gatsby, #gatsby-focus-wrapper", {
  padding: 0,
  margin: 0,
  height: "100%",
})
globalStyle("*", { padding: 0, margin: 0, boxSizing: "border-box" })
