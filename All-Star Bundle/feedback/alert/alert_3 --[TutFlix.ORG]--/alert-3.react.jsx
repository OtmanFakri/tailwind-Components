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
                  <circle cx={20} cy={20} r={20} fill="#EF4444" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.25 20C10.25 14.617 14.617 10.25 20 10.25C25.383 10.25 29.75 14.617 29.75 20C29.75 25.383 25.383 29.75 20 29.75C14.617 29.75 10.25 25.383 10.25 20ZM20 11.75C15.4455 11.75 11.75 15.4455 11.75 20C11.75 24.5545 15.4455 28.25 20 28.25C24.5545 28.25 28.25 24.5545 28.25 20C28.25 15.4455 24.5545 11.75 20 11.75ZM16.4697 16.4697C16.7626 16.1768 17.2374 16.1768 17.5303 16.4697L20 18.9393L22.4697 16.4697C22.7626 16.1768 23.2374 16.1768 23.5303 16.4697C23.8232 16.7626 23.8232 17.2374 23.5303 17.5303L21.0607 20L23.5303 22.4697C23.8232 22.7626 23.8232 23.2374 23.5303 23.5303C23.2374 23.8232 22.7626 23.8232 22.4697 23.5303L20 21.0607L17.5303 23.5303C17.2374 23.8232 16.7626 23.8232 16.4697 23.5303C16.1768 23.2374 16.1768 22.7626 16.4697 22.4697L18.9393 20L16.4697 17.5303C16.1768 17.2374 16.1768 16.7626 16.4697 16.4697Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-base font-semibold leading-normal text-red-700">
                  Error
                </p>
                <p className="text-xs text-gray-600">
                  The credit card is not authorized for Internet transactions
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
