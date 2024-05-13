import React, { useEffect } from "react";

function index() {
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("body");
      if (
        document
          .getElementById("drop-down-div_from_layout_wizard8")
          .classList.contains("active")
      ) {
        document
          .getElementById("drop-down-div_from_layout_wizard8")
          .classList.add("hidden");
        document
          .getElementById("drop-down-div_from_layout_wizard8")
          .classList.remove("active");
      }
    });
  });
  function showDropDownMenu_from_layout_wizard8(el) {
    document.querySelectorAll(".hideme").forEach((el) => {
      el.classList.remove("active");
    });
    el.parentElement.children[1].classList.add("active");
    el.parentElement.children[1].classList.remove("hidden");
  }
  function text(el) {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter_from_layout_wizard8"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div_from_layout_wizard8")
      .classList.toggle("hidden");
  }
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-3 py-14">
          <div className="lg:max-w-[932px] md:max-w-[744px] max-w-[375px] mx-auto bg-white py-10">
            <div>
              <div className="flex gap-3 pl-5">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1942 3.71209C10.5603 4.0782 10.5603 4.6718 10.1942 5.03791L6.16958 9.0625H16.0938C16.6115 9.0625 17.0312 9.48223 17.0312 10C17.0312 10.5178 16.6115 10.9375 16.0938 10.9375H6.16958L10.1942 14.9621C10.5603 15.3282 10.5603 15.9218 10.1942 16.2879C9.82805 16.654 9.23445 16.654 8.86834 16.2879L3.24334 10.6629C2.87722 10.2968 2.87722 9.7032 3.24334 9.33709L8.86834 3.71209C9.23445 3.34597 9.82805 3.34597 10.1942 3.71209Z"
                    fill="#373737"
                  />
                </svg>
                <p className="text-sm font-medium text-gray-800 pb-5">
                  Personal Information
                </p>
              </div>
              <hr />
              <div className="lg:px-24 md:px-6 px-4 md:block hidden">
                <div className="flex items-center justify-center mt-14">
                  <div>
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 3C8.83187 3 3 8.83187 3 16C3 23.1681 8.83187 29 16 29C23.1681 29 29 23.1681 29 16C29 8.83187 23.1681 3 16 3ZM22.7656 11.6431L14.3656 21.6431C14.2735 21.7529 14.1588 21.8415 14.0294 21.9031C13.9 21.9647 13.7589 21.9977 13.6156 22H13.5988C13.4586 21.9999 13.32 21.9704 13.192 21.9134C13.064 21.8563 12.9494 21.773 12.8556 21.6688L9.25562 17.6688C9.1642 17.5718 9.09308 17.4575 9.04644 17.3327C8.99981 17.2078 8.9786 17.0749 8.98407 16.9417C8.98953 16.8086 9.02156 16.6778 9.07827 16.5572C9.13498 16.4366 9.21523 16.3286 9.31429 16.2394C9.41336 16.1503 9.52925 16.0818 9.65515 16.0381C9.78105 15.9944 9.91442 15.9763 10.0474 15.9848C10.1804 15.9934 10.3104 16.0284 10.4296 16.0879C10.5489 16.1474 10.655 16.2301 10.7419 16.3312L13.5725 19.4762L21.2344 10.3569C21.4062 10.1582 21.6494 10.0351 21.9113 10.0142C22.1732 9.99335 22.4327 10.0764 22.6339 10.2454C22.8351 10.4143 22.9617 10.6557 22.9863 10.9172C23.0109 11.1788 22.9317 11.4395 22.7656 11.6431V11.6431Z"
                        fill="#4338CA"
                      />
                    </svg>
                  </div>
                  <div className="max-w-[196px] w-full h-0.5 bg-indigo-50" />
                  <div>
                    <svg
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={16} cy={16} r={5} fill="#4338CA" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                        fill="#4338CA"
                      />
                    </svg>
                  </div>
                  <div className="max-w-[196px] w-full h-0.5 bg-indigo-50" />
                  <div>
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13Z"
                        fill="#E5E7EB"
                      />
                    </svg>
                  </div>
                  <div className="max-w-[196px] w-full h-0.5 bg-indigo-50" />
                  <div>
                    <svg
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2ZM0 13C0 5.8203 5.8203 0 13 0C20.1797 0 26 5.8203 26 13C26 20.1797 20.1797 26 13 26C5.8203 26 0 20.1797 0 13Z"
                        fill="#E5E7EB"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-36 md:px-10">
                  <p className="w-20 text-sm text-center text-gray-600">
                    Registration
                  </p>
                  <p className="w-20 text-sm text-center text-gray-600">
                    Personal Information
                  </p>
                  <p className="w-20 text-sm text-center text-gray-600">
                    Job Information
                  </p>
                  <p className="w-20 text-sm text-center text-gray-600">
                    Education Information
                  </p>
                </div>
              </div>
              <div className="mt-8 px-6 md:hidden block">
                <div className="dropdown-one w-full rounded outline-none bg-gray-100 border border-gray-200 relative mt-2">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      showDropDownMenu_from_layout_wizard8(event.target);
                    }}
                    className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full"
                  >
                    <span
                      className="pr-4 text-gray-600 text-sm font-bold"
                      id="drop-down-content-setter_from_layout_wizard8"
                    >
                      Personal Information
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
                    className="hidden rounded w-full px-3 py-2 absolute top-16 right-0 bg-white shadow-lg"
                    id="drop-down-div_from_layout_wizard8"
                  >
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold hover:cursor-default"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Account Settings</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">
                          Business Information
                        </p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Billing Details</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Finished</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-between lg:px-14 md:px-6 px-4 mt-16 w-full">
              <div className="text">
                <div className="w-full lg:mt-0 mt-6">
                  <p className="text-base text-gray-800">Portfolio Link</p>
                  <input
                    type="text"
                    name
                    id
                    placeholder="Enter behance, dribbble etc portfolio link"
                    className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[540px] w-full py-3 px-3 rounded mt-4"
                  />
                </div>
                <div className>
                  <div className="mt-10">
                    <p className="text-base text-gray-800">Name</p>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Enter your name"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[540px] w-full py-3 px-3 rounded mt-4"
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex block gap-8 lg:mt-10 md:mt-6 mt-4">
                  <div className="w-full">
                    <p className="text-base text-gray-800">Date of birth</p>
                    <div className="flex justify-between border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4 border cursor-pointer">
                      <input
                        type="date"
                        name
                        id
                        placeholder="Select date"
                        className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none w-full cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                    <p className="text-base text-gray-800">Place of birth</p>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Enter birth place"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4"
                    />
                  </div>
                </div>
                <div className="lg:flex md:flex block gap-8 md:mt-4 mt-6">
                  <div className="w-full">
                    <p className="text-base text-gray-800">Address</p>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Enter your postal address"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4"
                    />
                  </div>
                  <div className="lg:mt-0 md:mt-0 mt-4 w-full">
                    <p className="text-base text-gray-800">Zip code</p>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Enter zip code"
                      className="placeholder:text-sm placeholdertext-gray-500 focus:outline-none border border-gray-300 lg:min-w-[250px] w-full py-3 px-3 rounded mt-4"
                    />
                  </div>
                </div>
              </div>
              <div className="border border-gray-300 lg:max-w-[240px] w-full pb-4 py-8 lg:h-[276px]">
                <svg
                  className="ml-4"
                  width={64}
                  height={64}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx={32}
                    cy={32}
                    r={31}
                    fill="white"
                    stroke="#E5E7EB"
                    strokeWidth={2}
                  />
                  <path
                    d="M36.7901 20.0362C35.5739 18.7231 33.8751 18 32.0001 18C30.1151 18 28.4107 18.7187 27.2001 20.0237C25.9764 21.3431 25.3801 23.1363 25.5201 25.0725C25.7976 28.8925 28.7045 32 32.0001 32C35.2957 32 38.1976 28.8931 38.4795 25.0737C38.6214 23.155 38.0214 21.3656 36.7901 20.0362Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M43.0001 46H21.0001C20.7122 46.0037 20.427 45.9433 20.1653 45.8229C19.9037 45.7026 19.6722 45.5254 19.4876 45.3044C19.0814 44.8187 18.9176 44.1556 19.0389 43.485C19.5664 40.5588 21.2126 38.1006 23.8001 36.375C26.0989 34.8431 29.0107 34 32.0001 34C34.9895 34 37.9014 34.8437 40.2001 36.375C42.7876 38.1 44.4339 40.5581 44.9614 43.4844C45.0826 44.155 44.9189 44.8181 44.5126 45.3037C44.3281 45.5249 44.0966 45.7022 43.835 45.8226C43.5733 45.9431 43.2881 46.0037 43.0001 46Z"
                    fill="#E5E7EB"
                  />
                </svg>
                <div className="flex gap-4 mt-6 items-center px-3">
                  <svg
                    className="flex-shrink-0"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.72604 3.29001C3.17815 2.17541 4.3106 1.12109 6 1.12109C7.81762 1.12109 9.36673 2.35779 9.70638 4.3591C10.186 4.43088 10.6881 4.61455 11.1015 4.92168C11.6154 5.30341 12 5.88506 12 6.66172C12 7.41476 11.683 8.01384 11.1668 8.41542C10.6608 8.80906 9.98743 8.99609 9.28125 8.99609H7.5C7.29289 8.99609 7.125 8.8282 7.125 8.62109C7.125 8.41399 7.29289 8.24609 7.5 8.24609H9.28125C9.86413 8.24609 10.3626 8.09083 10.7063 7.82347C11.0397 7.56405 11.25 7.18345 11.25 6.66172C11.25 6.16361 11.0135 5.79054 10.6543 5.52375C10.2859 5.25009 9.79763 5.09874 9.35645 5.07688C9.17172 5.06773 9.02126 4.92527 9.00203 4.74132C8.8131 2.93361 7.51384 1.87109 6 1.87109C4.57051 1.87109 3.65655 2.81413 3.35709 3.74809C3.3113 3.89092 3.18479 3.99273 3.03547 4.00691C1.74323 4.12968 0.75 4.92523 0.75 6.12734C0.75 7.33585 1.79426 8.24609 3.1875 8.24609H4.5C4.70711 8.24609 4.875 8.41399 4.875 8.62109C4.875 8.8282 4.70711 8.99609 4.5 8.99609H3.1875C1.48699 8.99609 0 7.84946 0 6.12734C0 4.48954 1.29668 3.51105 2.72604 3.29001Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M6.26517 4.23093L7.76517 5.73093C7.91161 5.87738 7.91161 6.11481 7.76517 6.26126C7.61872 6.40771 7.38128 6.40771 7.23483 6.26126L6.375 5.40142V10.5059C6.375 10.713 6.20711 10.8809 6 10.8809C5.79289 10.8809 5.625 10.713 5.625 10.5059V5.40142L4.76516 6.26126C4.61872 6.40771 4.38128 6.40771 4.23484 6.26126C4.08839 6.11481 4.08839 5.87738 4.23484 5.73093L5.73484 4.23093C5.88128 4.08448 6.11872 4.08448 6.26517 4.23093Z"
                      fill="#6B7280"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">Upload Image</p>
                </div>
                <div className="flex gap-4 mt-6 items-center px-3">
                  <svg
                    className="flex-shrink-0"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.7962 6.00098L9.02276 3.77441C9.12844 3.66893 9.18787 3.52578 9.18801 3.37647C9.18814 3.22716 9.12895 3.08391 9.02347 2.97824C8.91798 2.87257 8.77484 2.81313 8.62553 2.813C8.47621 2.81287 8.33297 2.87205 8.22729 2.97754L6.00073 5.2041L3.77417 2.97754C3.6685 2.87187 3.52517 2.8125 3.37573 2.8125C3.22629 2.8125 3.08297 2.87187 2.97729 2.97754C2.87162 3.08321 2.81226 3.22653 2.81226 3.37598C2.81226 3.52542 2.87162 3.66874 2.97729 3.77441L5.20386 6.00098L2.97729 8.22754C2.87162 8.33321 2.81226 8.47653 2.81226 8.62598C2.81226 8.77542 2.87162 8.91874 2.97729 9.02441C3.08297 9.13009 3.22629 9.18945 3.37573 9.18945C3.52517 9.18945 3.6685 9.13009 3.77417 9.02441L6.00073 6.79785L8.22729 9.02441C8.33297 9.13009 8.47629 9.18945 8.62573 9.18945C8.77517 9.18945 8.9185 9.13009 9.02417 9.02441C9.12984 8.91874 9.18921 8.77542 9.18921 8.62598C9.18921 8.47653 9.12984 8.33321 9.02417 8.22754L6.7962 6.00098Z"
                      fill="#6B7280"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">Remove Image</p>
                </div>
                <div className="flex gap-4 6 px-3 mt-4">
                  <svg
                    className="flex-shrink-0"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.125 5.8125C1.125 3.22391 3.22391 1.125 5.8125 1.125C8.40109 1.125 10.5 3.22391 10.5 5.8125C10.5 8.40109 8.40109 10.5 5.8125 10.5C3.22391 10.5 1.125 8.40109 1.125 5.8125ZM5.8125 1.875C3.63812 1.875 1.875 3.63812 1.875 5.8125C1.875 7.98688 3.63812 9.75 5.8125 9.75C7.98688 9.75 9.75 7.98688 9.75 5.8125C9.75 3.63812 7.98688 1.875 5.8125 1.875ZM4.78125 5.15625C4.78125 4.94914 4.94914 4.78125 5.15625 4.78125H5.90625C6.11336 4.78125 6.28125 4.94914 6.28125 5.15625V7.59375H6.9375C7.14461 7.59375 7.3125 7.76164 7.3125 7.96875C7.3125 8.17586 7.14461 8.34375 6.9375 8.34375H4.875C4.66789 8.34375 4.5 8.17586 4.5 7.96875C4.5 7.76164 4.66789 7.59375 4.875 7.59375H5.53125V5.53125H5.15625C4.94914 5.53125 4.78125 5.36336 4.78125 5.15625Z"
                      fill="#6B7280"
                    />
                    <path
                      d="M5.8125 3.04688C5.69198 3.04688 5.57416 3.08261 5.47395 3.14957C5.37374 3.21653 5.29563 3.3117 5.24951 3.42305C5.20339 3.5344 5.19132 3.65693 5.21483 3.77513C5.23835 3.89334 5.29638 4.00192 5.38161 4.08714C5.46683 4.17237 5.57541 4.2304 5.69362 4.25392C5.81182 4.27743 5.93435 4.26536 6.0457 4.21924C6.15705 4.17312 6.25222 4.09501 6.31918 3.9948C6.38614 3.89459 6.42188 3.77677 6.42188 3.65625C6.42188 3.49463 6.35767 3.33964 6.24339 3.22536C6.12911 3.11108 5.97412 3.04688 5.8125 3.04688Z"
                      fill="#6B7280"
                    />
                  </svg>
                  <p className="text-sm text-gray-500">
                    Acceptable image format is JPG, JPEG &amp; PNG. (Size upto
                    5MB)
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:px-14 md:px-6 px-4 mt-10">
              <p className="text-base leading-none text-gray-800">Gender</p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="w-4 h-4 accent-indigo-700 cursor-pointer"
                  />
                  <p className="text-sm leading-none text-gray-600">Male</p>
                </div>
                <div className="flex gap-3 items-center">
                  <input
                    type="radio"
                    name="radio"
                    className="w-4 h-4 accent-indigo-700 cursor-pointer"
                  />
                  <p className="text-sm leading-none text-gray-600">Female</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-4">
              <div className="bg-indigo-700 lg:max-w-[143px] w-full py-3 px-2 rounded md:mt-12 mt-9 hover:bg-indigo-600 transition duration-300 ease-in-out cursor-pointer">
                <div className="flex gap-2 items-center justify-center">
                  <button className="text-white">Next Step</button>
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
                      d="M5.21967 2.96967C4.92678 3.26256 4.92678 3.73744 5.21967 4.03033L9.18934 8L5.21967 11.9697C4.92678 12.2626 4.92678 12.7374 5.21967 13.0303C5.51256 13.3232 5.98744 13.3232 6.28033 13.0303L10.7803 8.53033C11.0732 8.23744 11.0732 7.76256 10.7803 7.46967L6.28033 2.96967C5.98744 2.67678 5.51256 2.67678 5.21967 2.96967Z"
                      fill="white"
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
