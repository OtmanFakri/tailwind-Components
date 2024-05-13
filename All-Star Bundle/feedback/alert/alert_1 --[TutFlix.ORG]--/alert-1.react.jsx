import React from "react";

function index() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div className="lg:max-w-[548px] md:max-w-[516px] max-w-[319px] w-full mx-auto bg-white py-6 px-6 relative rounded">
            <svg
              className="absolute right-4 my-auto lg:inset-y-0 md:inset-y-0 top-2 cursor-pointer md:max-w-[24px] max-w-[15px] max-w-[15px]"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                fill="#1F2937"
              />
            </svg>
            <div className="flex items-center justiffy-start gap-x-8">
              <div>
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={20} cy={20} r={20} fill="#10B981" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.25 20C10.25 14.617 14.617 10.25 20 10.25C25.383 10.25 29.75 14.617 29.75 20C29.75 25.383 25.383 29.75 20 29.75C14.617 29.75 10.25 25.383 10.25 20ZM20 11.75C15.4455 11.75 11.75 15.4455 11.75 20C11.75 24.5545 15.4455 28.25 20 28.25C24.5545 28.25 28.25 24.5545 28.25 20C28.25 15.4455 24.5545 11.75 20 11.75Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24.9824 15.6757C25.2996 15.9421 25.3407 16.4152 25.0743 16.7324L18.7743 24.2324C18.6347 24.3986 18.4299 24.4962 18.2128 24.4999C17.9958 24.5036 17.7877 24.4131 17.6425 24.2517L14.9425 21.2517C14.6654 20.9438 14.6904 20.4696 14.9983 20.1925C15.3062 19.9154 15.7804 19.9404 16.0575 20.2483L18.1805 22.6072L23.9257 15.7676C24.1921 15.4504 24.6652 15.4093 24.9824 15.6757Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-base font-semibold leading-normal text-green-700">
                  Successful Update
                </p>
                <p className="text-xs text-gray-600">
                  You have successfully installed the latest update
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
