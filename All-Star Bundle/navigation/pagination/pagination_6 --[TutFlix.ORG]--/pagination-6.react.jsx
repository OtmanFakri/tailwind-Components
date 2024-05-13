import React from "react";
function index() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className="py-12 lg:px-10 md:px-6 px-4 bg-white lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
              <div
                aria-label="pagination"
                className="flex justify-between lg:gap-10 md:gap-5 items-center md:w-full"
              >
                <div className="flex items-center lg:gap-7 gap-3">
                  <p className="text-gray-600 bg-gray-100 md:px-4 px-2 md:py-2 py-1 rounded text-xs cursor-pointer">
                    First
                  </p>
                  <svg
                    className="cursor-pointer"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.7803 13.0303C10.4874 13.3232 10.0126 13.3232 9.71967 13.0303L5.21967 8.53033C4.92678 8.23744 4.92678 7.76256 5.21967 7.46967L9.71967 2.96967C10.0126 2.67678 10.4874 2.67678 10.7803 2.96967C11.0732 3.26256 11.0732 3.73744 10.7803 4.03033L6.81066 8L10.7803 11.9697C11.0732 12.2626 11.0732 12.7374 10.7803 13.0303Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
                <div className="flex items-center lg:gap-8 md:gap-3">
                  <div aria-label="numbers">
                    <p className="text-xs font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      1
                    </p>
                  </div>
                  <div aria-label="numbers">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      2
                    </p>
                  </div>
                  <div aria-label="numbers">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      3
                    </p>
                  </div>
                  <div className="md:block hidden">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      4
                    </p>
                  </div>
                  <div className="md:block hidden">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      5
                    </p>
                  </div>
                  <div className="md:block hidden">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      6
                    </p>
                  </div>
                  <div className="md:block hidden">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      7
                    </p>
                  </div>
                  <svg
                    className="lg:hidden md:hidden block"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 7.125C6.62132 7.125 7.125 6.62132 7.125 6C7.125 5.37868 6.62132 4.875 6 4.875C5.37868 4.875 4.875 5.37868 4.875 6C4.875 6.62132 5.37868 7.125 6 7.125Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M9.75 7.125C10.3713 7.125 10.875 6.62132 10.875 6C10.875 5.37868 10.3713 4.875 9.75 4.875C9.12868 4.875 8.625 5.37868 8.625 6C8.625 6.62132 9.12868 7.125 9.75 7.125Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M2.25 7.125C2.87132 7.125 3.375 6.62132 3.375 6C3.375 5.37868 2.87132 4.875 2.25 4.875C1.62868 4.875 1.125 5.37868 1.125 6C1.125 6.62132 1.62868 7.125 2.25 7.125Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <div aria-label="numbers">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      8
                    </p>
                  </div>
                  <div aria-label="numbers">
                    <p className="text-xs  font-normal text-gray-600 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      9
                    </p>
                  </div>
                  <div aria-lable="numbers">
                    <p className="text-sm font-semibold text-gray-800 cursor-pointer hover:bg-gray-100 rounded-full w-7 h-7 flex justify-center items-center">
                      10
                    </p>
                  </div>
                </div>
                <div className="flex items-center md:gap-7 gap-3">
                  <svg
                    className="cursor-pointer"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.21967 13.0303C5.51256 13.3232 5.98744 13.3232 6.28033 13.0303L10.7803 8.53033C11.0732 8.23744 11.0732 7.76256 10.7803 7.46967L6.28033 2.96967C5.98744 2.67678 5.51256 2.67678 5.21967 2.96967C4.92678 3.26256 4.92678 3.73744 5.21967 4.03033L9.18934 8L5.21967 11.9697C4.92678 12.2626 4.92678 12.7374 5.21967 13.0303Z"
                      fill="#4B5563"
                    />
                  </svg>
                  <p className="text-gray-600 bg-gray-100 md:px-4 px-2 md:py-2 py-1 rounded text-xs cursor-pointer">
                    Last
                  </p>
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
