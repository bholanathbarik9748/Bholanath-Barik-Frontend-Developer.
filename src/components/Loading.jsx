import React from "react";
import LoadingImg from "../assets/Loading.gif";

const LoadingComponent = () => {
  return (
    <>
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center">
          <img
            className="lg:h-40 md:h-48 mt-10 w-full object-cover object-center h-10"
            src={LoadingImg}
            alt="Loading"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;
