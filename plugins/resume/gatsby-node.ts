import { GatsbyGraphQLType, GatsbyNode } from "gatsby"
import { FileSystemNode } from "gatsby-source-filesystem"

/*
Date
MDX
Object
ObjectList
String
StringList
*/

interface FieldSchemaCustomizer {
  (): GatsbyGraphQLType[]
}

interface FieldSchemaCustomizers {
  [type: string]: FieldSchemaCustomizer
}

const schemaCustomizers: FieldSchemaCustomizers = {
  Date: () => {},
  MDX: () => {},
  Object: () => {},
  ObjectList: () => {},
  String: () => {},
  StringList: () => {},
}

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
        name: "Resume",
        fields: {
          applicant: {
            type: "File!",
            extensions: {
              link: {
                by: "name",
              },
            },
          },
          date: "String",
          careerObjective: "String",
          company: "String",
          summary: "String",
          skills: "[String!]",
          education: "[ResumeEducation!]",
          jobExperience: "[ResumeJobExperience!]",
          projects: "[ResumeProject!]",
        },
        interfaces: ["Node"],
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

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] =
  function ({ Joi }) {
    return Joi.object({
      plugins: Joi.subPlugins().description(
        `A list of remark plugins. See also: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-remark for examples`
      ),
    })
  }

interface EducationJSON {
  slug: string
  school: string
  achievement: string
  startDate: string
  endDate: string
}

interface ExperienceJSON {
  slug: string
  company: string
  title: string
  startDate: string
  endDate: string
  duties: string[]
}

interface ProjectJSON {
  slug: string
  name: string
  url: string
  description: string
  startDate: string
  endDate: string
}

interface ResumeJSON {
  applicant: string
  careerObjective: string
  company: string
  summary: string
  skills: string[]
  education: EducationJSON[]
  jobExperience: ExperienceJSON[]
  projects: ProjectJSON[]
}

export const onCreateNode: GatsbyNode<
  Record<string, unknown> & ResumeJSON
>["onCreateNode"] = api => {
  const {
    node,
    getNode,
    createNodeId,
    createContentDigest,
    actions: { createNode },
  } = api
  if (node.internal.type === "ResumesJson") {
    const fileNode = getNode(node.parent as string) as FileSystemNode
    const {
      applicant,
      careerObjective,
      company,
      summary,
      skills,
      education,
      jobExperience,
      projects,
    } = node
    const { name: filename, modifiedTime } = fileNode
    const fields = {
      applicant,
      careerObjective,
      company,
      summary,
      skills,
      education,
      jobExperience,
      projects,
      filename,
      modifiedTime,
    }
    const newNode = {
      id: createNodeId("Resume >>> " + filename),
      parent: node.id,
      ...fields,
      internal: {
        type: "Resume",
        contentDigest: createContentDigest(fields),
      },
    }
    console.log(newNode)
    createNode(newNode)
  }
}
