import React from "react"
import { PageProps, HeadFC, graphql } from "gatsby"
import Seo from "../components/seo"
import { CoverLetter } from "../components/CoverLetter"

const CoverLetterTemplate: React.FC<PageProps<Queries.CoverLetterQuery>> = ({
  children,
  data: { mdx },
}) => {
  if (mdx) {
    const { frontmatter } = mdx
    if (frontmatter) {
      const { applicant, careerObjective, company } = frontmatter
      return (
        <CoverLetter
          applicant={applicant}
          careerObjective={careerObjective}
          company={company}
        >
          {children}
        </CoverLetter>
      )
    }
  }
  return null
}

export const Head: HeadFC<Queries.ResumePageQuery> = () => (
  <Seo title="Cover Letter" />
)

export const query = graphql`
  query CoverLetter($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        ...CoverLetterFrontmatter
      }
    }
  }

  fragment CoverLetterFrontmatter on MdxFrontmatter {
    careerObjective
    company
    applicant {
      childApplicantsJson {
        name
        phone
        email
        address
        github
        linkedin
      }
    }
  }
`

export default CoverLetterTemplate
