import React from "react";

function index() {
  return (
    <>
      <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full py-10 lg:px-10 md:px-6 px-4 bg-white mx-auto">
          <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-x-7 gap-y-7">
            <div className="py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  News
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/luke2222.png"
                    alt="luke"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Luke Sipes
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      18 September 2023, Tueday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Entertainment
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/shane33333.png"
                    alt="shane"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Shane Hickle
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      28 August 2022, Wednesday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group lg:block md:hidden block hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Sports
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ank33333.png"
                    alt="antonio"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Antonio Ebert
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      16 July 2022, Monday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-x-7 mt-7 gap-y-7">
            <div className="py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Fashion
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/kath87.png"
                    alt="Kathleen"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Kathleen Kuphals
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      2 October 2021, Saturday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Bussiness
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/neti9090.png"
                    alt="Nettie"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Nettie Kihn
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      14 January 2022, Friday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group lg:block md:hidden block hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  News
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/miss7654.png"
                    alt="miss"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Miss Marcia McGlynn
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      31 November 2022, Thursday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-x-7 mt-7  ">
            <div className=" lg:hidden md:block hidden py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Fashion
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/kath87.png"
                    alt="Kathleen"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Kathleen Kuphals
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      2 October 2021, Saturday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className=" lg:hidden md:block hidden py-5 px-4 max-w-[356px] w-full bg-gray-50 rounded  hover:bg-indigo-50  hover:rounded  group hover:cursor-pointer">
              <div className="flex gap-x-3 mb-4">
                <svg
                  className="text-[#4B5563] group-hover:text-indigo-700"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="Currentcolor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6.00098" cy={6} r={6} fill="Currentcolor" />
                </svg>
                <p className="text-xs font-medium leading-3 text-gray-600">
                  Bussiness
                </p>
              </div>
              <p className="text-base font-semibold leading-none text-gray-800 mb-3">
                Fun Fact
              </p>
              <p className=" text-sm leading-tight text-gray-600">
                What’s inside a Kit Kat? Broken Kit Kats that are damaged during
                production—they get ground up and go between the wafers inside,
                along with cocoa and sugar. That’s a way to not let anything go
                to waste!
              </p>
              <hr className="my-5  border-gray-300" />
              <div className="flex justify-between gap-x-4">
                <div className="flex gap-x-4">
                  <img
                    className="object-contain"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/neti9090.png"
                    alt="Nettie"
                  />
                  <div>
                    <p className="text-base font-medium leading-none text-gray-800 mb-2">
                      Nettie Kihn
                    </p>
                    <p className="text-xs leading-3 text-gray-600">
                      14 January 2022, Friday
                    </p>
                  </div>
                </div>
                <div>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5 5.75C3.90326 5.75 3.33097 5.98705 2.90901 6.40901C2.48705 6.83097 2.25 7.40326 2.25 8C2.25 8.59674 2.48705 9.16903 2.90901 9.59099C3.33097 10.0129 3.90326 10.25 4.5 10.25H6.27062C6.68484 10.25 7.02062 10.5858 7.02062 11C7.02062 11.4142 6.68484 11.75 6.27062 11.75H4.5C3.50544 11.75 2.55161 11.3549 1.84835 10.6517C1.14509 9.94839 0.75 8.99456 0.75 8C0.75 7.00544 1.14509 6.05161 1.84835 5.34835C2.55161 4.64509 3.50544 4.25 4.5 4.25H6.23156C6.64578 4.25 6.98156 4.58579 6.98156 5C6.98156 5.41421 6.64578 5.75 6.23156 5.75H4.5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.01855 5C9.01855 4.58579 9.35434 4.25 9.76855 4.25H11.5001C12.4947 4.25 13.4485 4.64509 14.1518 5.34835C14.855 6.05161 15.2501 7.00544 15.2501 8C15.2501 8.99456 14.855 9.94839 14.1518 10.6517C13.4485 11.3549 12.4947 11.75 11.5001 11.75H9.72949C9.31528 11.75 8.97949 11.4142 8.97949 11C8.97949 10.5858 9.31528 10.25 9.72949 10.25H11.5001C12.0969 10.25 12.6692 10.0129 13.0911 9.59099C13.5131 9.16903 13.7501 8.59674 13.7501 8C13.7501 7.40326 13.5131 6.83097 13.0911 6.40901C12.6692 5.98705 12.0969 5.75 11.5001 5.75H9.76855C9.35434 5.75 9.01855 5.41421 9.01855 5Z"
                      fill="#4B5563"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5332 8C4.5332 7.58579 4.86899 7.25 5.2832 7.25H10.7788C11.193 7.25 11.5288 7.58579 11.5288 8C11.5288 8.41421 11.193 8.75 10.7788 8.75H5.2832C4.86899 8.75 4.5332 8.41421 4.5332 8Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
