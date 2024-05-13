import React, { useState } from "react";

function index() {
  const [flag_alert_10, setFlag_alert_10] = useState(true);

  return (
    <>
      <div>
        <div className="bg-gray-200">
          <div className="px-4 py-12">
            <div
              role="alert"
              id="alert"
              className={
                flag_alert_10
                  ? "transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-show_alert_10"
                  : " transition duration-150 ease-in-out lg:max-w-[260px] max-w-[246px] w-full mx-auto bg-white py-8 px-4 relative rounded-md translate-hide_alert_10"
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
                      d="M42.1004 37.4137L26.1226 7.74187C24.9901 5.63812 21.9732 5.63812 20.8398 7.74187L4.86292 37.4137C4.61703 37.8705 4.49375 38.3831 4.50512 38.9017C4.51648 39.4203 4.66211 39.927 4.92778 40.3725C5.19345 40.818 5.57009 41.187 6.02093 41.4435C6.47177 41.7 6.98142 41.8352 7.50011 41.8359H39.4585C39.9776 41.836 40.4879 41.7014 40.9394 41.4452C41.3908 41.1891 41.7681 40.8201 42.0344 40.3745C42.3006 39.9289 42.4466 39.4218 42.4582 38.9029C42.4698 38.3839 42.3465 37.8708 42.1004 37.4137ZM23.4817 37.2422C23.1108 37.2422 22.7483 37.1322 22.44 36.9262C22.1316 36.7202 21.8913 36.4273 21.7494 36.0847C21.6075 35.7421 21.5704 35.3651 21.6427 35.0014C21.715 34.6377 21.8936 34.3036 22.1558 34.0414C22.4181 33.7791 22.7522 33.6006 23.1159 33.5282C23.4796 33.4559 23.8566 33.493 24.1992 33.6349C24.5418 33.7768 24.8347 34.0171 25.0407 34.3255C25.2467 34.6338 25.3567 34.9963 25.3567 35.3672C25.3567 35.6134 25.3082 35.8572 25.2139 36.0847C25.1197 36.3122 24.9816 36.5189 24.8075 36.693C24.6334 36.8671 24.4267 37.0052 24.1992 37.0995C23.9717 37.1937 23.7279 37.2422 23.4817 37.2422ZM25.5179 18.3844L24.9798 29.8219C24.9798 30.2197 24.8218 30.6012 24.5405 30.8825C24.2592 31.1638 23.8776 31.3219 23.4798 31.3219C23.082 31.3219 22.7004 31.1638 22.4191 30.8825C22.1378 30.6012 21.9798 30.2197 21.9798 29.8219L21.4417 18.3891C21.4296 18.1159 21.4726 17.843 21.5682 17.5868C21.6638 17.3306 21.81 17.0963 21.9981 16.8978C22.1862 16.6993 22.4123 16.5407 22.663 16.4314C22.9137 16.3222 23.1838 16.2645 23.4573 16.2619H23.477C23.7523 16.2617 24.0248 16.3174 24.278 16.4254C24.5312 16.5335 24.7599 16.6917 24.9503 16.8906C25.1407 17.0895 25.2888 17.3249 25.3857 17.5826C25.4826 17.8403 25.5263 18.115 25.5142 18.39L25.5179 18.3844Z"
                      fill="#F59E0B"
                    />
                  </svg>
                  <p className="mt-4 mb-3 text-base font-semibold leading-normal text-center text-gray-800">
                    Warning Message
                  </p>
                  <p className="text-xs leading-[18px] text-center text-gray-600">
                    The content of this message will go <br /> here! you can add
                    as much as you want to add.
                  </p>
                  <div className="flex items-center justify-center mt-4 gap-x-3">
                    <p className="text-xs font-medium leading-3 text-center text-yellow-600 cursor-pointer hover:underline">
                      View Details
                    </p>
                    <p
                      onClick={() => setFlag_alert_10(false)}
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
     .translate-show_alert_10{
      transform : translateY(0%);
  }
  .translate-hide_alert_10{
      transform : translateY(-50vh);
  }`}
        </style>
      </div>
    </>
  );
}

export default index;
