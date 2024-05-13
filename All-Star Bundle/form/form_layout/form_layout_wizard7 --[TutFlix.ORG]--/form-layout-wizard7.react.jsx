import React, { useEffect } from "react";

function index() {
  useEffect(() => {
    const elements = document.querySelectorAll(".button_form_layout_wizard7");
    elements.forEach((e) => {
      e.addEventListener("change", (e1) => {
        elements.forEach((item) => {
          if (item.checked) {
            item.parentElement.classList.add("border-indigo-700");
            item.parentElement.classList.add("bg-gray-50");
            item.parentElement.children[1].classList.add("font-medium");
          } else if (!item.checked) {
            item.parentElement.classList.remove("border-indigo-700");
            item.parentElement.classList.remove("bg-gray-50");
            item.parentElement.children[1].classList.remove("font-medium");
          }
        });
      });
    });
  });
  return (
    <>
      <div className="py-12 px-4">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white py-7">
          <div className="lg:max-w-[932px] md:max-w-[744px] max-w-[327px] mx-auto px-6 ">
            <p className="text-xs font-medium mb-3 text-gray-500">
              Step 1 of 4
            </p>
            <div className="flex justify-between">
              <p className="text-sm font-semibold leading-none text-gray-800">
                Occupation
              </p>
              <div className="flex cursor-pointer">
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
                    d="M13.4754 3.71209C13.8415 4.0782 13.8415 4.6718 13.4754 5.03791L8.51333 10L13.4754 14.9621C13.8415 15.3282 13.8415 15.9218 13.4754 16.2879C13.1093 16.654 12.5157 16.654 12.1496 16.2879L6.52459 10.6629C6.15847 10.2968 6.15847 9.7032 6.52459 9.33709L12.1496 3.71209C12.5157 3.34597 13.1093 3.34597 13.4754 3.71209Z"
                    fill="#1F2937"
                  />
                </svg>
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
                    d="M6.52459 3.71209C6.15847 4.0782 6.15847 4.6718 6.52459 5.03791L11.4867 10L6.52459 14.9621C6.15847 15.3282 6.15847 15.9218 6.52459 16.2879C6.8907 16.654 7.4843 16.654 7.85041 16.2879L13.4754 10.6629C13.8415 10.2968 13.8415 9.7032 13.4754 9.33709L7.85041 3.71209C7.4843 3.34597 6.8907 3.34597 6.52459 3.71209Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
            </div>
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/1.png"
              className="pt-1"
            />
            <div className="pt-10">
              <p className="text-base font-medium leading-none text-gray-800">
                What is your current occupation?{" "}
              </p>
              <div className="pt-4 ">
                <div className="lg:flex md:flex block  justify-between gap-5 items-center">
                  <div className="group w-full">
                    <button className=" group flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 group-hover:border-indigo-700">
                      <input
                        type="radio"
                        id="emp"
                        name="radio"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700 "
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Employee
                      </p>
                    </button>
                  </div>
                  <div className="group w-full">
                    <button className=" flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4 group-hover:border-indigo-700">
                      <input
                        type="radio"
                        id="entr"
                        name="radio"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Entrepreneur
                      </p>
                    </button>
                  </div>
                </div>
                <div className="lg:flex md:flex block justify-between gap-5 items-center pt-5">
                  <div className="w-full group">
                    <button className=" flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 group-hover:border-indigo-700">
                      <input
                        type="radio"
                        id="pro"
                        name="radio"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Professional
                      </p>
                    </button>
                  </div>
                  <div className="group w-full">
                    <button className=" flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 group-hover:border-indigo-700">
                      <input
                        type="radio"
                        id="pro"
                        name="radio"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Freelancer
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <p className="text-base font-medium leading-none text-gray-800">
                How long have you worked?{" "}
              </p>
              <div className="pt-4 ">
                <div className="lg:flex md:flex block justify-between gap-5 items-center">
                  <div className="group w-full">
                    <button className=" flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 group-hover:border-indigo-700">
                      <input
                        type="radio"
                        id
                        name="radio1"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Less than 6 months
                      </p>
                    </button>
                  </div>
                  <div className="group w-full">
                    <button className=" flex gap-3 cursor-pointer border group-hover:border-indigo-700 focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4">
                      <input
                        type="radio"
                        id
                        name="radio1"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Less than 1 year
                      </p>
                    </button>
                  </div>
                </div>
                <div className="lg:flex md:flex block justify-between gap-5 items-center pt-5">
                  <div className="group w-full">
                    <button className=" flex gap-3 cursor-pointer border group-hover:border-indigo-700  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4">
                      <input
                        type="radio"
                        id
                        name="radio1"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        1-2 years
                      </p>
                    </button>
                  </div>
                  <div className="group w-full">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4">
                      <input
                        type="radio"
                        id
                        name="radio1"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        More than 2 years
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <p className="text-base font-medium leading-none text-gray-800">
                Your current working experience level:
              </p>
              <div className="pt-4 ">
                <div className="lg:flex md:flex block justify-between gap-5 items-center">
                  <div className="w-full group">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3">
                      <input
                        type="radio"
                        id
                        name="radio2"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Just start working (1-2 years)
                      </p>
                    </button>
                  </div>
                  <div className="w-full group">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4">
                      <input
                        type="radio"
                        id
                        name="radio2"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium text-left">
                        Intermediate experience (2-5 years)
                      </p>
                    </button>
                  </div>
                </div>
                <div className="lg:flex md:flex block justify-between gap-5 items-center pt-5">
                  <div className="group w-full">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3">
                      <input
                        type="radio"
                        id
                        name="radio2"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Experienced (5-8 years)
                      </p>
                    </button>
                  </div>
                  <div className="w-full group">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4">
                      <input
                        type="radio"
                        id
                        name="radio2"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Expert (10+ years)
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10">
              <p className="text-base font-medium leading-none text-gray-800">
                How much is your gross monthly income?
              </p>
              <div className="pt-4 ">
                <div className="lg:flex md:flex block justify-between gap-5 items-center">
                  <div className="w-full group">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3">
                      <input
                        type="radio"
                        id
                        name="radio3"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Less than $1000
                      </p>
                    </button>
                  </div>
                  <div className="w-full group">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4">
                      <input
                        type="radio"
                        id
                        name="radio3"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Less than $2500
                      </p>
                    </button>
                  </div>
                </div>
                <div className="lg:flex md:flex blockx justify-between gap-5 items-center pt-5">
                  <div className="w-full group">
                    <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3">
                      <input
                        type="radio"
                        id
                        name="radio3"
                        className="button_form_layout_wizard7 w-4 h-4   accent-indigo-700"
                      />
                      <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                        Less than $6000
                      </p>
                    </button>
                  </div>
                  <div className="w-full group">
                    <div className="w-full group">
                      <button className="group-hover:border-indigo-700 flex gap-3 cursor-pointer border  focus:border-indigo-700 border-gray-300 rounded focus:bg-gray-50  w-full  px-4 py-3 lg:mt-0 md:mt-0 mt-4">
                        <input
                          type="radio"
                          id
                          name="radio3"
                          className="button  w-4 h-4   accent-indigo-700"
                        />
                        <p className="text-sm leading-none text-gray-600 group-focus:font-medium">
                          Less than $10000
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:block md:hidden hidden">
              <div className="  pt-10 flex justify-end gap-4">
                <button className="border border-gray-400 text-gray-400 rounded px-10 py-2 hover:bg-indigo-50">
                  Previous
                </button>
                <button className="bg-indigo-700 text-white  px-10 py-2 rounded hover:bg-indigo-500">
                  Next
                </button>
              </div>
            </div>
            <div className="lg:hidden md:block block">
              <div className="  pt-10 ">
                <div>
                  <button className="bg-indigo-700 text-white  px-10 py-2 rounded w-full hover:bg-indigo-500 ">
                    Next
                  </button>
                </div>
                <div>
                  <button className="border border-gray-400 text-gray-400 rounded px-10 py-2 w-full mt-4 hover:bg-indigo-50">
                    Previous
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
