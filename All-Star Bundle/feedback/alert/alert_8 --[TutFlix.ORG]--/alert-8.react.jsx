import React, { useState } from "react";

function index() {
  const [flag_alert_8, setFlag_alert_8] = useState(true);

  return (
    <>
      <div>
        <div className="bg-gray-200">
          <div className="px-4 py-12">
            <div
              role="alert"
              id="alert"
              className={
                flag_alert_8
                  ? "transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-show_alert_8"
                  : " transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-hide_alert_8"
              }
            >
              <svg
                className="absolute right-4 top-4"
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
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 0.5C9.24781 0.5 0.5 9.24781 0.5 20C0.5 30.7522 9.24781 39.5 20 39.5C30.7522 39.5 39.5 30.7522 39.5 20C39.5 9.24781 30.7522 0.5 20 0.5ZM30.1484 13.4647L17.5484 28.4647C17.4102 28.6293 17.2382 28.7623 17.0441 28.8547C16.85 28.947 16.6384 28.9966 16.4234 29H16.3981C16.1879 28.9999 15.98 28.9557 15.788 28.8701C15.5959 28.7845 15.424 28.6594 15.2834 28.5031L9.88344 22.5031C9.7463 22.3577 9.63962 22.1863 9.56966 21.999C9.49971 21.8117 9.4679 21.6123 9.4761 21.4126C9.4843 21.2129 9.53234 21.0168 9.61741 20.8359C9.70247 20.6549 9.82284 20.4929 9.97144 20.3591C10.12 20.2254 10.2939 20.1227 10.4827 20.0571C10.6716 19.9916 10.8716 19.9644 11.0711 19.9772C11.2706 19.99 11.4655 20.0426 11.6444 20.1319C11.8233 20.2211 11.9826 20.3452 12.1128 20.4969L16.3588 25.2144L27.8516 11.5353C28.1094 11.2373 28.4741 11.0526 28.8669 11.0213C29.2597 10.99 29.6491 11.1146 29.9509 11.368C30.2526 11.6215 30.4425 11.9835 30.4795 12.3759C30.5164 12.7682 30.3975 13.1593 30.1484 13.4647Z"
                    fill="#10B981"
                  />
                </svg>
                <p className="mt-4 mb-3 text-base font-semibold leading-normal text-center text-gray-800">
                  Success Message
                </p>
                <p className="text-xs leading-[18px] text-center text-gray-600">
                  The content of this message will go <br /> here! you can add
                  as much as you want to add.
                </p>
                <div className="flex items-center justify-center mt-4 gap-x-3">
                  <p className="text-xs font-medium leading-3 text-center text-[#10B981] cursor-pointer hover:underline">
                    View Details
                  </p>
                  <p
                    onClick={() => setFlag_alert_8(false)}
                    className="text-xs font-medium leading-3 text-center text-gray-600 cursor-pointer"
                  >
                    Dismiss
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
      .translate-show_alert_8{
                    transform : translateY(0%);
                }
                .translate-hide_alert_8{
                    transform : translateY(-50vh);
                }`}
        </style>
      </div>
    </>
  );
}

export default index;
