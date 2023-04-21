import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../../styles/sprinkles.css"
import "../../../components/Layout/styles.css"

const inverted = sprinkles({
  color: { lightMode: "background" },
  backgroundColor: { lightMode: "body" },
})

export const resume = sprinkles({
  height: "full",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  color: { lightMode: "body" },
  backgroundColor: "background",
  fontFamily: "body",
  margin: 0,
  fontSize: "default",
})

export const contentContainer = sprinkles({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  flexGrow: 1,
})

export const headerContainer = style([
  inverted,
  sprinkles({
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    marginY: 4,
  }),
])

export const sidebarContainer = style([
  inverted,
  sprinkles({
    flexShrink: 0,
    flexGrow: 0,
  }),
])

export const sidebarInnerContainer = sprinkles({
  marginX: 4,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "space-around",
  flexGrow: 1,
  height: "full",
})

export const sidebarMainSection = sprinkles({
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  flexGrow: 1,
})

export const mainContainer = sprinkles({})

export const mainInnerContainer = sprinkles({
  marginX: 4,
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "space-evenly",
  height: "full",
})

export const defaultMargin = sprinkles({})

export const defaultVerticalMargin = sprinkles({ marginY: 2 })

export const applicantName = sprinkles({
  fontWeight: "bold",
  marginY: 2,
  textAlign: "center",
  fontSize: "4xl",
  fontFamily: "heading",
})

export const careerObjective = sprinkles({
  marginTop: 3,
  fontWeight: "bold",
  fontFamily: "heading",
  textAlign: "center",
  fontSize: "4xl",
})

export const companyObjective = sprinkles({
  fontWeight: "normal",
  fontFamily: "heading",
  textAlign: "center",
  fontSize: "2xl",
})

export const sidebarSectionTitle = sprinkles({
  marginTop: 1,
  marginBottom: 5,
  fontWeight: "bold",
  paddingY: 1,
  fontSize: "3xl",
  fontFamily: "heading",
  borderBottom: "default",
  borderColor: { lightMode: "background" },
})

export const dateSpan = sprinkles({})

export const sectionWrapper = sprinkles({})

export const sectionTitle = sprinkles({
  marginY: 2,
  fontWeight: "bold",
  fontSize: "3xl",
  fontFamily: "heading",
  paddingY: 1,
  borderBottom: "default",
  borderColor: { lightMode: "body" },
})

export const sectionTitleBlock = sprinkles({
  marginY: 3,
  fontFamily: "heading",
})

export const sectionSubtitle = sprinkles({
  fontSize: "lg",
  fontWeight: "normal",
  paddingLeft: 0.5,
  marginY: 0.5,
})

export const sectionItemTitle = sprinkles({
  fontFamily: "heading",
  fontSize: "2xl",
  fontWeight: "bold",
})

export const list = sprinkles({ paddingLeft: 4, marginY: 2 })

export const projectLink = sprinkles({ color: "body" })
export const projectsList = sprinkles({ listStyle: "none" })
export const projectsListItem = sprinkles({ marginY: 2, marginLeft: 1 })
export const projectsListDescription = sprinkles({ paddingLeft: 1, marginY: 3 })

export const experienceList = sprinkles({ marginY: 4 })
export const experienceListItem = sprinkles({ marginY: 2, marginLeft: 1 })

export const educationItem = sprinkles({ marginY: 3, fontSize: "sm" })
export const educationAchievement = sprinkles({
  marginY: 0,
  fontFamily: "heading",
  fontWeight: "bold",
})
export const educationSchool = sprinkles({ marginY: 0 })

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

export const contactListItem = sprinkles({ marginY: 1 })

export const contactIcon = sprinkles({
  marginRight: 1.5,
  width: 4,
  lineHeight: 6,
  textAlign: "center",
  fontSize: "lg",
})

export const iconImage = sprinkles({ verticalAlign: "middle" })

export const skillsList = sprinkles({ listStyle: "none", paddingLeft: 1 })
export const skillsListItem = sprinkles({ listStyle: "none", marginY: 3 })
