import React from "react"
import SectionTitle from "../SectionTitle"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const Button = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 20px;
  padding: 1.25rem 1.75rem;
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
        edges {
          node {
            frontmatter {
              title
            }
            html
          }
        }
      }
    }
  `)

  return (
    <div id="contact">
      <SectionTitle>
        {data.allMarkdownRemark.edges[0].node.frontmatter.title}
      </SectionTitle>
      <div align="center">
        <div
          dangerouslySetInnerHTML={{
            __html: data.allMarkdownRemark.edges[0].node.html,
          }}
        ></div>
        <a href="mailto:thecharlesjenkins@gmail.com" target="_blank" rel="noopener noreferrer">
          <Button>Email me</Button>
        </a>
      </div>
    </div>
  )
}

export default Contact;
