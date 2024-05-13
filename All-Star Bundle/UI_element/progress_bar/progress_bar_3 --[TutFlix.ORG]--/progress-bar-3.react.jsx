import React from "react";

function index() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div className="lg:max-w-[804px] md:max-w-[696px] max-w-[343px] w-full mx-auto bg-white">
            <div className="flex justify-start h-1 gap-x-1 bg-blue-50 ">
              <div className="w-12 h-1 bg-indigo-700 md:w-20" />
              <div className="w-12 h-1 bg-indigo-700 md:w-20" />
              <div className="w-12 h-1 bg-indigo-700 md:w-20" />
              <div className="w-12 h-1 bg-indigo-700 md:w-20" />
              <div className="w-12 h-1 bg-indigo-700 md:w-20" />
              <div className="w-12 h-1 bg-indigo-700 md:w-20" />
            </div>
            <div className="flex items-center justify-between px-4 py-6 gap-x-4">
              <p className="text-sm font-medium leading-none text-gray-800 md:text-base">
                Build your organization
              </p>
              <p className="text-xs font-medium leading-none text-gray-600 md:text-sm">
                3 steps to complete
              </p>
            </div>
            <div className="flex flex-col items-center justify-between px-4 py-4 bg-gray-100 md:flex-row gap-y-4">
              <div className="flex gap-x-4">
                <div className="p-3 h-[48px] bg-white rounded">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.1716 1.82942C22.0182 1.67608 21.8238 1.57034 21.6118 1.52493C21.3997 1.47953 21.179 1.49638 20.9763 1.57348L2.2249 8.67082H2.22115C2.00494 8.75398 1.81968 8.90185 1.69066 9.09424C1.56163 9.28662 1.49515 9.51415 1.50028 9.74574C1.5054 9.97733 1.5819 10.2017 1.71931 10.3882C1.85672 10.5747 2.04835 10.7142 2.26802 10.7877L2.28724 10.7938L8.72318 13.5421C8.84871 13.5802 8.98204 13.5847 9.10986 13.5552C9.23768 13.5256 9.35552 13.4631 9.45162 13.3738L19.781 3.74895C19.8118 3.71817 19.8483 3.69375 19.8885 3.6771C19.9287 3.66044 19.9718 3.65187 20.0154 3.65187C20.0589 3.65187 20.102 3.66044 20.1422 3.6771C20.1824 3.69375 20.219 3.71817 20.2497 3.74895C20.2805 3.77973 20.3049 3.81626 20.3216 3.85648C20.3382 3.89669 20.3468 3.93979 20.3468 3.98332C20.3468 4.02685 20.3382 4.06995 20.3216 4.11016C20.3049 4.15038 20.2805 4.18692 20.2497 4.2177L10.6244 14.5424C10.5351 14.6385 10.4726 14.7563 10.4431 14.8841C10.4135 15.012 10.418 15.1453 10.4561 15.2708L13.2054 21.7105C13.2082 21.7199 13.211 21.7283 13.2143 21.7372C13.3643 22.1718 13.744 22.4783 14.2029 22.4989C14.223 22.4989 14.2301 22.4989 14.2497 22.4989C14.4814 22.5003 14.7081 22.4319 14.9004 22.3026C15.0927 22.1734 15.2416 21.9893 15.3279 21.7743L22.4243 3.02801C22.5025 2.82517 22.5202 2.60402 22.4754 2.39131C22.4305 2.1786 22.325 1.98343 22.1716 1.82942Z"
                      fill="#4338CA"
                    />
                  </svg>
                </div>
                <div aria-label="text">
                  <p className="-mt-1 text-base font-semibold leading-normal text-gray-800 md:mt-0">
                    Create your next campaign
                  </p>
                  <p className="text-xs leading-normal text-gray-600">
                    Complete the actions to unloack new features along the way.
                  </p>
                </div>
              </div>
              <div aria-label="button" className="md:max-w-[196px] w-full">
                <button className="flex justify-center items-center gap-x-2 md:max-w-[196px] w-full text-sm font-medium leading-none text-white px-6 py-3.5 bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out">
                  New Components
                  <svg
                    className
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1.875C5.51992 1.875 1.875 5.51992 1.875 10C1.875 14.4801 5.51992 18.125 10 18.125C14.4801 18.125 18.125 14.4801 18.125 10C18.125 5.51992 14.4801 1.875 10 1.875ZM13.125 10.625H10.625V13.125C10.625 13.2908 10.5592 13.4497 10.4419 13.5669C10.3247 13.6842 10.1658 13.75 10 13.75C9.83424 13.75 9.67527 13.6842 9.55806 13.5669C9.44085 13.4497 9.375 13.2908 9.375 13.125V10.625H6.875C6.70924 10.625 6.55027 10.5592 6.43306 10.4419C6.31585 10.3247 6.25 10.1658 6.25 10C6.25 9.83424 6.31585 9.67527 6.43306 9.55806C6.55027 9.44085 6.70924 9.375 6.875 9.375H9.375V6.875C9.375 6.70924 9.44085 6.55027 9.55806 6.43306C9.67527 6.31585 9.83424 6.25 10 6.25C10.1658 6.25 10.3247 6.31585 10.4419 6.43306C10.5592 6.55027 10.625 6.70924 10.625 6.875V9.375H13.125C13.2908 9.375 13.4497 9.44085 13.5669 9.55806C13.6842 9.67527 13.75 9.83424 13.75 10C13.75 10.1658 13.6842 10.3247 13.5669 10.4419C13.4497 10.5592 13.2908 10.625 13.125 10.625Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
