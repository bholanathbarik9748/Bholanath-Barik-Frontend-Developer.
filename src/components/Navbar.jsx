import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse justify-center sm:justify-start">
            <a className="flex items-center space-x-3 rtl:space-x-reverse block">
              <svg
                className="_8pSp-"
                viewBox="0 0 559 825"
                height="49"
                width="34"
                fill="#fc8019"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                  fill="url(#paint0_linear_19447_66107)"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_19447_66107"
                    x1="445.629"
                    y1="63.8626"
                    x2="160.773"
                    y2="537.598"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF993A"></stop>
                    <stop offset="1" stopColor="#F15700"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="self-center text-2xl font-semibold whitespace-nowrap hidden sm:block">
                Swiggy
              </span>
            </a>
          </div>
          <div className="flex items-center mt-4 sm:mt-0">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-72 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Search for restaurants and food"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
