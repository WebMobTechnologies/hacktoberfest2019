import React from "react"
import Layout from "../components/Layout"
import Image from '../components/Image';
import { Container, Row, Col } from 'react-grid-system';
import SEO from "../components/SEO"
import Line from "../components/Line";


const IndexPage = () => (
    <Layout>
        <SEO title="Hacktoberfest Open Hack Day - WebMob Technologies" />
        <Container>
            <Row style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",

            }}>
                <Col sm={6}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <h1 className="title" >
                            Hacktoberfest 2019 <span style={{ 'color': '#fff922' }}>@webmobtech</span>!
                    </h1>
                        <a className="register-btn" href="#">Register</a>
                    </div>
                </Col>
                <Col sm={6}>
                    <Image />
                </Col>
            </Row>

            <Row className="mt-5">
                <Col sm={12}>
                    <div className="section2 space">
                        <Line />
                        <h2 className="title is-2 is-spaced"> Event details</h2>
                        <p className="p">
                            Hacktoberfest<span className="reg">®</span> is open to everyone in our global community. Whether you’re a developer, student learning to code, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge.
                        </p>
                        <ul>
                            <li className="bullet">
                                <span className="p">Hacktoberfest is open to everyone in our global community!</span>
                            </li>
                            <li className="bullet">
                                <span className="p">Pull requests can be made in any GitHub-hosted repositories/projects.</span>
                            </li>
                            <li className="bullet">
                                <span className="p">Sign up anytime between October 1 and October 31.</span>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>


            <Row className="mt-5">
                <Col sm={12}>
                    <Line />
                    <h2 className="title is-2 is-spaced">Rules</h2>
                    <p className="p">
                        To qualify for the official limited edition Hacktoberfest shirt, you must register and make four pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate. This year, the first 50,000 participants who successfully complete the challenge will earn a T-shirt.
                        </p>
                </Col>
            </Row>
        </Container>


        <div className="mt-5 spread" >
            <Container >
                <Row style={{ alignItems: 'center' }}>
                    <Col sm={6}>
                        <Line />
                        <h2 className="title is-2 is-spaced"> Spread the word!</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    </Layout >
)

export default IndexPage