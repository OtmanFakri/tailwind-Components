import React, { useEffect } from "react";

function index() {
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("body");
      if (
        document
          .getElementById("drop-down-div_popover3")
          .classList.contains("active")
      ) {
        document
          .getElementById("drop-down-div_popover3")
          .classList.add("hidden");
        document
          .getElementById("drop-down-div_popover3")
          .classList.remove("active");
      }
    });
  });
  function showDropDownMenu_popover3(el) {
    document.querySelectorAll(".hideme").forEach((el) => {
      el.classList.remove("active");
    });
    el.parentElement.children[1].classList.add("active");
    el.parentElement.children[1].classList.remove("hidden");
  }
  function text(el) {
    const targetText = el.innerText;
    document.getElementById("drop-down-content-setter_popover3").innerText =
      targetText;
    document
      .getElementById("drop-down-div_popover3")
      .classList.toggle("hidden");
  }
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-3 py-12">
          <div className="g:max-w-[800px] md:max-w-[696px] max-w-[375px] w-full mx-auto bg-white md:px-6 px-4 pt-6 pb-16">
            <div className="flex justify-between">
              <p className="text-xl font-semibold text-gray-800">
                Edit Payment Method
              </p>
              <button>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
                    fill="#F9FAFB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#1F2937"
                  />
                </svg>
              </button>
            </div>
            <div className="md:flex justify-between items-center md:mt-10 mt-9">
              <p className="text-base text-gray-600">Card number</p>
              <input
                type="text"
                name
                id
                placeholder="**** **** 0000"
                className="max-w-[524px] w-full placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded py-3 px-3 md:mt-0 mt-4"
              />
            </div>
            <div className="md:flex justify-between items-center mt-8">
              <p className="text-base text-gray-600">Expiration</p>
              <input
                type="text"
                name
                id
                placeholder="12/2022"
                className="max-w-[524px] w-full placeholder:text-gray-600 focus:outline-none border border-gray-300 rounded py-3 px-3 md:mt-0 mt-4"
              />
            </div>
            <div className="md:flex justify-between items-center mt-8">
              <p className="text-base text-gray-600">CVC</p>
              <input
                type="text"
                name
                id
                placeholder="****"
                className="max-w-[524px] w-full placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded py-3 px-3 md:mt-0 mt-4"
              />
            </div>
            <div className="md:flex justify-between items-center mt-8">
              <div>
                <p className="text-base text-gray-600">Country</p>
              </div>
              <div className="max-w-[524px] w-full">
                <div className="dropdown-one w-full rounded outline-none relative mt-2 bg-white border border-gray-300 bg-inherit">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      showDropDownMenu_popover3(event.target);
                    }}
                    className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full bg-inherit"
                  >
                    <span
                      className="pr-4 text-gray-600 text-base"
                      id="drop-down-content-setter_popover3"
                    >
                      USA
                    </span>
                    <svg
                      width={14}
                      height={30}
                      viewBox="0 0 14 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.67945 21.1966L6.50156 25.657C6.56316 25.7288 6.63959 25.7865 6.72558 25.826C6.81158 25.8656 6.90511 25.8861 6.99976 25.8861C7.09441 25.8861 7.18794 25.8656 7.27394 25.826C7.35993 25.7865 7.43635 25.7288 7.49796 25.657L11.3201 21.1966C11.6848 20.7709 11.3824 20.1133 10.8219 20.1133H3.17656C2.61601 20.1133 2.31359 20.7709 2.67945 21.1966Z"
                        fill="#6B7280"
                      />
                      <path
                        d="M2.67945 8.80336L6.50156 4.34305C6.56316 4.27119 6.63959 4.21351 6.72558 4.17397C6.81158 4.13442 6.90511 4.11395 6.99976 4.11395C7.09441 4.11395 7.18794 4.13442 7.27394 4.17397C7.35993 4.21351 7.43635 4.27119 7.49796 4.34305L11.3201 8.80336C11.6848 9.2291 11.3824 9.88672 10.8219 9.88672H3.17656C2.61601 9.88672 2.31359 9.2291 2.67945 8.80336Z"
                        fill="#6B7280"
                      />
                    </svg>
                  </button>
                  <div
                    className="hidden rounded w-full px-3 py-2 absolute top-16 right-0 bg-white shadow-xl"
                    id="drop-down-div_popover3"
                  >
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className="hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold hover:cursor-default"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Pakistan</p>
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
                        <p className="text-sm leading-none">Saudia Arabia</p>
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
                        <p className="text-sm leading-none">England</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse justify-end gap-5 mt-10">
              <button className="font-mediuam text-base text-gray-600 text-center">
                Cancel
              </button>
              <button className="text-white text-base bg-indigo-700 lg:max-w-[132px] w-full rounded py-3 hover:bg-indigo-600 transition duration-300 ease-in-out">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
