import React from "react";

function index() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div className="lg:max-w-[548px] md:max-w-[516px] max-w-[319px] w-full mx-auto bg-white flex rounded-r relative">
            <svg
              className="absolute my-auto cursor-pointer right-4 top-4 "
              width={10}
              height={10}
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.06694 0.183058C0.822864 -0.0610194 0.427136 -0.0610194 0.183058 0.183058C-0.0610194 0.427136 -0.0610194 0.822864 0.183058 1.06694L4.11612 5L0.183058 8.93306C-0.0610194 9.17714 -0.0610194 9.57286 0.183058 9.81694C0.427136 10.061 0.822864 10.061 1.06694 9.81694L5 5.88388L8.93306 9.81694C9.17714 10.061 9.57286 10.061 9.81694 9.81694C10.061 9.57286 10.061 9.17714 9.81694 8.93306L5.88388 5L9.81694 1.06694C10.061 0.822864 10.061 0.427136 9.81694 0.183058C9.57286 -0.0610194 9.17714 -0.0610194 8.93306 0.183058L5 4.11612L1.06694 0.183058Z"
                fill="#1F2937"
              />
            </svg>
            <div className="min-w-[4px]  bg-red-500" />
            <div className="px-10 py-6 ">
              <div aria-label="text">
                <p className="mb-2 text-base font-semibold leading-normal text-gray-800">
                  Something went wrong
                </p>
                <p className="text-xs text-gray-600">
                  Sorry, your billing address couldn’t be verified. Please check
                  your billing address details and try again.{" "}
                </p>
              </div>
              <div className="flex items-center justify-end mt-4">
                <p className="text-xs font-medium leading-3 text-red-700 px-3.5 py-2.5 bg-red-50 rounded cursor-pointer hover:underline">
                  View details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
