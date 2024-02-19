import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto md:py-24">
          <div className="flex flex-col text-center w-full mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold title-font mb-4 text-gray-900">
              Fast & Delicious Delivery
            </h1>
            <p className="text-lg md:text-xl mx-auto leading-relaxed text-base">
              Savor the flavors of our diverse menu
            </p>
            <p className="text-lg md:text-xl mx-auto leading-relaxed text-base">
              From appetizers to desserts, we've got you covered.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
