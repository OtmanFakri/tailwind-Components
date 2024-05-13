import React from "react";

function index() {
  return (
    <>
      <div>
        <div className="w-full px-5 py-10 mx-auto">
          <div className="hidden lg:block md:block">
            <div className="flex flex-col bg-white lg:flex-row gap-y-2">
              <div className="px-5 border-r min-w-[190px] lg:py-10 flex lg:flex-col flex-row  md:justify-between lg:justify-start gap-x-2 lg:items-start md:items-center">
                <p className="text-sm font-semibold leading-none text-gray-800">
                  Calendar{" "}
                </p>
                <div className="flex items-center my-6 gap-x-3">
                  <div className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></div>
                  <p className="text-xs leading-3 text-gray-600">Business</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="w-2.5 h-2.5 bg-[#DC2626] rounded-sm"></div>
                  <p className="text-xs leading-3 text-gray-600">Personal</p>
                </div>
                <div className="flex items-center my-6 gap-x-3">
                  <div className="w-2.5 h-2.5 bg-[#EA580C] rounded-sm"></div>
                  <p className="text-xs leading-3 text-gray-600">Family</p>
                </div>
                <div className="flex items-center gap-x-3">
                  <div className="w-2.5 h-2.5 bg-[#16A34A] rounded-sm"></div>
                  <p className="text-xs leading-3 text-gray-600">Holiday</p>
                </div>
                <div className="flex items-center my-6 gap-x-3">
                  <div className="w-2.5 h-2.5 bg-[#0891B2] rounded-sm"></div>
                  <p className="text-xs leading-3 text-gray-600">
                    Miscellaneous
                  </p>
                </div>
              </div>
              <div className="w-full xl:overflow-x-hidden">
                <table className="min-w-full bg-white ">
                  <thead className="items-center">
                    <tr className="h-20 ">
                      <th className="px-10 border-b border-r">
                        <p className="text-sm font-medium text-center text-gray-600 cursor-pointer ">
                          Sun
                        </p>
                      </th>
                      <th className="px-10 border-b border-r">
                        <p className="text-sm font-medium text-center text-gray-600 cursor-pointer ">
                          Mon{" "}
                        </p>
                      </th>
                      <th className="px-10 border-b border-r">
                        <p className="text-sm font-medium text-center text-gray-600 cursor-pointer ">
                          Tue
                        </p>
                      </th>
                      <th className="px-10 border-b border-r">
                        <p className="text-sm font-medium text-center text-gray-600 cursor-pointer ">
                          Wed
                        </p>
                      </th>
                      <th className="px-10 border-b ">
                        <p className="text-sm font-medium text-center text-gray-600 cursor-pointer ">
                          Thu
                        </p>
                      </th>
                      <th className="px-10 border-b border-l">
                        <p className="text-sm font-medium text-center text-gray-600 cursor-pointer ">
                          Fri
                        </p>
                      </th>
                      <th className="px-10 border-b border-l">
                        <p className="text-sm font-medium text-center text-gray-600 cursor-pointer ">
                          Sat
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 ">
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          27
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          28
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          29
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          30
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          31
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          1
                        </p>
                        <div className="absolute flex items-center 2xl:w-[20%] md:w-40 py-2 ml-[1px] mt-[-80px] border-l-4 border-indigo-700 rounded bg-indigo-50 xl:w-[20%] lg:w-[20%] ">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-indigo-700 ">
                              Design Review
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          2
                        </p>
                      </td>
                    </tr>
                    <tr className="relative w-full border-b border-gray-300 ">
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          3
                        </p>
                      </td>
                      <td className="relative border-r border-gray-300 xl:static ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          4
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          5
                        </p>
                        <div className="absolute flex items-center 2xl:w-40 md:w-24 py-2 ml-[1px] mt-[-80px] border-l-4 border-[#0891B2] rounded bg-[#ECFEFF] xl:w-[12%] ">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-[#0891B2] ">
                              Paragliding
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="relative border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          6
                        </p>
                        <div className="absolute flex items-center ml-4 -mt-16"></div>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          7
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          8
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          9
                        </p>
                      </td>
                    </tr>
                    <tr className="relative border-b border-gray-300 ">
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          10
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          11
                        </p>
                      </td>
                      <td className="relative border-r border-gray-300 xl:static ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          12
                        </p>
                        <div className="absolute flex items-center 2xl:w-40 md:w-24  py-2 ml-[1px] mt-[-80px] border-l-4 border-[#EA580C] rounded bg-[#FFF7ED] xl:w-[12%] ">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-[#EA580C] ">
                              Family Dinner
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          13
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          14
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          15
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          16
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 ">
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          17
                        </p>
                        <div className="absolute flex items-center 2xl:w-40 md:w-24  py-2 ml-[1px] mt-[-80px] border-l-4 border-[#EA580C] rounded bg-[#FFF7ED] xl:w-[9%] ">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-[#EA580C] ">
                              Dart Game
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          18
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          19
                        </p>
                        <div className="absolute flex items-center 2xl:w-40 md:w-24  py-2 ml-[1px] mt-[-80px] border-l-4 border-[#DC2626] rounded bg-[#FEF2F2] xl:w-[9%] ">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-[#DC2626] ">
                              Doctor’s Visit
                            </p>
                          </div>
                        </div>
                        <div className="absolute flex items-center 2xl:w-40 md:w-24  py-2 ml-[1px] mt-[-45px] border-l-4 border-indigo-700 rounded bg-indigo-50 xl:w-[9%] ">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-indigo-700 ">
                              Client Meeting
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          20
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          21
                        </p>
                        <div className="absolute flex items-center 2xl:w-[33%] md:w-[270px] py-2 ml-[1px] mt-[-80px] border-l-4 border-[#16A34A] rounded bg-[#F0FDF4] xl:w-[33%]  lg:w-[31%]">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-[#16A34A] ">
                              Family Trip
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          22
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          23
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 ">
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          24
                        </p>
                        <div className="absolute flex items-center 2xl:w-[61%] md:w-[65%] py-2 ml-[1px] mt-[-80px] border-l-4 border-indigo-700 rounded bg-indigo-50 xl:w-[58%] lg:w-[54%] ">
                          <div tabIndex={0} className="ml-1">
                            <p className="text-xs font-medium leading-3 text-indigo-700 ">
                              Seminar 2023
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          25
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          26
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          27
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600 ">
                          28
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          29
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-600">
                          30
                        </p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300 ">
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          1
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          2
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          3
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          4
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400 ">
                          5
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400">
                          6
                        </p>
                      </td>
                      <td className="border-r border-gray-300 ">
                        <p className="pt-2 pb-24 pl-2 text-xs text-gray-400">
                          7
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="block lg:hidden md:hidden">
            <div className="flex flex-wrap items-center px-5 bg-white border-r custom_calendar_6 lg:py-10 gap-x-5">
              <div className="w-full mt-6 mb-4">
                <p className="text-sm font-semibold leading-none text-gray-800">
                  Calendar{" "}
                </p>
              </div>
              <div className="flex items-center my-6 gap-x-3">
                <div className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></div>
                <p className="text-xs leading-3 text-gray-600">Business</p>
              </div>
              <div className="flex items-center gap-x-3">
                <div className="w-2.5 h-2.5 bg-[#DC2626] rounded-sm"></div>
                <p className="text-xs leading-3 text-gray-600">Personal</p>
              </div>
              <div className="flex items-center my-6 gap-x-3">
                <div className="w-2.5 h-2.5 bg-[#EA580C] rounded-sm"></div>
                <p className="text-xs leading-3 text-gray-600">Family</p>
              </div>
              <div className="flex items-center gap-x-3 ">
                <div className="w-2.5 h-2.5 bg-[#16A34A] rounded-sm"></div>
                <p className="text-xs leading-3 text-gray-600">Holiday</p>
              </div>
              <div className="flex items-center  gap-x-3 ml-[5px]">
                <div className="w-2.5 h-2.5 bg-[#0891B2] rounded-sm"></div>
                <p className="text-xs leading-3 text-gray-600">Miscellaneous</p>
              </div>
              <div />
            </div>
            {/*  */}
            <div className="flex items-center justify-between w-full px-1 pt-8 overflow-x-auto bg-white">
              <table className="w-full ">
                <thead>
                  <tr>
                    <th>
                      <div className="flex justify-center w-full">
                        <p className="text-sm font-medium text-center text-gray-600 ">
                          Su
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="flex justify-center w-full">
                        <p className="text-sm font-medium text-center text-gray-600 ">
                          Mo
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="flex justify-center w-full">
                        <p className="text-sm font-medium text-center text-gray-600 ">
                          Tu
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="flex justify-center w-full">
                        <p className="text-sm font-medium text-center text-gray-600 ">
                          We
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="flex justify-center w-full">
                        <p className="text-sm font-medium text-center text-gray-600 ">
                          Th
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="flex justify-center w-full">
                        <p className="text-sm font-medium text-center text-gray-600 ">
                          Fr
                        </p>
                      </div>
                    </th>
                    <th>
                      <div className="flex justify-center w-full">
                        <p className="text-sm font-medium text-center text-gray-600 ">
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
                        <p className="text-sm text-gray-400">27</p>
                      </div>
                    </td>
                    <td className="pt-[22px]">
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-sm text-gray-400">28</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-400 ">29</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-400 ">30</p>
                      </div>
                    </td>
                    <td className="pt-6">
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-400 ">31</p>
                      </div>
                    </td>
                    <td className="pt-6 ">
                      <div className="relative flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">1</p>
                        <div className="absolute flex items-center w-[60px] py-[2px] ml-[55px] mt-4  border-l-4 border-indigo-700 rounded-full bg-indigo-50  ">
                          {" "}
                        </div>
                      </div>
                    </td>
                    <td className="pt-[22px]">
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">2</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">3</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">4</p>
                      </div>
                    </td>
                    <td>
                      <div className="w-full h-full">
                        <div className="relative flex items-center justify-center w-full rounded-full cursor-pointer">
                          <a
                            tabIndex={0}
                            role="link"
                            className="flex items-center justify-center text-xs text-gray-600 "
                          >
                            5
                          </a>
                          <div className="absolute flex items-center w-6 py-[2px] ml-[20px] mt-6  border-l-4 border-[#0891B2] rounded-full bg-[#ECFEFF]  ">
                            {" "}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">6</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">7</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">8</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">9</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">10</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="text-xs text-gray-600 ">11</p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                        <p className="text-xs text-gray-600 ">12</p>
                        <div className="absolute flex items-center w-6 py-[2px] ml-[15px] mt-5  border-l-4 border-[#EA580C] rounded-full bg-[#FFF7ED]  ">
                          {" "}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 hover:rounded ">
                          13
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          14
                        </p>
                      </div>
                    </td>
                    <td className>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          15
                        </p>
                      </div>
                    </td>
                    <td className>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          16
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          17
                        </p>
                        <div className="absolute flex items-center w-6 py-[2px] ml-[15px] mt-5  border-l-4 border-[#EA580C] rounded-full bg-[#FFF7ED]  ">
                          {" "}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          18
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          19
                        </p>
                        <div className="absolute flex items-center w-6 py-[2px] ml-[15px] mt-5  border-l-4 border-[#DC2626] rounded-full bg-[#FEF2F2]  ">
                          {" "}
                        </div>
                        <div className="absolute flex items-center w-6 py-[2px] ml-[15px] mt-7   border-l-4 border-indigo-700 rounded-full bg-indigo-50 ">
                          {" "}
                        </div>
                      </div>
                    </td>
                    <td className>
                      <div className="flex justify-center w-full px-2 py-2 ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          20
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          21
                        </p>
                        <div className="absolute flex items-center w-[105px] py-[2px] ml-[95px]  mt-5 border-l-4 border-[#16A34A] rounded-full bg-[#F0FDF4] ">
                          {" "}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          22
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          23
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer ">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          24
                        </p>
                        <div className="absolute flex items-center w-36 py-[2px] ml-[135px] mt-5  border-l-4 border-indigo-700 rounded-full bg-indigo-50  ">
                          {" "}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          25
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          26
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          27
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          28
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          29
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-600 ">
                          30
                        </p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-400 ">
                          1
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-400 ">
                          2
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-400 ">
                          3
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-400 ">
                          4
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-400 ">
                          5
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-400 ">
                          6
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="flex justify-center w-full px-2 py-2 cursor-pointer">
                        <p className="flex items-center justify-center w-6 h-6 text-xs text-gray-400 ">
                          7
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full px-5 py-8 bg-white ">
              <div className="border-l-4 border-indigo-700 rounded-tl rounded-bl ">
                <p className="w-full ml-2 text-xs font-medium leading-3 text-indigo-700">
                  Design Review
                </p>
              </div>
              <div className="my-5 border-l-4 border-indigo-700 rounded-tl rounded-bl ">
                <p className="w-full ml-2 text-xs font-medium leading-3 text-indigo-700">
                  2nd Meeting
                </p>
              </div>
              <div className="border-l-4 border-indigo-700 rounded-tl rounded-bl ">
                <p className="w-full ml-2 text-xs font-medium leading-3 text-indigo-700">
                  Seminar 2023
                </p>
              </div>
              <div className=" border-[#DC2626] rounded-tl rounded-bl border-l-4 ">
                <p className="ml-2 text-xs font-medium leading-3 text-[#DC2626] w-full my-5">
                  Doc Visit
                </p>
              </div>
              <div className=" border-[#EA580C] rounded-tl rounded-bl border-l-4 ">
                <p className="ml-2 text-xs font-medium leading-3 text-[#EA580C] w-full">
                  Family Dinner
                </p>
              </div>
              <div className=" border-[#EA580C] rounded-tl rounded-bl border-l-4 ">
                <p className="ml-2 text-xs font-medium leading-3 text-[#EA580C] w-full my-5">
                  Dart Game
                </p>
              </div>
              <div className=" border-[#16A34A] rounded-tl rounded-bl border-l-4 ">
                <p className="ml-2 text-xs font-medium leading-3 text-[#16A34A] w-full">
                  Family Trip
                </p>
              </div>
              <div className=" border-[#0891B2] rounded-tl rounded-bl border-l-4 ">
                <p className="ml-2 text-xs font-medium leading-3 text-[#0891B2] w-full my-5">
                  Paragliding
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>

        <style>
          {`
    @media (min-width: 535px) {
            .custom_calendar_6 {
              justify-content: space-between;
            }
        }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
    `}
        </style>
      </div>
    </>
  );
}

export default index;
