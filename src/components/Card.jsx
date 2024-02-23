import React, { useEffect, useState } from "react";
import { getRecipeList } from "../api/apiHandler";
import {
  randomRantingGenerate,
  randomRecipeTime,
  renderStarRating,
  sortMealsSort,
} from "../helper/helper";
import { handlerLoading } from "../Models/Fliter";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "./Loading";
import Model from "./Model";

const Card = () => {
  const dispatch = useDispatch();
  const [recipeList, setRecipeList] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [modelInfo, setModelInfo] = useState("");
  const { Country, Loading, sortAcs } = useSelector(
    (state) => state.currentCountryName
  );

  useEffect(() => {
    const getSearchRecipe = async () => {
      dispatch(handlerLoading());
      try {
        const response = await getRecipeList(Country);
        const sortList = sortMealsSort(response?.meals, sortAcs);
        setRecipeList(sortList || []);
      } catch (error) {
        console.log("error", error);
      }
      dispatch(handlerLoading());
    };

    getSearchRecipe();
  }, [Country, dispatch, sortAcs]);

  const closeModel = () => {
    setShowModel((prev) => !prev);
  };

  const handleModelChange = (Id) => {
    setShowModel(true);
    setModelInfo(Id);
  };

  return (
    <>
      {Loading ? (
        <LoadingComponent />
      ) : (
        <section className="text-gray-600 body-font">
          {showModel && (
            <Model closeModal={closeModel} selectedRecipe={modelInfo} />
          )}
          <div className="container px-1 py-16 mx-auto">
            <div className="flex flex-wrap -m-4">
              {recipeList.length === 0 ? (
                <p>No results found.</p>
              ) : (
                recipeList.map((ele, ind) => (
                  <div
                    key={ind}
                    className="p-4 lg:w-1/3 md:w-1/2 cursor-pointer"
                    onClick={() => handleModelChange(ele.idMeal)}
                  >
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      <img
                        className="lg:h-40 md:h-48 w-full object-cover object-center"
                        src={ele.strMealThumb}
                        alt={ele.strMeal}
                      />
                      <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                          {ele.strMeal}
                        </h1>
                        <div className="flex mb-4">
                          {renderStarRating(randomRantingGenerate())}
                        </div>
                        <div className="flex items-center justify-between">
                          <button className="text-indigo-500 inline-flex items-center">
                            Learn More
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </button>
                          <p className="text-gray-500 text-sm">
                            {randomRecipeTime()} Minutes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Card;
