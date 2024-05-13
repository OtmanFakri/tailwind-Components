import React from "react";

function index() {
  return (
    <>
      <div className="flex items-center justify-center px-2 py-8">
        <div className="lg:max-w-[452px] md:max-w-[516px] max-w-[343px] w-full rounded-md shadow-lg py-8 px-2 bg-white ">
          <div className="flex items-center justify-between px-4 leading-8">
            <a
              tabIndex={0}
              role="link"
              className="lg:text-xl md:text-xl text-lg font-semibold text-gray-800 cursor-pointer  "
            >
              July 2022
            </a>
            <div className="flex items-center ">
              <button
                className="text-gray-800 focus:text-gray-400 hover:text-gray-400"
                aria-label="calender backward"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.25 3.5L5.75 8L10.25 12.5"
                    stroke="#64748B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                aria-label="calender forward"
                className="ml-3 text-gray-800 focus:text-gray-400 hover:text-gray-400"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 12.5L10.25 8L5.75 3.5"
                    stroke="#64748B"
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
                  <th>
                    <div className="flex justify-center w-full">
                      <p className="text-base font-medium text-center text-gray-800 ">
                        Su
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-6">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer" />
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer" />
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer" />
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">1</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">2</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">3</p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">4</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2" />
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">5</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">6</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">7</p>
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
                      <p className="text-base font-medium text-gray-500 ">9</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">10</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">11</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2" />
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">12</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">13</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">14</p>
                    </div>
                  </td>
                  <td className="bg-indigo-700 rounded-l">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-white ">15</p>
                    </div>
                  </td>
                  <td className="bg-indigo-100">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-indigo-700 ">
                        16
                      </p>
                    </div>
                  </td>
                  <td className="bg-indigo-100">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-indigo-700 ">
                        17
                      </p>
                    </div>
                  </td>
                  <td className="bg-indigo-100 rounded-r">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-indigo-700 ">
                        18
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2" />
                </tr>
                <tr>
                  <td className="bg-indigo-100 rounded-l ">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-indigo-700 ">
                        19
                      </p>
                    </div>
                  </td>
                  <td className="bg-indigo-100">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-indigo-700 ">
                        20
                      </p>
                    </div>
                  </td>
                  <td className="bg-indigo-100">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-indigo-700 ">
                        21
                      </p>
                    </div>
                  </td>
                  <td className="bg-indigo-100">
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                      <p className="text-base font-medium text-indigo-700 ">
                        22
                      </p>
                    </div>
                  </td>
                  <td className="bg-indigo-700 rounded-r">
                    <div className="flex justify-center w-full px-2 py-2 bg-indigo-700 rounded cursor-pointer">
                      <p className="text-base font-medium text-white ">23</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">24</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">25</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2" />
                </tr>
                <tr>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">26</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">27</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">28</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">29</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">30</p>
                    </div>
                  </td>
                  <td>
                    <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                      <p className="text-base font-medium text-gray-500 ">31</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="my-5 border border-gray-100" />
          <div className="flex flex-col justify-start px-4">
            <p className="mb-2 lg:text-xl md:text-xl text-lg font-semibold leading-tight text-gray-800 text-start">
              Set Time Here
            </p>
            {/* 
          <input type="time" name="" id=""> */}
            <div className="flex justify-between mt-8">
              <div className="flex flex-row gap-x-6">
                <svg
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.25 3.5L5.75 8L10.25 12.5"
                    stroke="#64748B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium leading-none text-center text-gray-600">
                  04
                </p>
                <svg
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 12.5L10.25 8L5.75 3.5"
                    stroke="#64748B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium leading-none text-center text-gray-600">
                  :
                </p>
                <svg
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.25 3.5L5.75 8L10.25 12.5"
                    stroke="#64748B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-base font-medium leading-none text-center text-gray-600">
                  16
                </p>
                <svg
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 12.5L10.25 8L5.75 3.5"
                    stroke="#64748B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex justify-end gap-x-4">
                <p className="text-base font-medium leading-none text-center text-gray-600">
                  AM
                </p>
                <svg
                  className="cursor-pointer"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 10.25L8 5.75L3.5 10.25"
                    stroke="#64748B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
