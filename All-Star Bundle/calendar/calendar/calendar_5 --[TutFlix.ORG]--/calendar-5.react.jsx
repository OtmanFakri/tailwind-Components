import { useEffect } from "react";

function index() {
  useEffect(() => {});

  const showDropDownMenu_calendar_5 = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext_calendar_5 = (el) => {
    const targetText = el.target.innerText;
    document.getElementById("drop-down-content-setter_calendar_5").innerText =
      targetText;
    document
      .getElementById("drop-down-div_calendar_5")
      .classList.toggle("hidden");
  };
  return (
    <>
      <div className="px-2 py-12">
        <div className="lg:max-w-[1000px]  w-full mx-auto lg:px-6 md:px-4 px-2 bg-white py-5">
          <div className="block w-full lg:hidden md:block">
            <div className="relative">
              <div className="relative w-full mt-2 border-b border-gray-200 outline-none">
                <button
                  onClick={showDropDownMenu_calendar_5}
                  className="relative flex items-center justify-between w-full px-5 py-4"
                >
                  <span
                    className="pr-4 text-base font-medium text-indigo-700"
                    id="drop-down-content-setter_calendar_5"
                  >
                    Custom
                  </span>
                  <div className="w-[24px] h-[24px] bg-gray-100 relative">
                    <svg
                      id="rotate"
                      className="absolute inset-x-0 inset-y-0 z-10 mx-auto my-auto cursor-pointer"
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
                  </div>
                </button>
                <div
                  className="absolute right-0 z-20 hidden w-full px-1 py-2 bg-white border-t border-gray-200 shadow top-12"
                  id="drop-down-div_calendar_5"
                >
                  <a href="javascript:void(0)" className="hover">
                    <p
                      className="p-3 text-base leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext_calendar_5}
                    >
                      Custom
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="p-3 text-base leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext_calendar_5}
                    >
                      Today
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="p-3 text-base leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext_calendar_5}
                    >
                      Yesterday
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="p-3 text-base leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext_calendar_5}
                    >
                      Last week
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="p-3 text-base leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext_calendar_5}
                    >
                      Last month
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="p-3 text-base leading-none text-gray-600 cursor-pointer hover:bg-indigo-100 hover:font-medium hover:text-indigo-700 hover:rounded"
                      onClick={swaptext_calendar_5}
                    >
                      Last 6 month
                    </p>
                  </a>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
          <div className="hidden border-b lg:block md:hidden">
            <div className="flex justify-between w-full px-8">
              <p className="pb-4 text-base leading-none text-gray-800 border-b border-transparent cursor-pointer hover:text-indigo-700 hover:font-medium hover:border-indigo-700 w-[95px] text-center">
                Custom
              </p>
              <p className="text-base leading-none text-gray-800 border-b border-transparent cursor-pointer hover:text-indigo-700 hover:font-medium hover:border-indigo-700 w-[95px] text-center">
                {" "}
                Today
              </p>
              <p className="text-base leading-none text-gray-800 border-b border-transparent cursor-pointer hover:text-indigo-700 hover:font-medium hover:border-indigo-700 w-[95px] text-center">
                Yesterday
              </p>
              <p className="text-base leading-none text-gray-800 border-b border-transparent cursor-pointer hover:text-indigo-700 hover:font-medium hover:border-indigo-700 w-[95px] text-center">
                Last week
              </p>
              <p className="text-base leading-none text-gray-800 border-b border-transparent cursor-pointer hover:text-indigo-700 hover:font-medium hover:border-indigo-700 w-[95px] text-center">
                Last month
              </p>
              <p className="text-base leading-none text-gray-800 border-b border-transparent cursor-pointer hover:text-indigo-700 hover:font-medium hover:border-indigo-700 w-[95px] text-center">
                Last 6 month
              </p>
            </div>
          </div>
          <div className="flex w-full gap-x-6 ">
            <div className="relative flex flex-col justify-center w-full lg:justify-center md:justify-between lg:gap-x-4 md:gap-x-6 lg:flex-row md:flex-row">
              <div className="flex items-center justify-center w-full px-2 py-8">
                <div className="lg:min-w-[346px] md:min-w-[324px]  w-full rounded-lg py-6    ">
                  <div className="flex items-center justify-between px-4 leading-8">
                    <div className="flex items-center ">
                      <button
                        className="p-1 text-gray-800 bg-gray-100 rounded focus:text-gray-400 hover:text-gray-400"
                        aria-label="calender backward"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.53125 4.375L3.90625 10L9.53125 15.625"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.6875 10H16.0938"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <a
                      tabIndex={0}
                      role="link"
                      className="text-base text-gray-600 cursor-pointer focus:text-gray-400 "
                    >
                      FEBURARY
                    </a>
                    <div className="hidden md:block lg:block" />
                    <div className="block lg:hidden md:hidden">
                      <div className="flex items-center ">
                        <button
                          aria-label="calender forward "
                          className="p-1 ml-3 text-gray-800 bg-gray-100 rounded focus:text-gray-400 hover:text-gray-400"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.4688 4.375L16.0938 10L10.4688 15.625"
                              stroke="#1F2937"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.3125 10H3.90625"
                              stroke="#1F2937"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
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
                              <p className="text-sm text-gray-800 ">1</p>
                            </div>
                          </td>
                          <td className="pt-6">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">2</p>
                            </div>
                          </td>
                          <td className="pt-6">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">3</p>
                            </div>
                          </td>
                          <td className="pt-6">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">4</p>
                            </div>
                          </td>
                          <td className="pt-[22px]">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">5</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">6</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">7</p>
                            </div>
                          </td>
                          <td>
                            <div className="w-full h-full">
                              <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                <a
                                  tabIndex={0}
                                  role="link"
                                  className="flex items-center justify-center text-sm text-gray-800 "
                                >
                                  8
                                </a>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">9</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">10</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">11</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">12</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">13</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">14</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                              <p className="text-sm text-gray-800 ">15</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm text-gray-800 hover:rounded ">
                                16
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                17
                              </p>
                            </div>
                          </td>
                          <td className>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                18
                              </p>
                            </div>
                          </td>
                          <td className>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                19
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                20
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                21
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                22
                              </p>
                            </div>
                          </td>
                          <td className>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                23
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                24
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                25
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                26
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                27
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                28
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                1
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                2
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                3
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                4
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
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
              <div className="flex items-center justify-center w-full px-2 pb-12 lg:py-8 md:py-8">
                <div className="lg:min-w-[346px] md:min-w-[324px]  w-full rounded-lg py-6   ">
                  <div className="flex items-center justify-between px-4 leading-8">
                    <div className="hidden md:block lg:block" />
                    <div className="block lg:hidden md:hidden">
                      <div className="flex items-center ">
                        <button
                          className="p-1 text-gray-800 bg-gray-100 rounded focus:text-gray-400 hover:text-gray-400"
                          aria-label="calender backward"
                        >
                          <svg
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.53125 4.375L3.90625 10L9.53125 15.625"
                              stroke="#1F2937"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4.6875 10H16.0938"
                              stroke="#1F2937"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <a
                      tabIndex={0}
                      role="link"
                      className="text-base text-gray-600 cursor-pointer focus:text-gray-400 "
                    >
                      MARCH
                    </a>
                    <div className="flex items-center ">
                      <button
                        aria-label="calender forward"
                        className="p-1 ml-3 text-gray-800 bg-gray-100 rounded focus:text-gray-400 hover:text-gray-400"
                      >
                        <svg
                          width={20}
                          height={20}
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.4688 4.375L16.0938 10L10.4688 15.625"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M15.3125 10H3.90625"
                            stroke="#1F2937"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-8 overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr>
                          <th>
                            <div className="flex justify-center w-full">
                              <p className="text-sm font-medium text-center text-gray-800 ">
                                Su
                              </p>
                            </div>
                          </th>
                          <th>
                            <div className="flex justify-center w-full">
                              <p className="text-sm font-medium text-center text-gray-800 ">
                                Mo
                              </p>
                            </div>
                          </th>
                          <th>
                            <div className="flex justify-center w-full">
                              <p className="text-sm font-medium text-center text-gray-800 ">
                                Tu
                              </p>
                            </div>
                          </th>
                          <th>
                            <div className="flex justify-center w-full">
                              <p className="text-sm font-medium text-center text-gray-800 ">
                                We
                              </p>
                            </div>
                          </th>
                          <th>
                            <div className="flex justify-center w-full">
                              <p className="text-sm font-medium text-center text-gray-800 ">
                                Th
                              </p>
                            </div>
                          </th>
                          <th>
                            <div className="flex justify-center w-full">
                              <p className="text-sm font-medium text-center text-gray-800 ">
                                Fr
                              </p>
                            </div>
                          </th>
                          <th>
                            <div className="flex justify-center w-full">
                              <p className="text-sm font-medium text-center text-gray-800 ">
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
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                1
                              </p>
                            </div>
                          </td>
                          <td className="pt-6">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                2
                              </p>
                            </div>
                          </td>
                          <td className="pt-6">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                3
                              </p>
                            </div>
                          </td>
                          <td className="pt-6">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                4
                              </p>
                            </div>
                          </td>
                          <td className="pt-[22px]">
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                5
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                6
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                7
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="w-full h-full">
                              <div className="flex items-center justify-center w-full rounded cursor-pointer">
                                <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                  8
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="flex items-center justify-center w-6 h-6 text-sm font-medium text-indigo-700 hover:rounded hover:bg-indigo-700 hover:text-white">
                                9
                              </p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">10</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">11</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">12</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">13</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">14</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                              <p className="text-sm text-gray-800 ">15</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                              <p className="text-sm text-gray-800 ">16</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                              <p className="text-sm text-gray-800 ">17</p>
                            </div>
                          </td>
                          <td className>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">18</p>
                            </div>
                          </td>
                          <td className>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">19</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">20</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">21</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">22</p>
                            </div>
                          </td>
                          <td className>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">23</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">24</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 ">
                              <p className="text-sm text-gray-800 ">25</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">26</p>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">27</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">28</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">29</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">30</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-800 ">31</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-300 ">1</p>
                            </div>
                          </td>
                          <td>
                            <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                              <p className="text-sm text-gray-300 ">2</p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="px-6 mb-5 text-base font-semibold leading-none text-left text-gray-800">
            Set your starting time
          </p>
          <div className="flex items-center mb-8 lg:px-6 lg:gap-x-6 gap-x-3">
            <div className="flex items-center gap-x-3">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 1.5L3.375 6L8.625 10.5L8.625 1.5Z"
                  fill="#4B5563"
                />
              </svg>
              <p className="text-sm leading-none text-center text-gray-600">
                04
              </p>
              <svg
                width={6}
                height={10}
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.375 0.5L5.625 5L0.375 9.5L0.375 0.5Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <p className="text-sm font-medium leading-none text-center text-gray-600">
              :
            </p>
            <div className="flex items-center gap-x-3">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 1.5L3.375 6L8.625 10.5L8.625 1.5Z"
                  fill="#4B5563"
                />
              </svg>
              <p className="text-sm leading-none text-center text-gray-600">
                16
              </p>
              <svg
                width={6}
                height={10}
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.375 0.5L5.625 5L0.375 9.5L0.375 0.5Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="text-sm leading-none text-center text-gray-600">
                PM
              </p>
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 8.625L6 3.375L10.5 8.625L1.5 8.625Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <div className="flex items-center justify-end px-3 py-2 bg-gray-100 rounded gap-x-3">
              <p className="text-sm leading-none text-center text-gray-600">
                04
              </p>
              <p className="text-sm font-medium leading-none text-center text-gray-600">
                :
              </p>
              <p className="text-sm leading-none text-center text-gray-600">
                16
              </p>
              <p className="text-sm leading-none text-center text-gray-600">
                PM
              </p>
            </div>
          </div>
          <p className="px-6 mb-5 text-base font-semibold leading-none text-left text-gray-800">
            Set your ending time
          </p>
          <div className="flex items-center lg:px-6 lg:gap-x-6 gap-x-3">
            <div className="flex items-center gap-x-3">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 1.5L3.375 6L8.625 10.5L8.625 1.5Z"
                  fill="#4B5563"
                />
              </svg>
              <p className="text-sm leading-none text-center text-gray-600">
                12
              </p>
              <svg
                width={6}
                height={10}
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.375 0.5L5.625 5L0.375 9.5L0.375 0.5Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <p className="text-sm font-medium leading-none text-center text-gray-600">
              :
            </p>
            <div className="flex items-center gap-x-3">
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.625 1.5L3.375 6L8.625 10.5L8.625 1.5Z"
                  fill="#4B5563"
                />
              </svg>
              <p className="text-sm leading-none text-center text-gray-600">
                05
              </p>
              <svg
                width={6}
                height={10}
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.375 0.5L5.625 5L0.375 9.5L0.375 0.5Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <div className="flex items-center gap-x-3">
              <p className="text-sm leading-none text-center text-gray-600">
                AM
              </p>
              <svg
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 8.625L6 3.375L10.5 8.625L1.5 8.625Z"
                  fill="#4B5563"
                />
              </svg>
            </div>
            <div className="flex items-center justify-end px-3 py-2 bg-gray-100 rounded gap-x-3">
              <p className="text-sm leading-none text-center text-gray-600">
                12
              </p>
              <p className="text-sm font-medium leading-none text-center text-gray-600">
                :
              </p>
              <p className="text-sm leading-none text-center text-gray-600">
                05
              </p>
              <p className="text-sm leading-none text-center text-gray-600">
                AM
              </p>
            </div>
          </div>
          <hr className="my-5 border-gray-100" />
          <div className="flex flex-col-reverse justify-end w-full lg:flex-row gap-x-4 gap-y-4 ">
            <button className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
              Cancel
            </button>
            <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[106px] w-full ">
              Set Date
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
