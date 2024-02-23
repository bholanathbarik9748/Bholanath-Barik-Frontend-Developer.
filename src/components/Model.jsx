import React, { useRef, useEffect, useState } from "react";
import { getMealDetail } from "../api/apiHandler";
import LoadingComponent from "./Loading";

const Model = ({ closeModal, selectedRecipe }) => {
  const modalRef = useRef();
  const [mealInfo, setMealInfo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        setLoading(true);
        const response = await getMealDetail(selectedRecipe);
        setMealInfo(response.data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchMealDetails();
  }, [selectedRecipe]);

  return (
    <div className="fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg max-w-3xl w-full overflow-y-auto relative"
        style={{ maxHeight: "80vh", marginTop: "10vh" }}
      >
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <button
              className="absolute top-4 right-4 text-black"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6 text-amber-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mb-8">
              <h1 className="font-bold text-4xl mb-2">{mealInfo?.strMeal}</h1>
              <div className="flex flex-wrap mb-2">
                {mealInfo?.strCategory && (
                  <div className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 text-sm mr-2 mb-2">
                    {mealInfo?.strCategory}
                  </div>
                )}
                {mealInfo?.strArea && (
                  <div className="bg-gray-200 text-gray-700 rounded-full px-4 py-1 text-sm mr-2 mb-2">
                    {mealInfo?.strArea}
                  </div>
                )}
                {mealInfo?.strYoutube && (
                  <a
                    href={mealInfo?.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 text-white rounded-full px-4 py-1 text-sm mr-2 mb-2"
                  >
                    See video
                  </a>
                )}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="font-semibold text-2xl mb-2">Ingredients</h2>
              <div className="overflow-x-auto shadow-md rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        Quantity
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(mealInfo).map((key, index) => {
                      if (key.includes("strIngredient") && mealInfo[key]) {
                        const ingredientNumber = key.split("strIngredient")[1];
                        const ingredient = mealInfo[key];
                        const measureKey = `strMeasure${ingredientNumber}`;
                        const measure = mealInfo[measureKey];

                        return (
                          <tr
                            key={index}
                            className="border-b border-gray-200 dark:border-gray-700"
                          >
                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                              {ingredient}
                            </td>
                            <td className="px-6 py-4">{measure}</td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            {mealInfo?.strInstructions && (
              <div>
                <h2 className="font-semibold text-2xl mb-2">Process</h2>
                <p className="text-gray-700">{mealInfo?.strInstructions}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Model;
