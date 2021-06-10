import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker'


const Map = ({center, zoom}) => {
	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: 'AIzaSyD8gwlkJO8I-CjX1BnTuA0XRjRJZ6HaBlY',
				}}
				defaultCenter={center}
				defaultZoom={zoom}
			>

				<LocationMarker lat={center.lat} lng={center.lng} />
			</GoogleMapReact>
		</div>
	);
};

//Set default props
Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8756,
	},
	zoom: 6
};

export default Map;
