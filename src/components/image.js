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

  return <img src={data.placeholderImage.publicURL} style={{
    willChange: 'transform',
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }} />
}

export default Image
