import React, { useState } from "react";

import IndexNavbar from "my_site/Components/IndexNavbar";
import { useParams } from "react-router-dom";

export default function Profile() {

  const generateStr = () => {
		if (id) return id;
		return "";
	};

	let { id } = useParams();
	const [name, setName] = useState("");
	const [groupID, setGroupID] = useState(generateStr());

  const handleNameChange = (e) => {
		const name = e.target.value;
		setName(name);
	};

  const handleGroupIDChange = (e) => {
		const groupID = e.target.value;
		setGroupID(groupID);
	};

	const handleEnterGroup = () => {
		// console.log("HELLO");
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
									<form
										onSubmit={(e) => {
											e.preventDefault();
											handleEnterGroup();
										}}
									>
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Name
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
											/>
										</div>

										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Group ID
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												placeholder="Group ID"
												value={groupID}
                        onChange={handleGroupIDChange}
											/>
										</div>

										<div className="text-center mt-6">
											<button
												className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
												type="submit"
											>
												Enter
											</button>
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
