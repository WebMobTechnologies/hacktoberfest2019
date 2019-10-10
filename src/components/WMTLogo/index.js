import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const WMTLogo = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wmt_white_logo.png" }) {
        publicURL
      }
    }
  `)

    return <div className="resp_logo">
        <img src={data.placeholderImage.publicURL} alt="WMT Logo" />
    </div>
}

export default WMTLogo;
