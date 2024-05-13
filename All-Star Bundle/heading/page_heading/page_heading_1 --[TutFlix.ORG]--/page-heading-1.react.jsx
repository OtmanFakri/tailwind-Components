import React from "react";

function index() {
  return (
    <>
      <div className="px-4 py-12">
        <div className=" py-7 bg-gray-50 lg:max-w-[1124px] w-full md:max-w-[696px]  max-w-[343px] mx-auto">
          <div className="flex flex-col items-start justify-between px-4 lg:items-center lg:px-6 md:px-4 lg:flex-row md:flex-row md:items-center">
            <div className="flex flex-col">
              <p className="text-2xl font-semibold leading-normal text-gray-800">
                Dashboard
              </p>
              <div className="flex mt-3 gap-x-2">
                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                  Portal
                </p>
                <svg
                  className="cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.10332 3.06284L8.04082 7.00034L4.10332 10.9378L5.03139 11.8659L9.89697 7.00034L5.03139 2.13477L4.10332 3.06284Z"
                    fill="#4338CA"
                  />
                </svg>
                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                  Dashboard
                </p>
                <svg
                  className="cursor-pointer"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.10332 3.06284L8.04082 7.00034L4.10332 10.9378L5.03139 11.8659L9.89697 7.00034L5.03139 2.13477L4.10332 3.06284Z"
                    fill="#4338CA"
                  />
                </svg>
                <p className="text-xs leading-3 text-indigo-700 cursor-pointer">
                  KPIs
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start w-full lg:justify-end md:justify-end gap-x-4 lg:mt-0 md:mt-0 mt-7">
              <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border max-w-[81px]  w-full ">
                Back
              </button>
              <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white max-w-[121px] w-full ">
                Edit Profile
              </button>
            </div>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="flex flex-col px-4 lg:px-6 md:px-4 gap-x-5 lg:flex-row md:flex-row gap-y-4">
            <div className="flex ml-[4px] gap-x-2">
              <svg
                className="ml-[2px]"
                width={8}
                height={14}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.59653 4.74972V9.80695C2.60237 10.1768 2.75338 10.5294 3.01696 10.7889C3.28054 11.0483 3.63557 11.1938 4.00542 11.1938C4.37527 11.1938 4.73029 11.0483 4.99388 10.7889C5.25746 10.5294 5.40846 10.1768 5.41431 9.80695L5.41888 3.17824C5.42271 2.86216 5.36377 2.54846 5.24546 2.25533C5.12716 1.9622 4.95184 1.69547 4.72969 1.4706C4.50753 1.24573 4.24294 1.06719 3.95127 0.94534C3.6596 0.823487 3.34664 0.760742 3.03054 0.760742C2.71443 0.760742 2.40148 0.823487 2.1098 0.94534C1.81813 1.06719 1.55355 1.24573 1.33139 1.4706C1.10923 1.69547 0.933916 1.9622 0.815611 2.25533C0.697306 2.54846 0.638362 2.86216 0.642197 3.17824V9.85159C0.635757 10.2966 0.717841 10.7384 0.883678 11.1514C1.04951 11.5644 1.29579 11.9403 1.6082 12.2572C1.9206 12.5742 2.2929 12.8259 2.70344 12.9977C3.11398 13.1695 3.55458 13.258 3.99962 13.258C4.44466 13.258 4.88525 13.1695 5.2958 12.9977C5.70634 12.8259 6.07863 12.5742 6.39104 12.2572C6.70344 11.9403 6.94972 11.5644 7.11556 11.1514C7.2814 10.7384 7.36348 10.2966 7.35704 9.85159V3.61558"
                  stroke="#4B5563"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-sm leading-none text-gray-600 mt-[1px]">
                Remote
              </p>
            </div>
            <div className="flex gap-x-1">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.375 5.0625H16.3125V9"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.6875 12.9375L5.95441 8.67059C6.05888 8.56609 6.18291 8.4832 6.31942 8.42665C6.45593 8.3701 6.60224 8.34099 6.75 8.34099C6.89776 8.34099 7.04407 8.3701 7.18058 8.42665C7.31709 8.4832 7.44112 8.56609 7.54559 8.67059L9.32941 10.4544C9.43388 10.5589 9.55791 10.6418 9.69442 10.6984C9.83093 10.7549 9.97724 10.784 10.125 10.784C10.2728 10.784 10.4191 10.7549 10.5556 10.6984C10.6921 10.6418 10.8161 10.5589 10.9206 10.4544L15.75 5.625"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm leading-none text-gray-600 mt-[1px]">
                Trending
              </p>
            </div>
            <div className="flex gap-x-[5px] lg:mt-0 md:mt-0 -mt-[3px]">
              <svg
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 2.25C5.27344 2.25 2.25 5.27344 2.25 9C2.25 12.7266 5.27344 15.75 9 15.75C12.7266 15.75 15.75 12.7266 15.75 9C15.75 5.27344 12.7266 2.25 9 2.25Z"
                  stroke="#4B5563"
                  strokeMiterlimit={10}
                />
                <path
                  d="M9 4.5V9.5625H12.375"
                  stroke="#4B5563"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-sm leading-none text-gray-600 mt-[2px]">
                Member Since 24 January, 2022
              </p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default index;
