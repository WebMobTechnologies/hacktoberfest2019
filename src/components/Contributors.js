import React from "react"
import Line from "./Line"
import { Container, Row, Col } from "react-grid-system"
import test from '../../static/images/test.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faTwitter,
  faInstagram,
  faGithub,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"

const Contributors = () => (
  <div>
    <Line />
    <h2 className="title is-2 is-spaced">Contributors</h2>
    <Row>
        <Col xs={12} md={6} lg={4}>
            <div className="box-projects grow-shadow">
                <div className="img-desc">
                    <img src={test} alt="test" />   
                </div>
                <div className="title-social">
                    <div className="title">
                        <h3> Carthage </h3>
                    </div>
                    <div className="description">
                        <a target="_blank"><FontAwesomeIcon icon={faTwitter} />@floristenhove</a>
                        <a target="_blank"><FontAwesomeIcon icon={faGithub} />@floristenhove</a>
                        <a target="_blank"><FontAwesomeIcon icon={faStackOverflow} />@floristenhove</a>
                    </div>
                </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
            <div className="box-projects grow-shadow">
                <div className="img-desc">
                    <img src={test} alt="test" />   
                </div>
                <div className="title-social">
                    <div className="title">
                        <h3> Carthage </h3>
                    </div>
                    <div className="description">
                        <a target="_blank"><FontAwesomeIcon icon={faInstagram} />@floristenhove</a>
                    </div>
                </div>
            </div>
        </Col>
        <Col xs={12} md={6} lg={4}>
            <div className="box-projects grow-shadow">
                <div className="img-desc">
                    <img src={test} alt="test" />   
                </div>
                <div className="title-social">
                    <div className="title">
                        <h3> Carthage </h3>
                    </div>
                    <div className="description">
                        <a target="_blank"><FontAwesomeIcon icon={faInstagram} />@floristenhove</a>
                    </div>
                </div>
            </div>
        </Col>
    </Row>
    
  </div>
)

export default Contributors
