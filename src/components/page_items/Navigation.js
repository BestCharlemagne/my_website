import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import mixins from "../../styles/mixins"
import media from "../../styles/media"

const navLinks = [
  {
    name: "Contact",
    url: "/#contact",
  },
  {
    name: "Experience",
    url: "/#experience",
  },
  {
    name: "Projects",
    url: "/#projects",
  },
  {
    name: "About",
    url: "/#about",
  },
]

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  width: 100%;
`

const TopNav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`

const NavItem = styled.li`
  float: right;
  ${media.phablet`display: none;`};
`

const NavItemLink = styled(Link)`
  display: block;
  text-align: center;
  padding: 14px 16px;
  ${mixins.underlineAnimation}
`

const Resume = styled.button`
  border: 1px solid;
  border-radius: 5px;
  font-size: 15px;
  padding: 1rem 1rem;
  margin-right: 10px;
  float: right;
`

const Title = styled(Link)`
  float: left;
  font-size: 30px;
  padding: 0px 10px 10px 10px;
  ${mixins.underlineAnimation}
`

const Right = styled.a`
  float: right;
`

const ResumeLink = ({ children }) => (
  <Right href="/charles_jenkins_resume.pdf" target="_blank" rel="noopener noreferrer">
    <Resume>{children}</Resume>
  </Right>
)

const Navigation = () => (
  <Container>
    <TopNav>
      <Title className="no-underline" to="/">Charles Jenkins</Title>
      <ResumeLink>Resume</ResumeLink>
      {navLinks &&
        navLinks.map(({ url, name }, i) => (
          <NavItem key={i}>
            <NavItemLink className="no-underline" to={url}>{name}</NavItemLink>
          </NavItem>
        ))}
    </TopNav>
  </Container>
)

export default Navigation;
