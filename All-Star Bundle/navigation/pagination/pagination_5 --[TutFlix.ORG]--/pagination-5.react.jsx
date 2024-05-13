import React from "react";

function index() {
  return (
    <>
      <div className="px-4 py-12 bg-gray-50">
        <div className="py-12 px-4 bg-white lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto">
          <div className="flex flex-col items-center justify-between w-full lg:px-8 lg:flex-row gap-y-8">
            <div
              aria-label="pagination"
              className="flex justify-between items-center lg:max-w-[527px] w-full"
            >
              <svg
                className="cursor-pointer"
                width={10}
                height={16}
                viewBox="0 0 10 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.1705 15.5455C8.73116 15.9848 8.01884 15.9848 7.5795 15.5455L0.829506 8.79549C0.390166 8.35615 0.390166 7.64384 0.829506 7.2045L7.57951 0.454506C8.01885 0.0151652 8.73116 0.0151653 9.1705 0.454506C9.60984 0.893845 9.60984 1.60616 9.1705 2.04549L3.21599 8L9.1705 13.9545C9.60984 14.3938 9.60984 15.1062 9.1705 15.5455Z"
                  fill="#4F46E5"
                />
              </svg>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                1
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                2
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                3
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                4
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                5
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                6
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                7
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                8
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                9
              </p>
              <p className="text-base font-medium leading-none text-gray-600 cursor-pointer hover:text-indigo-700">
                10
              </p>
              <svg
                className="cursor-pointer"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.8295 4.4545C8.26884 4.01517 8.98116 4.01517 9.4205 4.4545L16.1705 11.2045C16.6098 11.6438 16.6098 12.3562 16.1705 12.7955L9.4205 19.5455C8.98116 19.9848 8.26884 19.9848 7.8295 19.5455C7.39017 19.1062 7.39017 18.3938 7.8295 17.9545L13.784 12L7.8295 6.0455C7.39017 5.60616 7.39017 4.89384 7.8295 4.4545Z"
                  fill="#4F46E5"
                />
              </svg>
            </div>
            <div className="flex items-center justify-end w-full gap-x-4">
              <p className="text-base font-medium leading-none text-gray-600 min-w-[84px]">
                Go to page
              </p>
              <input
                type="text"
                name
                id
                placeholder={11}
                className="px-5 py-4 h-[48px] text-base font-medium leading-none text-center text-gray-800 bg-white border border-indigo-600 rounded max-w-[64px] outline-none"
              />
              <button className="px-5 py-4 h-[48px] text-base font-medium leading-none text-white duration-300 ease-in-out transform bg-indigo-700 rounded hover:bg-indigo-600  lg:max-w-[64px] w-full border border-indigo-600">
                GO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
