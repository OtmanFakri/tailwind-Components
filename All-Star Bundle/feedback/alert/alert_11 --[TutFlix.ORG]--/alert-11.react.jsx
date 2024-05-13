import React, { useState } from "react";

function index() {
  const [flag_alert_11, setFlag_alert_11] = useState(true);

  return (
    <>
      <div>
        <div className="bg-gray-200">
          <div className="px-4 py-12">
            <div
              role="alert"
              id="alert"
              className={
                flag_alert_11
                  ? "transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-show_alert_11"
                  : " transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-hide_alert_11"
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
                      d="M24 4.5C13.2478 4.5 4.5 13.2478 4.5 24C4.5 34.7522 13.2478 43.5 24 43.5C34.7522 43.5 43.5 34.7522 43.5 24C43.5 13.2478 34.7522 4.5 24 4.5ZM32.1216 30L30 32.1216L24 26.1216L18 32.1216L15.8784 30L21.8784 24L15.8784 18L18 15.8784L24 21.8784L30 15.8784L32.1216 18L26.1216 24L32.1216 30Z"
                      fill="#EF4444"
                    />
                  </svg>
                  <p className="mt-4 mb-3 text-base font-semibold leading-normal text-center text-gray-800">
                    Error Message
                  </p>
                  <p className="text-xs leading-[18px] text-center text-gray-600">
                    The content of this message will go <br /> here! you can add
                    as much as you want to add.
                  </p>
                  <div className="flex items-center justify-center mt-4 gap-x-3">
                    <p className="text-xs font-medium leading-3 text-center text-red-500 cursor-pointer hover:underline">
                      View Details
                    </p>
                    <p
                      onClick={() => setFlag_alert_11(false)}
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
      .translate-show_alert_11{
                    transform : translateY(0%);
                }
                .translate-hide_alert_11{
                    transform : translateY(-50vh);
                }`}
        </style>
      </div>
    </>
  );
}

export default index;
