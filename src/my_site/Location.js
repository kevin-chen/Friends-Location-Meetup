import React from "react";

// components

import Map from "my_site/Components/Map.js";
import IndexNavbar from "my_site/Components/IndexNavbar";
import CardStats from "my_site/Components/CardStats.js";

export default function Maps() {
	const markers = [
		[{ lat: 40.748817, lng: -73.985428 }, "Bob"],
		[{ lat: 40.758817, lng: -73.955428 }, "Alice"],
		[{ lat: 40.768817, lng: -73.965428 }, "Mary"],
		[{ lat: 40.778817, lng: -73.975428 }, "Chris"],
		[{ lat: 40.788817, lng: -73.995428 }, "Dave"],
	];

  function updateUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    }
  }

	return (
		<>
			<IndexNavbar transparent />
			<div className="flex flex-wrap">
				<div className="w-full px-4" style={{ marginTop: "80px" }}>
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<Map markers={markers} />
					</div>
				</div>
			</div>
			<div className="container px-4 mx-auto flex flex-wrap items-center">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						updateUserLocation();
					}}
				>
					<button
						className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
						type="submit"
					>
						<i className="fas fa-location-arrow	"></i>
					</button>
				</form>
			</div>
			<div className="relative bg-white-600 md:pt-20 pb-32 pt-12">
				<div className="container px-4 md:px-10 mx-auto w-full">
					<div>
						{/* Card stats */}
						<div className="flex flex-wrap">
							{markers.map(([position, title], i) => {
								return (
									<div
										key={i}
										className="w-full lg:w-6/12 xl:w-3/12 px-4"
									>
										<CardStats
											statSubtitle={position}
											statTitle={title}
											directions={
												"https://www.google.com/maps/search/?api=1&query=" +
												position.lat +
												"," +
												position.lng
											}
											statIconColor="bg-pink-500"
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
