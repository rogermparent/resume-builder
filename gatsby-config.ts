import type { GatsbyConfig } from "gatsby"
import express, { Request, Response } from "express"
import path from "path"
import fs from "fs/promises"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Resume Editor`,
    author: "RMP",
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-vanilla-extract",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "coverLetters",
        path: "./content/coverLetters",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "resumes",
        path: "./content/resumes",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "applicants",
        path: "./content/applicants",
      },
    },
    {
      resolve: "gatsby-transformer-json",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}

export default config
