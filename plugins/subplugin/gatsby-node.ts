import { GatsbyNode } from "gatsby"

export const pluginOptionsSchema: GatsbyNode["pluginOptionsSchema"] =
  function ({ Joi }) {
    return Joi.object({})
  }
