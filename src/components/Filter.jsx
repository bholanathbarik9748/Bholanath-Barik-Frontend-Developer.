import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlidersH,
  faArrowDownAZ,
} from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h5 className="text-xl font-bold mt-10">Discover the Flavors Culture</h5>
      <div className="flex flex-col sm:flex-row justify-between mt-5">
        <div className="mb-3 sm:mb-0">
          <div className="flex items-center bg-gray-100 rounded-xl py-2 px-4 cursor-pointer">
            <p className="mx-3 font-normal">Filter By Area</p>
            <FontAwesomeIcon icon={faSlidersH} />
          </div>
        </div>
        <div>
          <div className="flex items-center bg-gray-100 rounded-xl py-2 px-4 cursor-pointer">
            <p className="mx-3 font-normal">Sort By</p>
            <FontAwesomeIcon icon={faArrowDownAZ} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
