import React from "react"
import Line from "./Line"
import { Row, Col } from "react-grid-system"
import Contributor from '../../static/Contributors.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
    faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Contributors = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">Contributors</h2>
    <Row>
        {Contributor.map(item => (
            <Col xs={12} md={6} lg={4} key={item.id}>
            <div className="box-projects">
            <div className="img-desc">
                <img src={item.image} alt="test" />   
            </div>
            <div className="title-social">
                <div className="title">
                    <h3> {item.name} </h3>
                </div>
                <div className="description">
                    <a target="_blank" href={item.twitterUrl}><FontAwesomeIcon icon={faTwitter} />{item.twitterTitle}</a>
                    <a target="_blank" ><FontAwesomeIcon icon={faGithub} />{item.githubTitle}</a>
                    {/* <a target="_blank"><FontAwesomeIcon icon={faLinkedin} />{item.linkedinTitle}</a> */}
                </div>
            </div>
            </div>       
            </Col>
         ))}        
    </Row>
    
  </div>
)

export default Contributors
