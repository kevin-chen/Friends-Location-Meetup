import React from "react";

const MapExample = (props) => {
	const mapRef = React.useRef(null);
	React.useEffect(() => {
		let google = window.google;
		let map = mapRef.current;
		let lat = 0;
		let lng = 0;

		if (props.markers.length < 1) {
			console.log("Creating Markers with no values on map: ", props.markers);
			lat = 0
			lng = 0
		}
		else {
			console.log("Creating Markers on map: ", props.markers);
			lat = props.markers[0][0].lat;
			lng = props.markers[0][0].lng;
		}

		const centerLatLng = new google.maps.LatLng(lat, lng);
		const infoWindow = new google.maps.InfoWindow();
		const mapOptions = {
			zoom: 12,
			center: centerLatLng,
			scrollwheel: false,
			zoomControl: true,
		};

		map = new google.maps.Map(map, mapOptions);

		props.markers.forEach(([position, title], i) => {
			const marker = new google.maps.Marker({
				position,
				map,
				title: `${title}'s Location: ${position.lat}, ${position.lng}`,
				label: `${title ? title[0] : ""}`, // `${i + 1}`,
				optimized: false,
			});
			marker.addListener("click", () => {
				infoWindow.close();
				infoWindow.setContent(marker.getTitle());
				infoWindow.open(marker.getMap(), marker);
			});
		});
	});

	return (
		<>
			<div className="relative w-full rounded h-600-px">
				<div className="rounded h-full" ref={mapRef} />
			</div>
		</>
	);
};

export default MapExample;
