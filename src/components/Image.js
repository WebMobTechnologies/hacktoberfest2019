import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main_img.svg" }) {
        publicURL
      }
    }
  `)

  return <img src={data.placeholderImage.publicURL} alt="hacktoberfest2019" />
}

export default Image
