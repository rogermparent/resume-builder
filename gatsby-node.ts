import type { GatsbyNode } from "gatsby"
import path from "path"

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions: { createTypes }, schema }) => {
    createTypes([
      schema.buildObjectType({
        name: "MdxFrontmatter",
        fields: {
          applicant: {
            type: "File!",
            extensions: {
              link: {
                by: "name",
              },
            },
          },
        },
        interfaces: ["Node"],
      }),
      schema.buildObjectType({
        name: "ApplicantsJson",
        fields: {
          slug: "String!",
          name: "String",
          phone: "String",
          email: "String",
          address: "String",
          github: "String",
          linkedin: "String",
        },
        interfaces: ["Node"],
        extensions: {
          infer: false,
        },
      }),
      schema.buildObjectType({
        name: "ResumesJson",
        fields: {
          applicant: {
            type: "File!",
            extensions: {
              link: {
                by: "name",
              },
            },
          },
          careerObjective: "String",
          company: "String",
          summary: "String",
          skills: "[String!]",
          education: "[ResumeEducation!]",
          jobExperience: "[ResumeJobExperience!]",
          projects: "[ResumeProject!]",
        },
        interfaces: ["Node"],
        extensions: {
          infer: false,
        },
      }),
      schema.buildObjectType({
        name: "ResumeEducation",
        fields: {
          slug: "String!",
          school: "String",
          achievement: "String",
          startDate: "String",
          endDate: "String",
        },
        extensions: {
          infer: false,
        },
      }),
      schema.buildObjectType({
        name: "ResumeJobExperience",
        fields: {
          slug: "String!",
          company: "String",
          title: "String",
          startDate: "String",
          endDate: "String",
          duties: "[String!]",
        },
        extensions: {
          infer: false,
        },
      }),
      schema.buildObjectType({
        name: "ResumeProject",
        fields: {
          slug: "String!",
          name: "String",
          url: "String",
          description: "String",
          startDate: "String",
          endDate: "String",
        },
        extensions: {
          infer: false,
        },
      }),
    ])
  }

export const createPages: GatsbyNode["createPages"] = async (
  { graphql, actions },
  { postTemplate = path.resolve("src", "templates", "coverLetter.tsx") }
) => {
  const { data } = await graphql<{
    allMdx: {
      nodes: {
        id: string
        parent: { name: string }
        internal: { contentFilePath: string }
      }[]
    }
  }>(`
    query MdxPagesQuery {
      allMdx {
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
  `)

  if (data) {
    data.allMdx.nodes.forEach(node => {
      actions.createPage({
        path: `/cover-letters/${node.parent.name}`,
        component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          id: node.id,
        },
      })
    })
  }
}
