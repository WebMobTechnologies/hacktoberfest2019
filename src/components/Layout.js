import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CookieConsent from "react-cookie-consent"
import Header from "./Header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="hacktoberfest_wmt"
        containerClasses="cookie-content"
        buttonClasses="cookie-btn"
      >
        We use cookies to provide enhance the user experience. By continuing to
        browse our website, you agree to our use of&nbsp;cookies.
      </CookieConsent>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
