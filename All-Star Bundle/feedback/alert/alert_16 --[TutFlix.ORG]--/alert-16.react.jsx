import React from "react";

function index() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div className="lg:max-w-[548px] md:max-w-[516px] max-w-[319px] py-10 mx-auto bg-white rounded">
            <hr className="mb-8 border-gray-100" />
            <svg
              className="mx-auto mb-5"
              width={38}
              height={38}
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0.25C8.66125 0.25 0.25 8.66125 0.25 19C0.25 29.3387 8.66125 37.75 19 37.75C29.3387 37.75 37.75 29.3387 37.75 19C37.75 8.66125 29.3387 0.25 19 0.25ZM19 7.9375C19.4821 7.9375 19.9534 8.08046 20.3542 8.34829C20.755 8.61613 21.0675 8.99681 21.252 9.44221C21.4364 9.8876 21.4847 10.3777 21.3907 10.8505C21.2966 11.3234 21.0645 11.7577 20.7236 12.0986C20.3827 12.4395 19.9484 12.6716 19.4755 12.7657C19.0027 12.8597 18.5126 12.8114 18.0672 12.627C17.6218 12.4425 17.2411 12.13 16.9733 11.7292C16.7055 11.3284 16.5625 10.8571 16.5625 10.375C16.5625 9.72853 16.8193 9.10855 17.2764 8.65143C17.7335 8.19431 18.3535 7.9375 19 7.9375V7.9375ZM23.5 29.125H15.25C14.8522 29.125 14.4706 28.967 14.1893 28.6857C13.908 28.4044 13.75 28.0228 13.75 27.625C13.75 27.2272 13.908 26.8456 14.1893 26.5643C14.4706 26.283 14.8522 26.125 15.25 26.125H17.875V17.875H16.375C15.9772 17.875 15.5956 17.717 15.3143 17.4357C15.033 17.1544 14.875 16.7728 14.875 16.375C14.875 15.9772 15.033 15.5956 15.3143 15.3143C15.5956 15.033 15.9772 14.875 16.375 14.875H19.375C19.7728 14.875 20.1544 15.033 20.4357 15.3143C20.717 15.5956 20.875 15.9772 20.875 16.375V26.125H23.5C23.8978 26.125 24.2794 26.283 24.5607 26.5643C24.842 26.8456 25 27.2272 25 27.625C25 28.0228 24.842 28.4044 24.5607 28.6857C24.2794 28.967 23.8978 29.125 23.5 29.125Z"
                fill="#3B82F6"
              />
            </svg>
            <p className="px-3 text-xs text-center text-gray-600 lg:px-8 md:px-6">
              Hi, Labuschagne! This is a confirmation message that your username
              and password has been updated successfully.
            </p>
            <hr className="my-8 border-gray-100" />
            <div className="flex items-center justify-center gap-x-4">
              <button className="px-4 py-3 text-sm font-medium leading-none text-blue-700 duration-300 ease-in-out transform bg-white border border-blue-500 rounded hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-3 text-sm font-medium leading-none text-white duration-300 ease-in-out transform bg-blue-500 border rounded hover:bg-blue-400">
                View details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
