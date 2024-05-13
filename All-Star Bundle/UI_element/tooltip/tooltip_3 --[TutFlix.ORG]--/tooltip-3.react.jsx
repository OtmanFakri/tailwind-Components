import React, { useState } from "react";

function index() {
  const [tooltip, setTooltip] = useState(false);

  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className="flex md:flex-row flex-col gap-y-4 justify-center gap-x-4 lg:max-w-[548px] md:max-w-[516px] max-w-[375px] w-full mx-auto relative">
            <div className="absolute lg:left-0 md:-left-5 md:top-0 -top-9 z-10">
              <button>
                <svg
                  onClick={() => setTooltip(!tooltip)}
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.25 11.625C2.25 6.44782 6.44782 2.25 11.625 2.25C16.8022 2.25 21 6.44782 21 11.625C21 16.8022 16.8022 21 11.625 21C6.44782 21 2.25 16.8022 2.25 11.625ZM11.625 3.75C7.27624 3.75 3.75 7.27624 3.75 11.625C3.75 15.9738 7.27624 19.5 11.625 19.5C15.9738 19.5 19.5 15.9738 19.5 11.625C19.5 7.27624 15.9738 3.75 11.625 3.75ZM9.5625 10.3125C9.5625 9.89829 9.89829 9.5625 10.3125 9.5625H11.8125C12.2267 9.5625 12.5625 9.89829 12.5625 10.3125V15.1875H13.875C14.2892 15.1875 14.625 15.5233 14.625 15.9375C14.625 16.3517 14.2892 16.6875 13.875 16.6875H9.75C9.33579 16.6875 9 16.3517 9 15.9375C9 15.5233 9.33579 15.1875 9.75 15.1875H11.0625V11.0625H10.3125C9.89829 11.0625 9.5625 10.7267 9.5625 10.3125Z"
                    fill="#1F2937"
                  />
                  <path
                    d="M11.625 6.09375C11.384 6.09375 11.1483 6.16523 10.9479 6.29915C10.7475 6.43306 10.5913 6.62341 10.499 6.8461C10.4068 7.0688 10.3826 7.31385 10.4297 7.55027C10.4767 7.78668 10.5928 8.00384 10.7632 8.17429C10.9337 8.34473 11.1508 8.46081 11.3872 8.50783C11.6236 8.55486 11.8687 8.53072 12.0914 8.43848C12.3141 8.34623 12.5044 8.19002 12.6384 7.9896C12.7723 7.78918 12.8438 7.55355 12.8438 7.3125C12.8438 6.98927 12.7153 6.67927 12.4868 6.45071C12.2582 6.22215 11.9482 6.09375 11.625 6.09375Z"
                    fill="#1F2937"
                  />
                </svg>
              </button>
            </div>
            {tooltip === true && (
              <div className="bg-white md:px-8 px-4 py-4 relative">
                <div>
                  <svg
                    className="cursor-pointer absolute right-6 top-3 z-10"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.85355 4.14645C4.65829 3.95118 4.34171 3.95118 4.14645 4.14645C3.95118 4.34171 3.95118 4.65829 4.14645 4.85355L7.29289 8L4.14645 11.1464C3.95118 11.3417 3.95118 11.6583 4.14645 11.8536C4.34171 12.0488 4.65829 12.0488 4.85355 11.8536L8 8.70711L11.1464 11.8536C11.3417 12.0488 11.6583 12.0488 11.8536 11.8536C12.0488 11.6583 12.0488 11.3417 11.8536 11.1464L8.70711 8L11.8536 4.85355C12.0488 4.65829 12.0488 4.34171 11.8536 4.14645C11.6583 3.95118 11.3417 3.95118 11.1464 4.14645L8 7.29289L4.85355 4.14645Z"
                      fill="#1F2937"
                    />
                  </svg>
                  <div className="md:mt-10 mt-8">
                    <p className="text-xl font-medium text-gray-800">
                      More awesome content here
                    </p>
                    <p className="text-sm text-gray-600 mt-8">
                      Browse interesting articles and inspirational designs on
                      in this feed.
                    </p>
                  </div>
                  <div aria-lable="text button">
                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-indigo-700"
                        />
                        <p className="text-xs text-gray-600">
                          Don’t show details
                        </p>
                      </div>
                      <div>
                        <button className="text-sm font-medium text-gray-800 border border-indigo-700 rounded px-5 py-2 hover:bg-indigo-50 transition duration-300 ease-in-out">
                          Got it
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
