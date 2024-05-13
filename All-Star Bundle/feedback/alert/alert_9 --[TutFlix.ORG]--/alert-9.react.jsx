import React, { useState } from "react";

function index() {
  const [flag_alert_9, setFlag_alert_9] = useState(true);

  return (
    <>
      <div>
        <div className="bg-gray-200">
          <div className="px-4 py-12">
            <div
              role="alert"
              id="alert"
              className={
                flag_alert_9
                  ? "transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-show_alert_9"
                  : " transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-hide_alert_9"
              }
            >
              <div>
                <svg
                  className="absolute cursor-pointer right-4 top-4"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mx-auto">
                  <svg
                    className="mx-auto"
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 4V12"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 36V44"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.85986 9.85938L15.5199 15.5194"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.48 32.4805L38.14 38.1405"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 24H12"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M36 24H44"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.85986 38.1405L15.5199 32.4805"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.48 15.5194L38.14 9.85938"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-4 mb-3 text-base font-semibold leading-normal text-center text-gray-800">
                    Pending Message
                  </p>
                  <p className="text-xs leading-[18px] text-center text-gray-600">
                    The content of this message will go <br /> here! you can add
                    as much as you want to add.
                  </p>
                  <div className="flex items-center justify-center mt-4 gap-x-3">
                    <p className="text-xs font-medium leading-3 text-center text-blue-600 cursor-pointer hover:underline">
                      View Details
                    </p>
                    <p
                      onClick={() => setFlag_alert_9(false)}
                      className="text-xs font-medium leading-3 text-center text-gray-600 cursor-pointer"
                    >
                      Dismiss
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
     .translate-show_alert_9{
      transform : translateY(0%);
  }
  .translate-hide_alert_9{
      transform : translateY(-50vh);
  }`
  }
        </style>
      </div>
    </>
  );
}

export default index;
