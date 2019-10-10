import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import mapstyle from './mapstyle';
import wmtMapIcon from './maker.png';

const Marker = ({ icon }) => (
    <div>
        <img src={icon} style={{ height: 40 }} alt=" " />
    </div>
);

class EventMap extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 17
    };

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            works: false,
            mapMarker: false,
            mapState: 'india',
            mapCenter: {
                lat: 23.066370,
                lng: 72.531700,
            },
        };
    }

    render() {
        const { mapCenter } = this.state;
        const { zoom } = this.props;
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '60vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBI6bQXwNHT0nmQyhdqHFM4s42wInRjKKc' }}

                    defaultCenter={mapCenter}
                    defaultZoom={zoom}
                    options={{
                        styles: [...mapstyle],
                        zoomControl: false,
                        streetViewControl: false,
                        panControl: false,
                        scrollwheel: false,
                    }}
                >
                    <Marker lat={mapCenter.lat} lng={mapCenter.lng} icon={wmtMapIcon} />
                </GoogleMapReact>
            </div>
        );
    }
}

export default EventMap;