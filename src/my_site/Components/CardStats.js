import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
  statSubtitle,
  statTitle,
  directions,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statSubtitle.lat}, {statSubtitle.lng}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                <a href={directions} target="_blank" rel="noreferrer"><i className={statIconName}></i></a>
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className="whitespace-nowrap"><button>Delete</button></span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: { lat: 0, lng: 0 },
  statIconName: "fas fa-directions",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.object,
  statTitle: PropTypes.string,
  statIconName: PropTypes.string,
  statIconColor: PropTypes.string,
};
