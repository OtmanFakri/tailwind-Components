import React, { useEffect } from "react";

function index() {
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("body");
      if (
        document
          .getElementById("drop-down-div_form_layout_wizard6")
          .classList.contains("active")
      ) {
        document
          .getElementById("drop-down-div_form_layout_wizard6")
          .classList.add("hidden");
        document
          .getElementById("drop-down-div_form_layout_wizard6")
          .classList.remove("active");
      }
    });
  });

  function showDropDownMenu_form_layout_wizard6(el) {
    document.querySelectorAll(".hideme").forEach((el) => {
      el.classList.remove("active");
    });
    el.parentElement.children[1].classList.add("active");
    el.parentElement.children[1].classList.remove("hidden");
  }
  function text_form_layout_wizard6(el) {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter_form_layout_wizard6"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div_form_layout_wizard6")
      .classList.toggle("hidden");
  }
  return (
    <>
      <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto bg-white px-6 py-4 rounded shadow">
            <div>
              <p className="text-xl font-semibold leading-tight text-gray-800 text-center">
                Create New Account
              </p>
              <div className="flex items-center justify-center gap-2 pt-5">
                <div className>
                  <p className="text-sm font-semibold text-gray-500 border rounded-full w-8 h-8 flex justify-center items-center">
                    1
                  </p>
                </div>
                <div>
                  <svg
                    width={186}
                    height={2}
                    viewBox="0 0 186 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:block md:block hidden"
                  >
                    <line
                      x1="8.74228e-08"
                      y1={1}
                      x2={186}
                      y2="1.00002"
                      stroke="#E5E7EB"
                      strokeWidth={2}
                    />
                  </svg>
                  <svg
                    width={82}
                    height={2}
                    viewBox="0 0 82 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden md:hidden block"
                  >
                    <line
                      x1="-8.74228e-08"
                      y1={1}
                      x2={82}
                      y2="0.999993"
                      stroke="#E5E7EB"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none border rounded-full w-8 h-8 flex justify-center items-center text-center bg-indigo-700 text-white">
                    2
                  </p>
                </div>
                <div>
                  <svg
                    width={186}
                    height={2}
                    viewBox="0 0 186 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:block md:block hidden"
                  >
                    <line
                      x1="8.74228e-08"
                      y1={1}
                      x2={186}
                      y2="1.00002"
                      stroke="#E5E7EB"
                      strokeWidth={2}
                    />
                  </svg>
                  <svg
                    width={82}
                    height={2}
                    viewBox="0 0 82 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="lg:hidden md:hidden block"
                  >
                    <line
                      x1="-8.74228e-08"
                      y1={1}
                      x2={82}
                      y2="0.999993"
                      stroke="#E5E7EB"
                      strokeWidth={2}
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 border rounded-full w-8 h-8 flex justify-center items-center">
                    3
                  </p>
                </div>
              </div>
            </div>
            <div className="flex md:justify-center md:gap-32 justify-between items-center gap-x-3">
              <p className="text-xs text-start text-gray-600 md:ml-3 -ml-1">
                Your Profile
              </p>
              <p className="text-xs font-medium text-center text-gray-800 md:ml-6 ml-6">
                Business Information
              </p>
              <p className="text-xs text-right text-gray-600">
                Additional Users
              </p>
            </div>
            <div className="pt-5">
              <p className="text-xl font-medium leading-tight text-gray-800">
                General Information
              </p>
            </div>
            <div className="lg:flex md:block block justify-center gap-4 pt-6">
              <div className="w-full">
                <p className="text-base leading-none text-gray-800">
                  Brand Name
                </p>
                <input
                  type="text"
                  name
                  id
                  placeholder="Enter your brand’s name"
                  className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                />
              </div>
              <div className="w-full">
                <p className="text-base leading-none text-gray-800 pt-3">
                  Brand Type
                </p>
                <div className="dropdown-one w-full rounded outline-none border border-gray-300 bg-inherit relative mt-2">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      showDropDownMenu_form_layout_wizard6(event.target);
                    }}
                    className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full"
                  >
                    <span
                      className="font-noemal text-gray-400 text-sm"
                      id="drop-down-content-setter_form_layout_wizard6"
                    >
                      Select type of your brand
                    </span>
                    <svg
                      width={12}
                      height={8}
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.06216 1.9393L5.43028 7.0368C5.50069 7.11892 5.58803 7.18484 5.68631 7.23003C5.78459 7.27522 5.89148 7.29862 5.99966 7.29862C6.10783 7.29862 6.21472 7.27522 6.313 7.23003C6.41128 7.18484 6.49862 7.11892 6.56903 7.0368L10.9372 1.9393C11.354 1.45273 11.0084 0.701172 10.3678 0.701172H1.63028C0.989656 0.701172 0.644031 1.45273 1.06216 1.9393Z"
                        fill="#1F2937"
                      />
                    </svg>
                  </button>
                  <div
                    className="hidden rounded w-full px-3 py-2 absolute top-16 right-0 bg-white shadow"
                    id="drop-down-div_form_layout_wizard6"
                  >
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text_form_layout_wizard6(event.target);
                      }}
                      className="flex items-center justify-between hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold hover:cursor-default"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Personal Brand</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text_form_layout_wizard6(event.target);
                      }}
                      className="flex items-center justify-between hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Product Brand</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text_form_layout_wizard6(event.target);
                      }}
                      className="flex items-center justify-between hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Service Brand</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text_form_layout_wizard6(event.target);
                      }}
                      className="flex items-center justify-between hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Corporate Brand</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text_form_layout_wizard6(event.target);
                      }}
                      className="flex items-center justify-between hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Investor Brand</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text_form_layout_wizard6(event.target);
                      }}
                      className="flex items-center justify-between hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Public Brand</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="lg:flex md:block block justify-between gap-4">
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800">
                    Street Address
                  </p>
                  <input
                    type="text"
                    name
                    id
                    placeholder="Enter your street address"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded w-full mt-4"
                  />
                </div>
                <div className="w-full">
                  <p className="text-base leading-none text-gray-800 lg:pt-0 md:pt-3 pt-3">
                    City
                  </p>
                  <input
                    type="text"
                    name
                    id
                    placeholder="Enter your city name"
                    className="focus:outline-none border border-gray-300 py-3 pl-3 rounded mt-4 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="lg:flex md:block block justify-between gap-5 items-center pt-5">
              <div className="w-full">
                <p className="text-base leading-none text-gray-800 pt-3">
                  Zip code
                </p>
                <div className="border border-gray-300 focus:bg-gray-50 rounded w-full px-4 py-3 mt-4">
                  <input
                    className="leading-none text-gray-600 focus:outline-none"
                    type="text"
                    placeholder="Enter zip code"
                  />
                </div>
              </div>
              <div className="w-full">
                <p className="text-base leading-none text-gray-800 pt-3">
                  Tax Id Number
                </p>
                <div className="border border-gray-300 rounded px-4 py-3 mt-4">
                  <input
                    type="text"
                    placeholder="Enter tax id number"
                    className="leading-none text-gray-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl font-medium leading-tight text-gray-800 pt-4 pl-1">
                Documents
              </p>
              <p className="text-base text-gray-800 pt-4 pl-1">
                Once the following documents are signed, you ‘ll be ready to get
                started
              </p>
              <div className="flex justify-between border border-gray-300 gap-4 rounded px-3 py-3 mt-4">
                <div className="lg:flex md:block block gap-5 items-center">
                  <p className="text-sm leading-none">
                    Drop your file(s) here or
                    <span className="text-indigo-700 font-medium cursor-pointer">
                      Browse
                    </span>
                  </p>
                  <p className="text-xs leading-3 text-gray-500 lg:pt-0 md:pt-3 pt-3">
                    Max File Size: 20MB
                  </p>
                </div>
                <div>
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.3277 4.98261C18.6135 5.23264 18.6424 5.66698 18.3924 5.95273L8.7674 16.9527C8.6421 17.0959 8.46305 17.1808 8.27288 17.1871C8.08271 17.1935 7.89841 17.1207 7.76386 16.9861L3.63886 12.8611C3.37038 12.5927 3.37038 12.1574 3.63886 11.8889C3.90735 11.6204 4.34265 11.6204 4.61114 11.8889L8.21651 15.4942L17.3576 5.04729C17.6076 4.76154 18.042 4.73258 18.3277 4.98261Z"
                      fill="#22C55E"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between border border-gray-300 gap-4 rounded px-3 py-3 mt-4">
                <p className="text-sm leading-none text-red-500">
                  Upload error, file is too big
                </p>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.67364 5.70136C6.40515 5.43288 5.96985 5.43288 5.70136 5.70136C5.43288 5.96985 5.43288 6.40515 5.70136 6.67364L10.0277 11L5.70136 15.3264C5.43288 15.5948 5.43288 16.0302 5.70136 16.2986C5.96985 16.5671 6.40515 16.5671 6.67364 16.2986L11 11.9723L15.3264 16.2986C15.5948 16.5671 16.0302 16.5671 16.2986 16.2986C16.5671 16.0302 16.5671 15.5948 16.2986 15.3264L11.9723 11L16.2986 6.67364C16.5671 6.40515 16.5671 5.96985 16.2986 5.70136C16.0302 5.43288 15.5948 5.43288 15.3264 5.70136L11 10.0277L6.67364 5.70136Z"
                    fill="#EF4444"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xl font-medium leading-tight text-gray-800 pt-4">
                  COI PDF Upload
                </p>
                <p className="text-base text-gray-800 pt-4">
                  Once the following documents are signed, you ‘ll be ready to
                  get started
                </p>
                <div className="flex justify-between border border-gray-300 gap-4 rounded px-3 py-3 mt-4">
                  <div className="lg:flex md:block block gap-5 items-center">
                    <p className="text-sm leading-none">
                      Drop your file(s) here or
                      <span className="text-indigo-700 font-medium cursor-pointer">
                        Browse
                      </span>
                    </p>
                    <p className="text-xs leading-3 text-gray-500 lg:pt-0 md:pt-3 pt-3">
                      Max File Size: 20MB
                    </p>
                  </div>
                  <div>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.3277 4.98261C18.6135 5.23264 18.6424 5.66698 18.3924 5.95273L8.7674 16.9527C8.6421 17.0959 8.46305 17.1808 8.27288 17.1871C8.08271 17.1935 7.89841 17.1207 7.76386 16.9861L3.63886 12.8611C3.37038 12.5927 3.37038 12.1574 3.63886 11.8889C3.90735 11.6204 4.34265 11.6204 4.61114 11.8889L8.21651 15.4942L17.3576 5.04729C17.6076 4.76154 18.042 4.73258 18.3277 4.98261Z"
                        fill="#22C55E"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lg:block md:hidden hidden">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 pt-4">
                    <svg
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.1279 3.34088C12.4574 3.67038 12.4574 4.20462 12.1279 4.53412L7.66199 9L12.1279 13.4659C12.4574 13.7954 12.4574 14.3296 12.1279 14.6591C11.7984 14.9886 11.2641 14.9886 10.9346 14.6591L5.87213 9.59662C5.54262 9.26712 5.54262 8.73288 5.87213 8.40338L10.9346 3.34088C11.2641 3.01137 11.7984 3.01137 12.1279 3.34088Z"
                        fill="#4338CA"
                      />
                    </svg>
                    <button className="text-indigo-700 font-medium">
                      Back to Login
                    </button>
                  </div>
                  <div className="flex gap-5 pt-4">
                    <button className="text-indigo-700 border border-indigo-700 px-3 rounded font-medium hover:bg-indigo-50">
                      Previous Step
                    </button>
                    <button className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium hover:bg-indigo-600">
                      Next Step
                      <svg
                        className="mt-1 float-right flex justify-center items-center"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:hidden md:block block pt-4">
                <button className="text-white border border-indigo-700 bg-indigo-700 px-6 py-3 rounded font-medium w-full hover:bg-indigo-600">
                  Next Step
                  <svg
                    className="float-right flex justify-center items-center"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.87213 3.34088C5.54262 3.67038 5.54262 4.20462 5.87213 4.53412L10.338 9L5.87213 13.4659C5.54262 13.7954 5.54262 14.3296 5.87213 14.6591C6.20163 14.9886 6.73587 14.9886 7.06537 14.6591L12.1279 9.59662C12.4574 9.26712 12.4574 8.73288 12.1279 8.40338L7.06537 3.34088C6.73587 3.01137 6.20163 3.01137 5.87213 3.34088Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="text-indigo-700 border border-indigo-700 px-6 py-3 rounded font-medium w-full mt-4 hover:bg-indigo-50">
                  Previous Step
                </button>
                <div className="flex justify-center items-center gap-3 pt-4">
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.1279 3.34088C12.4574 3.67038 12.4574 4.20462 12.1279 4.53412L7.66199 9L12.1279 13.4659C12.4574 13.7954 12.4574 14.3296 12.1279 14.6591C11.7984 14.9886 11.2641 14.9886 10.9346 14.6591L5.87213 9.59662C5.54262 9.26712 5.54262 8.73288 5.87213 8.40338L10.9346 3.34088C11.2641 3.01137 11.7984 3.01137 12.1279 3.34088Z"
                      fill="#4338CA"
                    />
                  </svg>
                  <button className="text-indigo-700 font-medium">
                    Back to Login
                  </button>
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
