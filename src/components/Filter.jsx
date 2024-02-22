import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH, faArrowDown } from "@fortawesome/free-solid-svg-icons";

// import CountryList
import { CountryList } from "../Data/FilterList";

const Filter = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenSort, setIsOpenSort] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setIsOpenSort(false);
  };

  const handleOpenSort = () => {
    setIsOpenSort(!isOpenSort);
    setIsOpen(false);
  };

  const handleCountrySelection = (event) => {
    console.log(event.target.value);
  };

  const handleCountrySubmit = () => {
    console.log("Open");
  };

  const handleSortSubmit = () => {
    console.log("Open");
  };

  const handleCountryCancel = () => {
    setIsOpen(!isOpen);
    setIsOpenSort(false);
  };

  const handleSortCancel = () => {
    setIsOpenSort(!isOpenSort);
    setIsOpen(false);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <h5 className="text-xl font-bold mt-10">Discover the Flavors Culture</h5>
      <div className="flex flex-col sm:flex-row justify-between mt-5">
        <div className="mb-3 sm:mb-0">
          <div className="relative">
            <button
              onClick={handleOpen}
              className="dropdown-btn bg-gray-100 rounded-xl py-2 px-3 flex items-center cursor-pointer"
            >
              <p className="mx-2 font-normal">Filter By Area</p>
              <FontAwesomeIcon icon={faSlidersH} />
            </button>
            {isOpen && (
              <div className="dropdown-menu bg-gray-50 rounded-xl w-full mt-1 shadow-md z-30">
                <ul className="py-2">
                  {CountryList?.countries?.map((country, index) => (
                    <li
                      key={index}
                      className="px-4 py-1 hover:bg-gray-100 cursor-pointer flex items-center"
                      onClick={() => handleCountrySelection(country)}
                    >
                      <input
                        id={`country-radio-${index}`}
                        type="radio"
                        value={country.code}
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
                      />
                      <label
                        htmlFor={`country-radio-${index}`}
                        className="text-sm font-medium text-gray-900"
                      >
                        {country.name}
                      </label>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end px-4 py-2">
                  <button
                    onClick={handleCountrySubmit}
                    className="px-3 py-1 bg-amber-500 text-white rounded hover:bg-amber-600 mr-2 text-sm"
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleCountryCancel}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="relative">
            <button
              onClick={handleOpenSort}
              className="dropdown-btn bg-gray-100 rounded-xl py-2 px-3 flex items-center cursor-pointer"
            >
              <p className="mx-2 font-normal">Sort By</p>
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
            {isOpenSort && (
              <div className="dropdown-menu bg-gray-50 rounded-xl w-full mt-1 shadow-md z-30">
                <ul className="py-2">
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900"
                      >
                        A to Z
                      </label>
                    </div>
                  </li>
                  <li className="px-4 py-1 hover:bg-gray-100 cursor-pointer">
                    <div className="flex items-center">
                      <input
                        id="default-radio-2"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="default-radio-2"
                        className="ml-2 text-sm font-medium text-gray-900"
                      >
                        Z to A
                      </label>
                    </div>
                  </li>
                </ul>
                <div className="flex justify-end px-4 py-2">
                  <button
                    onClick={handleSortSubmit}
                    className="px-3 py-1 bg-amber-500 text-white rounded hover:bg-amber-600 mr-2 text-sm"
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleSortCancel}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
