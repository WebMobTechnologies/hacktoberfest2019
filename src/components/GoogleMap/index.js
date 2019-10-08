import React, { Component } from "react"
import { Container, Row, Col } from "react-grid-system"
import GoogleMapReact from "google-map-react"

const RenderMap = ({ text }) => <div>{text}</div>

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  }

  render() {
    return (
      <Row>
        <Col sm={12}>
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCYsb7PcGyMPKu-ph_Qi5N8t9eNi6tbF5A",
              }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <RenderMap lat={59.955413} lng={30.337844} />
            </GoogleMapReact>
          </div>
        </Col>
      </Row>
    )
  }
}

export default GoogleMap
