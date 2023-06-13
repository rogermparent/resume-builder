import React from "react"
import { PageProps, graphql, HeadFC } from "gatsby"

import { Resume } from "../../collections/Resume/View"
import Seo from "../../components/seo"
import "./global.css"

const ResumePage: React.FC<PageProps<Queries.ResumePageQuery>> = ({ data }) => {
  const { resume } = data
  return <Resume resume={resume} />
}

export const Head: HeadFC<Queries.ResumePageQuery> = ({ data }) => {
  return <Seo title={data.resume?.filename || "untitled resume"} />
}

export default ResumePage

export const query = graphql`
  query ResumePage($id: String!) {
    resume(id: { eq: $id }) {
      filename
      ...ResumeView
    }
  }
`
