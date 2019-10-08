import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/image';
import { Container, Row, Col } from 'react-grid-system';


const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Container>
            <Row style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                color: "#fff",
                fontFamily: "Space Mono"
            }}>
                <Col sm={6}>
                    <h1 className="main-title" style={{ fontFamily: "Space Mono" }}>
                        Hacktoberfest 2019 <span style={{ 'color': '#fff922' }}>@webmobtech</span>!
                    </h1>
                </Col>
                <Col sm={6}>
                    <Image />
                </Col>
            </Row>

            <Row>
                <Col sm={12}>
                    <div class="section2 space" style={{
                        color: "#fff",
                        fontFamily: "Space Mono"
                    }}>
                        <div class="line-br">
                            <span class="line-br-1">-</span>
                            <span class="line-br-2">-</span>
                        </div>
                        <h2 class="title is-2 is-spaced"> Event details</h2>
                        <p class="p">
                            Hacktoberfest<span class="reg">®</span> is open to everyone in our global community. Whether you’re a developer, student learning to code, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge.
                        </p>
                        <ul>
                            <li class="bullet">
                                <span class="p">Hacktoberfest is open to everyone in our global community!</span>
                            </li>
                            <li class="bullet">
                                <span class="p">Pull requests can be made in any GitHub-hosted repositories/projects.</span>
                            </li>
                            <li class="bullet">
                                <span class="p">Sign up anytime between October 1 and October 31.</span>
                            </li>
                        </ul>
                        <h2 class="title is-2 is-spaced">Rules</h2>
                        <p class="p">
                            To qualify for the official limited edition Hacktoberfest shirt, you must register and make four pull requests (PRs) between October 1-31 (in any time zone). PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate. This year, the first 50,000 participants who successfully complete the challenge will earn a T-shirt.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Layout >
)

export default IndexPage