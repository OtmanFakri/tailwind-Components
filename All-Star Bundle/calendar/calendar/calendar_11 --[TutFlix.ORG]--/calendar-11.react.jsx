import React, { useEffect, useRef } from "react";

function index() {
  const divv_calendar_11 = useRef(null);

  useEffect(() => {
    document.addEventListener("click", () => {
      divv_calendar_11.classList.add("hidden");
    });
  }, []);
  function show_calendar_11(el) {
    document.querySelectorAll(".calen_calendar_11").forEach((el) => {
      if (!el.classList.contains("hidden")) {
        el.classList.add("hidden");
      }
    });
    document.getElementById("div1_calendar_11").classList.toggle("hidden");
  }
  function showDate_calendar_11(el) {
    document.querySelectorAll(".calen_calendar_11").forEach((el) => {
      if (
        !el.classList.contains("hidden") &&
        el !== document.getElementById("div2_calendar_11")
      ) {
        el.classList.add("hidden");
      }
    });
    document.getElementById("div2_calendar_11").classList.toggle("hidden");
    document.getElementById("cro_calendar_11").classList.toggle("rotate-90");
  }
  function showCal_calendar_11(el) {
    document.getElementById("div3_calendar_11").classList.toggle("hidden");
    document.getElementById("croo_calendar_11").classList.toggle("rotate-90");
  }
  function showDay_calendar_11(el) {
    divv_calendar_11.classList.toggle("hidden");
  }
  return (
    <>
    <div className="bg-gray-100">
     
      <div className="py-12 md:px-2 px-2">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[380px]  mx-auto ">
          <div className="mx-auto border border-gray-300 rounded">
            <div className=" flex justify-between items-center py-3">
              <div className="pl-4 lg:pt-0 md:pt-0 pt-4">
                <p className="text-base font-semibold leading-none text-gray-800">
                  {" "}
                  2022
                </p>
              </div>
              <div className="flex items-center  pr-4 ">
                <div className=" rounded lg:block md:block hidden bg-white px-7 py-3 cursor-pointer">
                  <div className="flex items-center ">
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
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800 ">
                        18 January
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
                          d="M4.56721 2.59846C4.31093 2.85474 4.31093 3.27026 4.56721 3.52654L8.04067 7L4.56721 10.4735C4.31093 10.7297 4.31093 11.1453 4.56721 11.40     C4.82349 11.6578 5.23901 11.6578 5.49529 11.4015L9.43279 7.46404C9.68907 7.20776 9.68907 6.79224 9.43279 6.53596L5.49529 2.59846C5.23901 2.34218 4.82349 2.34218 4.56721 2.59846Z"
                          fill="#4B5563"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="lg:block md:block hidden dropdown-one px-7  ">
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      showDay_calendar_11(e.target);
                    }}
                    id="drop-down-content-setter"
                    className="relative cursor-pointer"
                  >
                    <div className="flex items-center gap-3 bg-white px-7 py-3 rounded cursor-pointer">
                      <div>
                        <p className="text-sm font-medium leading-none  text-gray-800 cursor-pointer">
                          Monthly view
                        </p>
                        <div
                          className="bg-white mt-3 py-5 px-2 rounded min-w-[243px] absolute hidden shadow-lg left-0 top-8 cursor-pointer"
                          id="div4"
                        >
                          <p className="text-sm font-medium leading-none text-gray-800 border-b pb-4 cursor-pointer">
                            Daily
                          </p>
                          <p className="text-sm font-medium leading-none text-gray-800 pt-4 border-b pb-3 cursor-pointer">
                            Weekly
                          </p>
                          <p className="text-sm font-medium leading-none text-gray-800  pt-4 cursor-pointer">
                            Monthly
                          </p>
                        </div>
                      </div>
                      <div>
                        <svg
                          className="cursor-pointer "
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
                <div className>
                  <button className="text-sm font-medium leading-none text-white bg-indigo-700 px-7 py-[11px] rounded lg:block md:block hidden border">
                    Add event
                    <p />
                  </button>
                </div>
              </div>
              <div className="lg:hidden md:hidden block pr-3 relative">
                <div
                  onClick={(e) => {
                    show_calendar_11(e.target);
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
                  className="bg-white mt-6 min-w-[243px] lg:hidden md:hidden block px-3 py-5 rounded absolute right-0 hidden shadow-2xl cursor-pointer"
                  id="div1_calendar_11"
                >
                  <div
                    onClick={(e) => {
                      showDate_calendar_11(e.target);
                    }}
                    className="flex justify-between relative"
                  >
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800">
                        Select your view
                      </p>
                    </div>
                    <div>
                      <svg
                        id="cro_calendar_11"
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
                      className=" bg-white mt-3 py-5 px-4 rounded min-w-[243px]  absolute -right-3 shadow-2xl hidden cursor-pointer"
                      id="div2_calendar_11"
                    >
                      <p className="text-sm font-medium leading-none text-gray-800 border-b pb-4">
                        Daily
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-800 pt-4 border-b pb-3">
                        Weekly
                      </p>
                      <p className="text-sm font-medium leading-none text-gray-800  pt-4 ">
                        Monthly{" "}
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={(e) => {
                      showCal_calendar_11(e.target);
                    }}
                    className="flex justify-between pt-6  "
                  >
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800">
                        Set Date
                      </p>
                    </div>
                    <div>
                      <svg
                        id="croo_calendar_11"
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
                      className="calen_calendar_11 py-8  right-0 absolute top-20 hidden bg-white shadow-2xl px-10"
                      id="div3_calendar_11"
                    >
                      <div className="rounded-t">
                        <div className="px-2 flex items-center justify-between">
                          <div className="flex items-center justify-between md:gap-20 gap-5 w-full">
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
                              Feburary 2022
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
                          <table className="w-full">
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
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    30
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    31
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center ">
                                    1
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                                      2
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      3
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      4
                                    </p>
                                  </div>
                                </td>
                                <td className>
                                  <div className="px-2 py-2 cursor-pointer flex  justify-center">
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
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      10
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      11
                                    </p>
                                  </div>
                                </td>
                                <td className>
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      12
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b">
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      13
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      14
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className=" cursor-pointer flex justify-center">
                                    <p className="text-base text-indigo-700  font-medium  bg-indigo-50 px-2 py-1 rounded">
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
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      17
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      18
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      19
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr className="border-b ">
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      20
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      21
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      22
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      23
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      24
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      25
                                    </p>
                                  </div>
                                </td>
                                <td>
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500 ">
                                      26
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      27
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      28
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      1
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      2
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      3
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                    <p className="text-base text-gray-500  font-medium">
                                      4
                                    </p>
                                  </div>
                                </td>
                                <td className="border-r">
                                  <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
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
                  <div className="flex justify-between pt-6">
                    <div>
                      <p className="text-sm font-medium leading-none text-gray-800 ">
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
              </div>
            </div>
            <div className="bg-white py-6 px-2 mt-4 border-t border-gray-300">
              <div className="lg:flex md:block block justify-center items-center gap-8">
                <div className="pt-12">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-600 text-center">
                      January 2022
                    </p>
                  </div>
                  <table className="mt-4 lg:w-[470px] w-full">
                    <thead>
                      <tr>
                        <th>
                          <div className="w-full flex justify-center ">
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
                    <tbody className="border border-gray-300 rounded-full">
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center  text-gray-400">
                            26
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="py-1 cursor-pointer flex w-full justify-center text-gray-400">
                            27
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="py-1 cursor-pointer flex w-full justify-center text-gray-400">
                            28
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400  ">29</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400  ">30</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">31</p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800 font-medium  hover:bg-indigo-50 px-2 py-1 rounded">
                              1
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              2
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              4
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              5
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              6
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              7
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              8
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              9
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              10
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              11
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8  flex items-center justify-center font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                                12
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              13
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              14
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              15
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              16
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              17
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium bg-indigo-50 px-2 py-1 rounded">
                              18
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              19
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              20
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              21
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              22
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              23
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              24
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              25
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              26
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              27
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              28
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              29
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-t border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              30
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              31
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-400">1</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8 text-gray-400  flex items-center justify-center ">
                                2
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400  font-medium">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">4</p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">5</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="  pt-12   ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-600 text-center">
                      February 2022
                    </p>
                  </div>
                  <table className="mt-4 lg:w-[470px] w-full">
                    <thead>
                      <tr>
                        <th>
                          <div className="w-full flex justify-center ">
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
                    <tbody className="border border-gray-300 rounded-full">
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center  text-gray-400">
                            30
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="py-1 cursor-pointer flex w-full justify-center text-gray-400">
                            31
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="cursor-pointer flex w-full justify-center text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                            1
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              2
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              4
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              5
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              6
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              7
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              8
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              9
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              10
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              11
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              12
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              13
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              14
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              15
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8  flex items-center justify-center font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                                16
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              17
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              18
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              19
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              20
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              21
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              22
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              23
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              24
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              25
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              26
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              27
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              28
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base  text-gray-400 ">1</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">2</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">3</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">4</p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">5</p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-t border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">6</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">7</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-400">8</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8 text-gray-400  flex items-center justify-center ">
                                9
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">10</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">11</p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">12</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="lg:flex md:block block justify-center gap-8">
                <div className="  pt-12  mt-10  ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-600 text-center">
                      March 2022
                    </p>
                  </div>
                  <table className="mt-4  lg:w-[470px] w-full">
                    <thead>
                      <tr>
                        <th>
                          <div className="w-full flex justify-center ">
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
                    <tbody className="border border-gray-300 rounded-full">
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center  text-gray-400">
                            30
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="py-1 cursor-pointer flex w-full justify-center text-gray-400">
                            31
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="cursor-pointer flex w-full justify-center text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                            1
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              2
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              4
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              5
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              6
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              7
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              8
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              9
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              10
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              11
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              12
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              13
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              14
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50  rounded">
                              15
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8  flex items-center justify-center font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                                16
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              17
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              18
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              19
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              20
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              21
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              22
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              23
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              24
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              25
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              26
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              27
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              28
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base  text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              29
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base  text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              30
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base  text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              31
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">1</p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">2</p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-t border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">3</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">4</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-400">5</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8 text-gray-400  flex items-center justify-center ">
                                6
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400">7</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">8</p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">9</p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="pt-12  mt-10 ">
                  <div>
                    <p className="text-base font-medium leading-none text-gray-600 text-center">
                      April 2022
                    </p>
                  </div>
                  <table className="mt-4  lg:w-[470px] w-full">
                    <thead className>
                      <tr>
                        <th>
                          <div className="w-full flex justify-center ">
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
                    <tbody className="border border-gray-300 rounded-full">
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center  text-gray-400">
                            26
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="py-1 cursor-pointer flex w-full justify-center text-gray-400">
                            27
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300 ">
                          <div className="py-1 cursor-pointer flex w-full justify-center text-gray-400">
                            28
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400  ">29</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400  ">30</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">31</p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              1
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              2
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              4
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex  justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              5
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              6
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              7
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              8
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              9
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              10
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              11
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8  flex items-center justify-center font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                                12
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              13
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              14
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              15
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b border-b-gray-300 ">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              16
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              17
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              18
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              19
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              20
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              21
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800 font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              22
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              23
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              24
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              25
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              26
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              27
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              28
                            </p>
                          </div>
                        </td>
                        <td className>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              29
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-t border-b-gray-300">
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              30
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-800  font-medium hover:bg-indigo-50 px-2 py-1 rounded">
                              31
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className=" cursor-pointer flex justify-center">
                            <p className="text-base text-gray-400">1</p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="w-full h-full">
                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                              <p className="text-base w-8 h-8 text-gray-400  flex items-center justify-center ">
                                2
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400  font-medium">
                              3
                            </p>
                          </div>
                        </td>
                        <td className="border-r border-r-gray-300">
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">4</p>
                          </div>
                        </td>
                        <td>
                          <div className="py-1 cursor-pointer flex w-full justify-center">
                            <p className="text-base text-gray-400 ">5</p>
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
      </div>
      <style>
        {
          `
          @media (min-width:390px) {
            .calen{
            width: 375px;
            }
        }`
        }
      </style>
    </div>
    </>
  );
}

export default index;
