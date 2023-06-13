import { sprinkles } from "../../../styles/sprinkles.css"
import "../../../components/Layout/styles.css"

export const resume = sprinkles({
  fontFamily: "body",
  fontSize: "default",
  height: "full",
})

export const contentContainer = sprinkles({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
})

export const headerContainer = sprinkles({})

export const sidebarContainer = sprinkles({ flexShrink: 0 })

export const sidebarInnerContainer = sprinkles({
  height: "full",
  margin: 5,
})

export const sidebarMainSection = sprinkles({
  justifyContent: "space-around",
})

export const mainContainer = sprinkles({ fontSize: "default" })

export const mainInnerContainer = sprinkles({
  justifyContent: "space-evenly",
  height: "full",
  margin: 5,
})

export const defaultMargin = sprinkles({})

export const defaultVerticalMargin = sprinkles({})

export const applicantName = sprinkles({
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "3xl",
  fontFamily: "heading",
  marginBottom: 2,
})

export const positionIndicator = sprinkles({
  fontFamily: "heading",
  fontSize: "3xl",
  textAlign: "center",
})

export const careerObjective = sprinkles({})

export const companyObjective = sprinkles({
  fontWeight: "bold",
})

export const sidebarSectionTitle = sprinkles({
  fontWeight: "bold",
  fontSize: "2xl",
  fontFamily: "heading",
  marginY: 4,
  paddingBottom: 1,
  borderBottom: "default",
})

export const dateSpan = sprinkles({})

export const sectionWrapper = sprinkles({ marginY: 4 })

export const sectionTitle = sprinkles({
  fontWeight: "bold",
  fontSize: "2xl",
  fontFamily: "heading",
  marginTop: 4,
  marginBottom: 2,
  paddingBottom: 1,
  borderBottom: "default",
})

export const sectionTitleBlock = sprinkles({
  fontFamily: "heading",
  marginBottom: 1,
})

export const sectionSubtitle = sprinkles({
  fontSize: "lg",
  fontWeight: "normal",
})

export const sectionItemTitle = sprinkles({
  fontFamily: "heading",
  fontSize: "xl",
  fontWeight: "bold",
})

export const list = sprinkles({
  marginLeft: 3,
})

export const projectLink = sprinkles({ marginRight: 1 })

export const projectsList = sprinkles({ paddingLeft: 2 })

export const projectsListItem = sprinkles({ marginY: 2, marginLeft: 1 })

export const projectsListDescription = sprinkles({})

export const projectIcon = sprinkles({
  textDecoration: "no-underline",
  verticalAlign: "middle",
  display: "inline-block",
  width: 4,
  marginBottom: 1,
  textAlign: "center",
  fontSize: "lg",
})

export const experienceList = sprinkles({})

export const experienceListItem = sprinkles({
  marginY: 2,
})

export const experienceListDuty = sprinkles({
  marginY: 0.5,
})

export const educationItem = sprinkles({
  fontSize: "default",
  listStyle: "none",
  marginY: 4,
})

export const educationAchievement = sprinkles({
  fontFamily: "heading",
  fontWeight: "bold",
  fontSize: "default",
})

export const educationSchool = sprinkles({})

export const contactLink = sprinkles({ whiteSpace: "nowrap" })

export const contactListItem = sprinkles({ marginY: 1 })

export const contactIcon = sprinkles({
  display: "inline-block",
  width: 4,
  lineHeight: 6,
  textAlign: "center",
  fontSize: "lg",
})

export const iconImage = sprinkles({ verticalAlign: "middle" })

export const skillsList = sprinkles({ listStyle: "none" })

export const skillsListItem = sprinkles({
  listStyle: "none",
  fontFamily: "heading",
  fontSize: "xl",
  fontWeight: "bold",
  marginY: 2,
})
