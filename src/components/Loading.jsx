import React from "react";

const LoadingComponent = () => {
  return (
    <>
      <div class="flex justify-center items-center">
        <div class="flex justify-center items-center">
          <div class="animate-spin rounded-full border-t-4 border-b-4 border-amber-500 h-10 w-10"></div>
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;
