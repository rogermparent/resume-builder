import * as React from "react"
import { PageProps, graphql, HeadFC, Link } from "gatsby"

import Seo from "../components/seo"

const ResumePage: React.FC<PageProps<Queries.ResumeIndexQuery>> = ({
  data,
}) => {
  const { resumes, coverLetters } = data
  return (
    <div>
      <div>
        <h1>Resumes</h1>
        {resumes.nodes.map(({ parent }) => {
          const { name } = parent as { name: string }
          return (
            name && (
              <div>
                <Link to={`/resumes/${name}`}>{name}</Link>
              </div>
            )
          )
        })}
      </div>
      <div>
        <h1>Cover Letters</h1>
        {coverLetters.nodes.map(({ parent }) => {
          const { name } = parent as { name: string }
          return (
            name && (
              <div>
                <Link to={`/cover-letters/${name}`}>{name}</Link>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

export const Head: HeadFC = () => <Seo title="Resumes" />

export const query = graphql`
  query ResumeIndex {
    resumes: allResumesJson {
      nodes {
        parent {
          ... on File {
            name
          }
        }
      }
    }
    coverLetters: allMdx {
      nodes {
        id
        parent {
          ... on File {
            name
          }
        }
        internal {
          contentFilePath
        }
      }
    }
  }
`

export default ResumePage
