import { graphql } from "gatsby"

export const query = graphql`
  fragment ResumeView on Resume {
    careerObjective
    company
    summary
    skills
    applicant {
      childApplicantsJson {
        ...ApplicantData
      }
    }
    education {
      ...ResumeEducation
    }
    jobExperience {
      ...ResumeJobExperience
    }
    projects {
      ...ResumeProject
    }
  }

  fragment ApplicantData on ApplicantsJson {
    name
    phone
    email
    address
    github
    linkedin
  }

  fragment ResumeEducation on ResumeEducation {
    achievement
    endDate
    school
    startDate
  }

  fragment ResumeJobExperience on ResumeJobExperience {
    company
    duties
    endDate
    startDate
    title
  }

  fragment ResumeProject on ResumeProject {
    description
    url
    name
    startDate
    endDate
  }
`
