import React from "react";

function index() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div className="lg:max-w-[548px] md:max-w-[516px] max-w-[319px] py-10 mx-auto bg-white rounded">
            <hr className="mb-8 border-gray-100" />
            <svg
              className="mx-auto mb-4"
              width={39}
              height={36}
              viewBox="0 0 39 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.0999 31.4137L22.1221 1.74187C20.9896 -0.361875 17.9727 -0.361875 16.8393 1.74187L0.862434 31.4137C0.61654 31.8705 0.49326 32.3831 0.504627 32.9017C0.515994 33.4203 0.661621 33.927 0.927292 34.3725C1.19296 34.818 1.5696 35.187 2.02044 35.4435C2.47129 35.7 2.98093 35.8352 3.49962 35.8359H35.4581C35.9772 35.836 36.4874 35.7014 36.9389 35.4452C37.3904 35.1891 37.7676 34.8201 38.0339 34.3745C38.3001 33.9289 38.4461 33.4218 38.4577 32.9029C38.4693 32.3839 38.346 31.8708 38.0999 31.4137V31.4137ZM19.4812 31.2422C19.1103 31.2422 18.7478 31.1322 18.4395 30.9262C18.1311 30.7202 17.8908 30.4273 17.7489 30.0847C17.607 29.7421 17.5699 29.3651 17.6422 29.0014C17.7146 28.6377 17.8931 28.3036 18.1554 28.0414C18.4176 27.7791 18.7517 27.6006 19.1154 27.5282C19.4791 27.4559 19.8561 27.493 20.1987 27.6349C20.5413 27.7768 20.8342 28.0171 21.0402 28.3255C21.2462 28.6338 21.3562 28.9963 21.3562 29.3672C21.3562 29.6134 21.3077 29.8572 21.2135 30.0847C21.1192 30.3122 20.9811 30.5189 20.807 30.693C20.6329 30.8671 20.4262 31.0052 20.1987 31.0995C19.9712 31.1937 19.7274 31.2422 19.4812 31.2422ZM21.5174 12.3844L20.9793 23.8219C20.9793 24.2197 20.8213 24.6012 20.54 24.8825C20.2587 25.1638 19.8771 25.3219 19.4793 25.3219C19.0815 25.3219 18.7 25.1638 18.4186 24.8825C18.1373 24.6012 17.9793 24.2197 17.9793 23.8219L17.4412 12.3891C17.4291 12.1159 17.4721 11.843 17.5677 11.5868C17.6633 11.3306 17.8095 11.0963 17.9976 10.8978C18.1857 10.6993 18.4118 10.5407 18.6625 10.4314C18.9132 10.3222 19.1834 10.2645 19.4568 10.2619H19.4765C19.7518 10.2617 20.0243 10.3174 20.2775 10.4254C20.5307 10.5335 20.7594 10.6917 20.9498 10.8906C21.1402 11.0895 21.2883 11.3249 21.3852 11.5826C21.4821 11.8403 21.5258 12.115 21.5137 12.39L21.5174 12.3844Z"
                fill="#F59E0B"
              />
            </svg>
            <p className="px-3 text-xs text-center text-gray-600 lg:px-8 md:px-6">
              Hi, Labuschagne! We are having trouble with your current billing
              informations. Please update your payment details.
            </p>
            <hr className="my-8 border-gray-100" />
            <div className="flex items-center justify-center gap-x-4">
              <button className="px-4 py-3 text-sm font-medium leading-none text-[#A16207] duration-300 ease-in-out transform bg-white border border-[#F59E0B] rounded hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-3 text-sm font-medium leading-none text-white duration-300 ease-in-out transform bg-[#F59E0B] border rounded hover:bg-[#fcae45]">
                Update now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
