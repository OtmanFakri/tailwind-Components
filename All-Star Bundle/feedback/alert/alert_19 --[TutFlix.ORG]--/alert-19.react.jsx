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
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 0.5C9.24781 0.5 0.5 9.24781 0.5 20C0.5 30.7522 9.24781 39.5 20 39.5C30.7522 39.5 39.5 30.7522 39.5 20C39.5 9.24781 30.7522 0.5 20 0.5ZM27.0603 24.9397C27.2055 25.0776 27.3215 25.2432 27.4017 25.4266C27.4819 25.6101 27.5245 25.8078 27.527 26.008C27.5296 26.2081 27.4921 26.4068 27.4166 26.5923C27.3412 26.7778 27.2294 26.9462 27.0878 27.0878C26.9462 27.2294 26.7778 27.3412 26.5923 27.4166C26.4068 27.4921 26.2081 27.5296 26.008 27.527C25.8078 27.5245 25.6101 27.4819 25.4266 27.4017C25.2432 27.3215 25.0776 27.2055 24.9397 27.0603L20 22.1216L15.0603 27.0603C14.7767 27.3297 14.3991 27.4777 14.008 27.4727C13.6168 27.4677 13.2431 27.3101 12.9665 27.0335C12.6899 26.7569 12.5323 26.3832 12.5273 25.992C12.5223 25.6009 12.6703 25.2233 12.9397 24.9397L17.8784 20L12.9397 15.0603C12.6703 14.7767 12.5223 14.3991 12.5273 14.008C12.5323 13.6168 12.6899 13.2431 12.9665 12.9665C13.2431 12.6899 13.6168 12.5323 14.008 12.5273C14.3991 12.5223 14.7767 12.6703 15.0603 12.9397L20 17.8784L24.9397 12.9397C25.2233 12.6703 25.6009 12.5223 25.992 12.5273C26.3832 12.5323 26.7569 12.6899 27.0335 12.9665C27.3101 13.2431 27.4677 13.6168 27.4727 14.008C27.4777 14.3991 27.3297 14.7767 27.0603 15.0603L22.1216 20L27.0603 24.9397Z"
                fill="#EF4444"
              />
            </svg>
            <p className="px-3 text-xs text-center text-gray-600 lg:px-8 md:px-6">
              Sorry, your billing address couldn’t be verified. Please check
              your billing address details and try again.{" "}
            </p>
            <hr className="my-8 border-gray-100" />
            <div className="flex items-center justify-center gap-x-4">
              <button className="px-4 py-3 text-sm font-medium leading-none text-[#B91C1C] duration-300 ease-in-out transform bg-white border border-[#EF4444] rounded hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-3 text-sm font-medium leading-none text-white duration-300 ease-in-out transform bg-[#EF4444] border rounded hover:bg-[#e55952]">
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
