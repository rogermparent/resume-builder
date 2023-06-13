import { sprinkles } from "../../styles/sprinkles.css"
import "../../components/Layout/styles.css"

export const coverLetter = sprinkles({
  height: "full",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  color: "body",
  backgroundColor: "background",
  fontFamily: "body",
  margin: 0,
  fontSize: "default",
  alignItems: "center",
})

export const headerSection = sprinkles({
  width: "full",
  color: "background",
  backgroundColor: "body",
})

export const innerHeaderSection = sprinkles({
  marginY: 3,
})

export const applicantName = sprinkles({
  fontWeight: "bold",
  marginY: 2,
  textAlign: "center",
  fontSize: "4xl",
  fontFamily: "heading",
})

export const careerObjective = sprinkles({
  fontFamily: "heading",
  textAlign: "center",
  fontSize: "lg",
})
export const bodySection = sprinkles({
  width: "full",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})
export const innerBodySection = sprinkles({
  marginX: 3,
  marginY: 6,
})
export const bodyText = sprinkles({
  marginX: "auto",
  maxWidth: "prose",
  width: "full",
})

export const contactLink = sprinkles({
  paddingLeft: 0.5,
  height: 6,
  color: "background",
  textDecoration: "no-underline",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  paddingY: 0.5,
})

export const paragraph = sprinkles({
  marginY: 4,
})

export const contactList = sprinkles({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  fontSize: "xs",
  justifyContent: "center",
  marginY: 2,
})
export const contactListItem = sprinkles({ marginX: 2 })

export const contactIcon = sprinkles({
  marginRight: 1,
  width: 4,
  lineHeight: 6,
  textAlign: "center",
  fontSize: "lg",
})

export const iconImage = sprinkles({ verticalAlign: "middle" })
