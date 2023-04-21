import { GatsbyGraphQLType, GatsbyNode } from "gatsby"

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

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] =
  function ({ Joi }) {
    return Joi.object({
      plugins: Joi.subPlugins().description(
        `A list of remark plugins. See also: https://github.com/gatsbyjs/gatsby/tree/master/examples/using-remark for examples`
      ),
    })
  }
