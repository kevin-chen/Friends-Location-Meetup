import React from "react";

const Alert = (props) => {
	return (
		<>
			{props.alert ? (
				<div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-orange-500">
					<span
						className="text-xl inline-block mr-5 align-middle"
						style={{ marginRight: "1.25rem" }}
					>
						<i className="fas fa-bell" />
					</span>
					<span className="inline-block align-middle mr-8">
						<b className="capitalize"> Copied Link!</b>
					</span>
					<button
						className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
            style={{marginRight: "1.25rem"}}
						onClick={() => props.setShow(false)}
					>
						<span>×</span>
					</button>
				</div>
			) : null}
		</>
	);
};

export default Alert;
