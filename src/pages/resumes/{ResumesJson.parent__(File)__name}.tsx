import React from "react"
import { PageProps, graphql, HeadFC } from "gatsby"

import { Resume } from "../../collections/Resume/View"
import Seo from "../../components/seo"
import "./global.css"

const ResumePage: React.FC<PageProps<Queries.ResumePageQuery>> = ({ data }) => {
  const { resumesJson } = data
  return <Resume resume={resumesJson} />
}

export const Head: HeadFC<Queries.ResumePageQuery> = () => (
  <Seo title="Resume" />
)

export default ResumePage

export const query = graphql`
  query ResumePage($id: String!) {
    resumesJson(id: { eq: $id }) {
      ...ResumeView
    }
  }
`
