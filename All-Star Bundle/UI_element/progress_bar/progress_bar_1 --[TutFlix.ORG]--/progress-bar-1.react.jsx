import React from "react";

function index() {
  return (
    <>
      <div className="h-full w-full pt-12 bg-white lg:max-w-[1124px] mx-auto">
        <div className="flex justify-between px-6 mb-8">
          <p className="text-sm font-semibold leading-none text-gray-800 lg:text-base md:text-base">
            Uploading in progress
          </p>
          <p className="text-xs font-medium leading-none text-gray-600 lg:text-sm md:text-sm">
            30s left
          </p>
        </div>
        <div className="flex justify-center mx-auto ">
          <div className="w-full h-2 bg-indigo-100 rounded-full">
            <div className="relative w-8/12 h-2 bg-indigo-700 rounded lg:w-7/12 md:w-7/12">
              <div className="absolute right-0 -top-16">
                <div className="relative px-3 py-2 mt-4 -mr-5 bg-indigo-700 rounded shadow-lg">
                  <svg
                    className="absolute left-0 right-0 w-full rotate-180 -bottom-2"
                    width="16px"
                    height="8px"
                    viewBox="0 0 16 8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Progress-Bars"
                        transform="translate(-322.000000, -198.000000)"
                        fill="#4338ca"
                      >
                        <g
                          id="Group-4"
                          transform="translate(310.000000, 198.000000)"
                        >
                          <polygon id="Triangle" points="20 0 28 8 12 8" />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <p className="text-xs font-bold text-white">55%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
