import React, { useEffect, useRef } from "react";

function index() {
  const divv_calendar_12 = useRef(null);

  useEffect(() => {
    document.addEventListener("click", () => {
      divv_calendar_12.current.classList.add("hidden");
    });
  }, []);
  function show_calendar_12(el) {
    document.querySelectorAll(".calen_calendar_12").forEach((el) => {
      if (!el.classList.contains("hidden")) {
        el.classList.add("hidden");
      }
    });
    document.getElementById("div1_calendar_12").classList.toggle("hidden");
  }
  function showDate_calendar_12(el) {
    document.querySelectorAll(".calen_calendar_12").forEach((el) => {
      if (
        !el.classList.contains("hidden") &&
        el !== document.getElementById("div2_calendar_12")
      ) {
        el.classList.add("hidden");
      }
    });
    document.getElementById("div2_calendar_12").classList.toggle("hidden");
    document.getElementById("cro_calendar_12").classList.toggle("rotate-90");
  }
  function showCal_calendar_12(el) {
    document.getElementById("div3_calendar_12").classList.toggle("hidden");
    document.getElementById("croo_calendar_12").classList.toggle("rotate-90");
  }

  function showDay_calendar_12(el) {
    divv_calendar_12.current.classList.toggle("hidden");
  }
  return (
    <>
      <div className="py-12 px-4 bg-gray-50">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto">
          <div className="lg:max-w-[1124px] md:max-w-[696px] max-w-[343px] mx-auto border rounded">
            <div className=" flex justify-between items-center py-3">
              <div className="pl-4 lg:pt-0 md:pt-0 pt-4">
                <p className="text-base font-semibold leading-none text-gray-800">
                  {" "}
                  2022
                </p>
              </div>
              <div className="flex items-center gap-5 pr-4 ">
                <div className="px-3 py-[7px] rounded lg:block md:block hidden bg-white lg:w-[121px] cursor-pointer">
                  <div className="flex items-center gap-2">
                    <div>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.43279 2.59846C9.68907 2.85474 9.68907 3.27026 9.43279 3.52654L5.95933 7L9.43279 10.4735C9.68907 10.7297 9.68907 11.1453 9.43279 11.4015C9.17651 11.6578 8.76099 11.6578 8.50471 11.4015L4.56721 7.46404C4.31093 7.20776 4.31093 6.79224 4.56721 6.53596L8.50471 2.59846C8.76099 2.34218 9.17651 2.34218 9.43279 2.59846Z"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>
                    <div>15 Feb</div>
                    <div>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.56721 2.59846C4.31093 2.85474 4.31093 3.27026 4.56721 3.52654L8.04067 7L4.56721 10.4735C4.31093 10.7297 4.31093 11.1453 4.56721 11.4015C4.82349 11.6578 5.23901 11.6578 5.49529 11.4015L9.43279 7.46404C9.68907 7.20776 9.68907 6.79224 9.43279 6.53596L5.49529 2.59846C5.23901 2.34218 4.82349 2.34218 4.56721 2.59846Z"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="lg:block md:block hidden dropdown-one lg:w-[121px]">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      showDay_calendar_12(e.target);
                    }}
                    id="drop-down-content-setter"
                    className="relative cursor-pointer"
                  >
                    <div className="flex items-center gap-3 bg-white px-3 py-3 rounded ">
                      <div>
                        <p className="text-sm font-medium leading-none text-gray-800">
                          Week view
                        </p>
                        <div
                          className="bg-white mt-3 py-5 px-4 rounded min-w-[243px] absolute hidden shadow-lg left-0 top-8"
                          id="div4"
                        >
                          <p className="text-sm font-medium leading-none text-gray-800 border-b pb-4">
                            Daily
                          </p>
                          <p className="text-sm font-medium leading-none text-gray-800 pt-4 border-b pb-3">
                            Weekly
                          </p>
                          <p className="text-sm font-medium leading-none text-gray-800  pt-4 ">
                            Monthly
                          </p>
                        </div>
                      </div>
                      <div>
                        <svg
                          width={14}
                          height={14}
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.4015 4.56721C11.1453 4.31093 10.7297 4.31093 10.4735 4.56721L7 8.04067L3.52654 4.56721C3.27026 4.31093 2.85474 4.31093 2.59846 4.56721C2.34218 4.82349 2.34218 5.23901 2.59846 5.49529L6.53596 9.43279C6.79224 9.68907 7.20776 9.68907 7.46404 9.43279L11.4015 5.49529C11.6578 5.23901 11.6578 4.82349 11.4015 4.56721Z"
                            fill="#4B5563"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="text-sm font-medium leading-none text-white bg-indigo-700 px-7 py-3 rounded lg:block md:block hidden">
                    Add event
                    <p />
                  </button>
                </div>
              </div>
              <div className="lg:hidden md:hidden block pr-3 relative ">
                <div
                  onClick={(e) => {
                    show_calendar_12(e.target);
                  }}
                >
                  <svg
                    className="cursor-pointer mt-3"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M19.5 14.25C20.7426 14.25 21.75 13.2426 21.75 12C21.75 10.7574 20.7426 9.75 19.5 9.75C18.2574 9.75 17.25 10.7574 17.25 12C17.25 13.2426 18.2574 14.25 19.5 14.25Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M4.5 14.25C5.74264 14.25 6.75 13.2426 6.75 12C6.75 10.7574 5.74264 9.75 4.5 9.75C3.25736 9.75 2.25 10.7574 2.25 12C2.25 13.2426 3.25736 14.25 4.5 14.25Z"
                      fill="#4B5563"
                    />
                  </svg>
                </div>
                <div
                  className="bg-white mt-6 min-w-[243px] lg:hidden md:hidden block px-3 py-5 rounded absolute right-0 hidden shadow-lg"
                  id="div1_calendar_12"
                >
                  <div
                    onClick={(e) => {
                      showDate_calendar_12(e.target);
                    }}
                    className="flex justify-between relative cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800 cursor-pointer">
                        Select your view
                      </p>
                    </div>
                    <div>
                      <svg
                        id="cro_calendar_12"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.56721 2.59846C4.31093 2.85474 4.31093 3.27026 4.56721 3.52654L8.04067 7L4.56721 10.4735C4.31093 10.7297 4.31093 11.1453 4.56721 11.4015C4.82349 11.6578 5.23901 11.6578 5.49529 11.4015L9.43279 7.46404C9.68907 7.20776 9.68907 6.79224 9.43279 6.53596L5.49529 2.59846C5.23901 2.34218 4.82349 2.34218 4.56721 2.59846Z"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>
                    <div
                      className=" bg-white mt-3 py-5 px-4 rounded min-w-[243px] absolute -right-3 hidden shadow-lg cursor-pointer"
                      id="div2_calendar_12"
                    >
                      <p className="text-sm font-medium leading-none text-gray-800 border-b pb-4 cursor-pointer">
                        Daily
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-800 pt-4 border-b pb-3 cursor-pointer">
                        Weekly
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-800  pt-4 cursor-pointer">
                        Monthly{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={(e) => {
                      showCal_calendar_12(e.target);
                    }}
                    className="flex justify-between pt-6  cursor-pointer"
                  >
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800 cursor-pointer">
                        Set Date
                      </p>
                    </div>
                    <div>
                      <svg
                        className="cursor-pointer"
                        id="croo_calendar_12"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.56721 2.59846C4.31093 2.85474 4.31093 3.27026 4.56721 3.52654L8.04067 7L4.56721 10.4735C4.31093 10.7297 4.31093 11.1453 4.56721 11.4015C4.82349 11.6578 5.23901 11.6578 5.49529 11.4015L9.43279 7.46404C9.68907 7.20776 9.68907 6.79224 9.43279 6.53596L5.49529 2.59846C5.23901 2.34218 4.82349 2.34218 4.56721 2.59846Z"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>
                    <div
                      className="calen_calendar_12 py-8 px-1  right-0 absolute top-20 hidden bg-white shadow-lg"
                      id="div3_calendar_12"
                    >
                      <div className="  rounded-t">
                        <div className="px-4 flex items-center justify-between">
                          <div className="flex items-center justify-between md:gap-20 gap-5 w-full ">
                            <button
                              aria-label="calendar backward"
                              className="focus:text-gray-400 hover:text-gray-400 text-gray-800 bg-indigo-50"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-chevron-left"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <polyline points="15 6 9 12 15 18" />
                              </svg>
                            </button>
                            <span
                              tabIndex={0}
                              className="focus:outline-none  text-base font-bold 0 text-gray-800"
                            >
                              Feburary 2023
                            </span>
                            <button
                              aria-label="calendar forward"
                              className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 bg-indigo-50"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler  icon-tabler-chevron-right"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path
                                  stroke="none"
                                  d="M0 0h24v24H0z"
                                  fill="none"
                                />
                                <polyline points="9 6 15 12 9 18" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="  pt-12">
                          <table className="md:w-full">
                            <thead>
                              <tr>
                                <th>
                                  <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 ">
                                      Su
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 ">
                                      Mo
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 ">
                                      Tu
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 ">
                                      We
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 ">
                                      Th
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 ">
                                      Fr
                                    </p>
                                  </div>
                                </th>
                                <th>
                                  <div className="w-full flex justify-center">
                                    <p className="text-base font-medium text-center text-gray-800 ">
                                      Sa
                                    </p>
                                  </div>
                                </th>
                              </tr>
                            </thead>
                            <tbody className="border">
                              <tr className="border-b">
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    30
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    31
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    1
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      2
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      3
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      4
                                    </p>
                                  </div>
                                </td>
                                <td className>
                                  <div className="px-3 py-2 cursor-pointer flex  justify-center">
                                    <p className="text-base text-gray-500 ">
                                      5
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="border-r">
                                  <div className=" cursor-pointer flex justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      6
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className=" cursor-pointer flex  justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      7
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className=" cursor-pointer flex  justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      8
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className=" cursor-pointer flex  justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      9
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      10
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      11
                                    </p>
                                  </div>
                                </td>
                                <td className>
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      12
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      13
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      14
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className=" cursor-pointer flex justify-center">
                                    <p className="text-base text-indigo-700  font-medium  bg-indigo-50 px-3 py-1 rounded">
                                      15
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="w-full h-full">
                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                      <p className="text-base w-8 h-8  flex items-center justify-center ">
                                        16
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      17
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      18
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      19
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b ">
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      20
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      21
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      22
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      23
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      24
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      25
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      26
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      27
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      28
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      1
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      2
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      3
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      4
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
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
                  </div>
                  <div className="flex justify-between pt-6 cursor-pointer">
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800">
                        Add Event
                      </p>
                    </div>
                    <div>
                      <svg
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.56721 2.59846C4.31093 2.85474 4.31093 3.27026 4.56721 3.52654L8.04067 7L4.56721 10.4735C4.31093 10.7297 4.31093 11.1453 4.56721 11.4015C4.82349 11.6578 5.23901 11.6578 5.49529 11.4015L9.43279 7.46404C9.68907 7.20776 9.68907 6.79224 9.43279 6.53596L5.49529 2.59846C5.23901 2.34218 4.82349 2.34218 4.56721 2.59846Z"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
            {/*  */}
            <div className="lg:hidden md:hidden block pt-3 bg-white mt-4">
              <table>
                <tbody>
                  <tr>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 ">
                          Su
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 ">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 ">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 ">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 ">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 ">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 ">
                          Sa
                        </p>
                      </div>
                    </th>
                  </tr>
                  <tr className="border-b">
                    <td className>
                      <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500  font-medium">
                          13
                        </p>
                      </div>
                    </td>
                    <td className>
                      <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500  font-medium">
                          14
                        </p>
                      </div>
                    </td>
                    <td className>
                      <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-indigo-700  font-medium  bg-indigo-50 px-3 py-1 rounded">
                          15
                        </p>
                      </div>
                    </td>
                    <td className>
                      <div className="w-full h-full">
                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                          <p className="text-base w-8 h-8  flex items-center justify-center ">
                            16
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className>
                      <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500  font-medium">
                          17
                        </p>
                      </div>
                    </td>
                    <td className>
                      <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 ">18</p>
                      </div>
                    </td>
                    <td>
                      <div className="px-3 py-2 cursor-pointer flex w-full justify-center">
                        <p className="text-base text-gray-500 ">19</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="lg:block md:block hidden">
                <table className="w-full mt-4  ">
                  <thead className="cursor-pointer">
                    <tr className="border">
                      <td className="xl:w-[56px] lg:w-[40px] w-[56px] pointer-events-none" />
                      <td className="text-center  xl:w-[163px] lg:w-[114px] w-[99px] text-sm text-gray-600 font-normal border">
                        <div className="hover:border-indigo-700 hover:bg-indigo-50 border">
                          Su <span className="font-bold">11</span>
                        </div>
                      </td>
                      <td className="text-center  xl:w-[148px] lg:w-[80px] w-[90px] text-sm text-gray-600 font-normal">
                        <div className="hover:border-indigo-700 hover:bg-indigo-50 border">
                          Mon <span className="font-bold">12</span>
                        </div>
                      </td>
                      <td className="text-center  xl:w-[148px] lg:w-[115px] w-[90px]  text-sm text-gray-600 font-normal">
                        <div className="hover:border-indigo-700 hover:bg-indigo-50 border">
                          Tue <span className="font-bold">13</span>
                        </div>
                      </td>
                      <td className="text-center  xl:w-[148px] lg:w-[80px] w-[90px] text-sm text-gray-600 font-normal">
                        <div className="hover:border-indigo-700 hover:bg-indigo-50 border">
                          Wed <span className="font-bold">14</span>
                        </div>
                      </td>
                      <td className="text-center  xl:w-[148px] lg:w-[90px] w-[85px]  text-sm text-gray-600 font-normal">
                        <div className="hover:border-indigo-700 hover:bg-indigo-50 border">
                          Thus <span className="font-bold">15</span>
                        </div>
                      </td>
                      <td className="text-center  xl:w-[148px] lg:w-[110px] w-[95px] text-sm text-gray-600 font-normal">
                        <div className="hover:border-indigo-700 hover:bg-indigo-50 border">
                          Fri <span className="font-bold">16</span>
                        </div>
                      </td>
                      <td className="text-center  xl:w-[148px] lg:w-[80px] w-[90px] text-sm text-gray-600 font-normal">
                        <div className="hover:border-indigo-700 hover:bg-indigo-50 border">
                          Sat <span className="font-bold">17</span>
                        </div>
                      </td>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="lg:hidden md:hidden block ">
                <div className="flex-col  flex-1 bg-white border-t border-gray-300">
                  <div className=" w-full flex items-center -mt-3 pt-8">
                    <p className="px-2">5AM</p>
                    <div className="border ml-3 w-full   h-40 bg-cyan-50 ">
                      <div className=" w-full  rounded px-7 p-3">
                        <p className="text-xs leading-3 text-green-600">
                          05:00 am
                        </p>
                        <p className="text-xs font-semibold leading-3 text-green-600 pt-2">
                          Gym
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 flex items-center -mt-3">
                    <p className="px-2">6AM</p>
                    <div className="border ml-3 w-full  h-40">
                      <div className="  m-3 px-7 p-3 "></div>
                    </div>
                  </div>
                  <div className="pt-3 flex items-center -mt-3">
                    <p className="px-2">7AM</p>
                    <div className="border w-full  h-40  bg-pink-50 rounded ml-3">
                      <div className="  px-7 p-3 m-3">
                        <p className="text-xs leading-3 text-pink-700">
                          07:00 am
                        </p>
                        <p className="text-xs font-semibold leading-3 text-pink-700 pt-2">
                          Meeting with clint
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 flex items-center -mt-3">
                    <p className="px-2">8AM</p>
                    <div className="border ml-3 w-full  h-40 ">
                      <div className=" m-3 px-7 p-3 "></div>
                    </div>
                  </div>
                  <div>
                    <div className="pt-3 flex items-center -mt-3 ">
                      <p className="px-2">9AM</p>
                      <div className="border w-full  h-40   ml-3">
                        <div className=" px-7 p-3 "></div>
                      </div>
                    </div>
                    <div className="pt-3 flex items-center -mt-3">
                      <p className="px-2">10AM</p>
                      <div className="border w-full  h-40     ml-1">
                        <div className=" px-7 p-3 "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:block md:block hidden">
                <div className="flex ">
                  <div className="bg-white">
                    <p className="pt-20 px-2">5PM</p>
                    <p className="pt-32 px-2">6PM</p>
                    <p className="pt-32 px-2">7PM</p>
                    <p className="pt-32 px-2">8PM</p>
                    <p className="pt-32 px-2">9PM</p>
                    <p className="pt-32 px-2">10PM</p>
                  </div>
                  <table className="bg-white pl-24">
                    <tbody>
                      <tr>
                        <th></th>
                      </tr>
                    </tbody>
                    <tbody className>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td>
                          <div className="lg:w-40 md:w-24 h-20 border-l border-r border-b  ">
                            <div className="bg-cyan-50 mx-2 h-full rounded">
                              <p className="text-xs leading-3 text-green-600 px-2 pt-2 pb-2">
                                05:00 am
                              </p>
                              <p className="text-xs font-semibold leading-3 text-green-600 px-2 py-2">
                                Gym
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-b "></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-r  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r border-b ">
                            <div className="bg-cyan-50 mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20   border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-r  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-r border-b "></td>
                        <td className="lg:w-40 md:w-24 h-20  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-r  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-r  border-b "></td>
                        <td className="lg:w-40 md:w-24 h-20  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className=" ">
                          <div className="lg:w-40 md:w-24 h-20 border-l border-r  border-b ">
                            <div className="bg-[#FAF5FF] h-full mx-2  rounded">
                              <p className="text-xs leading-3 text-green-600 px-2 pt-2">
                                07:00 am
                              </p>
                              <p className="text-xs font-semibold leading-3 text-green-600 px-2 py-2">
                                Office
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className=" ">
                          <div className="lg:w-40 md:w-24 h-20 border-l border-r  border-b ">
                            <div className="bg-pink-50 h-full mx-2  rounded">
                              <p className="text-xs leading-3 text-pink-700 px-2 pt-2">
                                08:00 am
                              </p>
                              <p className="text-xs font-semibold leading-3 text-pink-700 px-2 py-2">
                                Office Meeting
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20   border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-[#FAF5FF] mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-pink-50 mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20   border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-[#FAF5FF] mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-pink-50 mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20 border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-[#FAF5FF] mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-pink-50 mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20   border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-[#FAF5FF] mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-20 border-l border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-pink-50 mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b "></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-[#FAF5FF] mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td>
                          <div className="lg:w-40 md:w-24 h-20 border-l border-b  ">
                            <div className="bg-gray-100 h-full mx-2 rounded">
                              <p className="text-xs leading-3 line-through text-gray-500 px-2 ">
                                09:30 am
                              </p>
                              <p className="text-xs font-semibold leading-3 line-through text-gray-500 px-2 ">
                                Doctor’s visit
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-pink-50 mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-[#FAF5FF] mx-2 h-full -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1  border-b ">
                            <div className="bg-gray-100 mx-2 h-full  -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td>
                          <div className="lg:w-40 md:w-24 h-20 border-l border-r   border-b "></div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-20 border-l  border-b"></td>
                        <td className>
                          <div className="lg:w-40 md:w-24 h-24 border-l pb-1 border-r  border-b ">
                            <div className="bg-[#FAF5FF] mx-2 h-full rounded -mt-2 " />
                          </div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-r  border-b"></td>
                      </tr>
                      <tr>
                        <td className="lg:w-40 md:w-24 h-24 border-l border-b">
                          <div className="-mt-2"></div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-20  border-l  border-b"></td>
                        <td>
                          <div className="lg:w-40 md:w-24 h-24 border-l border-r  border-b "></div>
                        </td>
                        <td className="lg:w-40 md:w-24 h-24  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-24 border-l  border-b"></td>
                        <td className="lg:w-40 md:w-24 h-24 border-l border-r  border-b "></td>
                        <td className="lg:w-40 md:w-24 h-24  border-r  border-b"></td>
                      </tr>
                    </tbody>
                  </table>
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
