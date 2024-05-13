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
                  <circle cx={20} cy={20} r={20} fill="#F59E0B" />
                  <rect
                    width={24}
                    height={24}
                    transform="translate(8 8)"
                    fill="#F59E0B"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.5017 12.537C18.4496 11.6411 19.2325 11 20.0009 11C20.7692 11 21.5521 11.6411 21.5 12.537L21.1257 22.6426C21.1212 22.9346 21.0032 23.2137 20.7964 23.4205C20.5854 23.6315 20.2992 23.75 20.0009 23.75C19.7025 23.75 19.4164 23.6315 19.2054 23.4205C18.9986 23.2137 18.8806 22.9346 18.876 22.6426L18.5017 12.537ZM20.0156 12.5111C20.0156 12.5111 20.0155 12.511 20.0154 12.5109C20.0155 12.511 20.0156 12.5111 20.0156 12.5111ZM19.9862 12.5111C19.9862 12.5111 19.9862 12.511 19.9864 12.5109C19.9862 12.511 19.9862 12.5111 19.9862 12.5111ZM18.5009 27.5C18.5009 26.6716 19.1724 26 20.0009 26C20.8293 26 21.5009 26.6716 21.5009 27.5C21.5009 28.3284 20.8293 29 20.0009 29C19.1724 29 18.5009 28.3284 18.5009 27.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-1 text-base font-semibold leading-normal text-yellow-700">
                  Update Problem
                </p>
                <p className="text-xs text-gray-600">
                  A problem occurred while processing the request
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
