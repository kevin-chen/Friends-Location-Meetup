import React, { useState } from "react";

import IndexNavbar from "my_site/Components/IndexNavbar";
import Alert from "my_site/Components/Alert";
import { Link } from "react-router-dom";

export default function Profile() {
	const [groupID, setGroupID] = useState("");
	const [showAlert, setShowAlert] = useState(false);

	const handleCreateGroup = async () => {
		let newText = "123e4567-e89b-12d3-a456-426614174000";
		setGroupID(newText);
		let url =
			"https://friend-location-meetup.herokuapp.com/enter_group/" +
			newText;
		navigator.clipboard.writeText(url);
		setShowAlert(true);
	};

	return (
		<>
			<IndexNavbar transparent />
			<main className="profile-page">
				<section className="relative block h-500-px">
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage:
								"url('https://source.unsplash.com/user/erondu/1600x900')",
						}}
					>
						<span
							id="blackOverlay"
							className="w-full h-full absolute opacity-50 bg-black"
						></span>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
						style={{ transform: "translateZ(0)" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-blueGray-200 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</section>

				<section className="relative py-16 bg-blueGray-200">
					<div className="container mx-auto px-4">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
							<div className="px-6">
								<div className="flex-auto px-4 lg:px-10 py-10 pt-10">
									<Alert
										alert={showAlert}
										setShow={setShowAlert}
									/>
									<form
										onSubmit={(e) => {
											e.preventDefault();
											handleCreateGroup();
										}}
									>
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Group ID
											</label>
											<input
												id="group_id_input"
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Group ID"
												value={groupID}
												disabled
												readOnly
											/>
										</div>

										<div className="text-center mt-6">
											{!showAlert ? (
												<button
													className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
													type="submit"
												>
													Create Group
												</button>
											) : (
												<Link
													to={`/enter_group/${groupID}`}
												>
												<button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
												
													Enter Group
												
												</button>
												</Link>
											)}
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
