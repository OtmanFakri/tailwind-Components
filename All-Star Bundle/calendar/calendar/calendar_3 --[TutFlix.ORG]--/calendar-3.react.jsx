import { useEffect } from "react";

function index() {
  useEffect(() => {});
  function showDropDownMenu_calendar_3(el) {
    el.target.parentElement.children[1].classList.toggle("hidden");
  }
  function swaptext_calendar_3(el) {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter_calendar_3").innerText = targetText;
    document.getElementById("drop-down-div_calendar_3").classList.toggle("hidden");
  }

  return (
    <>
      <div className="lg:max-w-[1000px]  w-full mx-auto lg:px-6 md:px-4 px-2 bg-white py-5">
        <div className="block w-full lg:hidden md:block">
          <div className="relative">
            <div className="relative w-full mt-2 border-l border-r border-t border-gray-200  outline-none dropdown-one">
              <button
                onClick={showDropDownMenu_calendar_3}
                className="relative flex items-center justify-between w-full px-5 py-4 dropbtn-one"
              >
                <span
                  className="pr-4 text-sm font-medium text-indigo-700"
                  id="drop-down-content-setter_calendar_3"
                >
                  Last 7 days
                </span>
                <svg
                  id="rotate"
                  className="absolute z-10 cursor-pointer right-5"
                  width={10}
                  height={6}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.5 0.75L5 5.25L9.5 0.75"
                    stroke="#4B5563"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200  shadow top-12"
                id="drop-down-div_calendar_3"
              >
                <a href="javascript:void(0)" className="hover">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    Last 7 days
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    Last 30 days
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    Last 2 months
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    Last 6 months
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    Last 12 months
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    Month to date
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    All time
                  </p>
                </a>{" "}
                <a href="javascript:void(0)">
                  <p
                    className="p-3 text-sm leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                    onClick={swaptext_calendar_3}
                  >
                    Custom
                  </p>
                </a>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
        <div className="flex w-full border gap-x-6 lg:pr-8">
          <div className="hidden lg:min-w-[168px] w-full py-8 border-r lg:block md:hidden">
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              Last 7 days
            </p>
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              Last 30 days
            </p>
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              Last 2 months
            </p>
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              Last 4 months
            </p>
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              Last 9 months
            </p>
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              Month to date
            </p>
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              All time
            </p>
            <p className="px-4 py-4 text-sm leading-none text-gray-800 cursor-pointer hover:text-indigo-700 hover:bg-indigo-50 hover:font-medium max-w-[168px] w-full">
              Custom
            </p>
          </div>
          <div className="relative flex flex-col lg:justify-center md:justify-between justify-center w-full lg:pb-[75px] md:pb-52 pb-72 lg:gap-x-4 md:gap-x-6  lg:flex-row md:flex-row">
            <div className="flex items-center justify-center px-2 py-8 w-full">
              <div className="lg:min-w-[346px] md:min-w-[324px]  w-full rounded-lg py-6  bg-gray-50  ">
                <div className="flex items-center justify-between px-4 leading-8">
                  <div className="flex items-center ">
                    <button
                      className="text-gray-800 focus:text-gray-400 hover:text-gray-400 p-1 bg-gray-100 rounded"
                      aria-label="calender backward"
                    >
                      <img
                        className
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/calendar_1-svg1.svg"
                        alt="arrow"
                      />
                    </button>
                  </div>
                  <a
                    tabIndex={0}
                    role="link"
                    className="text-base font-medium text-gray-800 cursor-pointer focus:text-gray-400  "
                  >
                    February
                  </a>
                  <div className="flex items-center ">
                    <button
                      aria-label="calender forward "
                      className="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400 p-1 bg-gray-100 rounded"
                    >
                      <img
                        className="transform rotate-180 "
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/calendar_1-svg1.svg"
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-8 overflow-x-auto">
                  <table className="w-full ">
                    <thead>
                      <tr>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Su
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Mo
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Tu
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              We
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Th
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Fr
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Sa
                            </p>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-sm text-gray-300">30</p>
                          </div>
                        </td>
                        <td className="pt-[22px]">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-sm text-gray-300">31</p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              1
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              2
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              4
                            </p>
                          </div>
                        </td>
                        <td className="pt-[22px]">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              5
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              6
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              7
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <a
                                tabIndex={0}
                                role="link"
                                className="flex items-center justify-center text-base font-medium text-gray-500 "
                              >
                                8
                              </a>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              9
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              10
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              11
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              12
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              13
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              14
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                            <p className="text-base font-medium text-gray-500 ">
                              15
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              16
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              17
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              18
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              19
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              20
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              21
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              22
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              23
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              24
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              25
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              26
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              27
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              28
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              1
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              2
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              3
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              4
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              5
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center  px-2 pb-12 lg:py-8 md:py-8 w-full">
              <div className="lg:min-w-[346px] md:min-w-[324px]  w-full rounded-lg py-6  bg-gray-50  ">
                <div className="flex items-center justify-between px-4 leading-8">
                  <div className="flex items-center ">
                    <button
                      className="text-gray-800 focus:text-gray-400 hover:text-gray-400 p-1 bg-gray-100 rounded"
                      aria-label="calender backward"
                    >
                      <img
                        className
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/calendar_1-svg1.svg"
                        alt="arrow"
                      />
                    </button>
                  </div>
                  <a
                    tabIndex={0}
                    role="link"
                    className="text-base font-medium text-gray-800 cursor-pointer focus:text-gray-400  "
                  >
                    March
                  </a>
                  <div className="flex items-center ">
                    <button
                      aria-label="calender forward"
                      className="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400 p-1 bg-gray-100 rounded"
                    >
                      <img
                        className="transform rotate-180 "
                        src="https://tuk-cdn.s3.amazonaws.com/can-uploader/calendar_1-svg1.svg"
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-8 overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Su
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Mo
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Tu
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              We
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Th
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Fr
                            </p>
                          </div>
                        </th>
                        <th>
                          <div className="flex justify-center w-full">
                            <p className="text-base font-medium text-center text-gray-800 ">
                              Sa
                            </p>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-sm text-gray-300">27</p>
                          </div>
                        </td>
                        <td className="pt-[22px]">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-sm text-gray-300">28</p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              1
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              2
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="pt-6">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              4
                            </p>
                          </div>
                        </td>
                        <td className="pt-[22px]">
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              5
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              6
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              7
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                                8
                              </p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="flex items-center justify-center w-6 h-6 text-base font-medium text-indigo-700 hover:rounded-full hover:bg-indigo-700 hover:text-white">
                              9
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              10
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              11
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              12
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              13
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              14
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                            <p className="text-base font-medium text-gray-500 ">
                              15
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                            <p className="text-base font-medium text-gray-500 ">
                              16
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                            <p className="text-base font-medium text-gray-500 ">
                              17
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              18
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              19
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              20
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              21
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              22
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              23
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              24
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 ">
                            <p className="text-base font-medium text-gray-500 ">
                              25
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              26
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              27
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              28
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              29
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              30
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              31
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              1
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                            <p className="text-base font-medium text-gray-500 ">
                              2
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* date */}
            <div className="absolute bottom-[20px]    flex gap-x-3 items-center justify-between lg:max-w-[724px] w-full lg:flex-row flex-col lg:px-0 md:px-2 px-2 gap-y-4">
              <div className="absolute top-[-16px] md:left-2   flex items-start w-full lg:px-0 px-2 text-justify-start">
                <p className="text-sm leading-none text-left text-gray-600">
                  Select Date Range
                </p>
              </div>
              <div className="flex flex-col items-center justify-center w-full mt-2 lg:justify-start md:justify-start gap-x-3 lg:px-0 lg:flex-row md:flex-row gap-y-3">
                <p className="px-6 py-4 text-sm leading-none text-gray-600 bg-gray-100 rounded lg:max-w-[138px] w-full lg:text-left text-center">
                  DD / MM / YY
                </p>
                <svg
                  className="cursor-pointer w-[50px] lg:mt-0  lg:block md:block hidden"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.80584 3.71209C10.172 3.34597 10.7655 3.34597 11.1317 3.71209L16.7567 9.33709C17.1228 9.7032 17.1228 10.2968 16.7567 10.6629L11.1317 16.2879C10.7655 16.654 10.172 16.654 9.80584 16.2879C9.43972 15.9218 9.43972 15.3282 9.80584 14.9621L14.7679 10L9.80584 5.03791C9.43972 4.6718 9.43972 4.0782 9.80584 3.71209Z"
                    fill="#4B5563"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.96875 10C2.96875 9.48223 3.38848 9.0625 3.90625 9.0625H15.3125C15.8303 9.0625 16.25 9.48223 16.25 10C16.25 10.5178 15.8303 10.9375 15.3125 10.9375H3.90625C3.38848 10.9375 2.96875 10.5178 2.96875 10Z"
                    fill="#4B5563"
                  />
                </svg>
                <svg
                  className="cursor-pointer w-[50px] lg:hidden md:hidden block"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2879 9.80584C16.654 10.172 16.654 10.7655 16.2879 11.1317L10.6629 16.7567C10.2968 17.1228 9.7032 17.1228 9.33709 16.7567L3.71209 11.1317C3.34597 10.7655 3.34597 10.172 3.71209 9.80584C4.0782 9.43972 4.6718 9.43972 5.03791 9.80584L10 14.7679L14.9621 9.80584C15.3282 9.43972 15.9218 9.43972 16.2879 9.80584Z"
                    fill="#4B5563"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2.96875C10.5178 2.96875 10.9375 3.38848 10.9375 3.90625L10.9375 15.3125C10.9375 15.8303 10.5178 16.25 10 16.25C9.48223 16.25 9.0625 15.8303 9.0625 15.3125L9.0625 3.90625C9.0625 3.38848 9.48223 2.96875 10 2.96875Z"
                    fill="#4B5563"
                  />
                </svg>
                <p className="px-6 py-4 text-sm font-medium leading-none text-gray-800 border border-indigo-700 rounded lg:max-w-[138px] w-full lg:text-left text-center">
                  9 / 03 / 2022
                </p>
              </div>
              <div className="flex flex-col justify-end w-full lg:flex-row gap-x-4 gap-y-4 ">
                <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
                  Cancel
                </button>
                <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                  Set Date
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
