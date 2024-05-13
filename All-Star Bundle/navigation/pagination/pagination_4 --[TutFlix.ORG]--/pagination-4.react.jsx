import React from "react";

function index() {
  return (
    <>
      <div className="py-16 px-4 bg-white lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full  mx-auto">
        <div className="flex justify-between lg:gap-x-8 gap-x-2">
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            1
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            2
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            3
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            4
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            5
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            6
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            7
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            8
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            9
          </button>
          <button className="px-1 pb-4 text-base font-medium leading-none text-gray-800 border-b border-transparent cursor-pointer lg:px-4 md:px-2 hover:text-indigo-700 hover:border-indigo-500 focus:text-indigo-700 focus:border-indigo-500">
            10
          </button>
        </div>
        <hr className="w-full border-gray-200" />
        <div className="mt-4 ">
          <div className="flex justify-between">
            <div className="flex items-center pb-3 text-gray-600 cursor-pointer hover:text-indigo-700">
              <p className="ml-3 text-sm font-medium leading-none text-gray-600">
                Total Pages
              </p>
            </div>
            <div className="flex items-center pb-3 text-gray-600 cursor-pointer hover:text-indigo-700">
              <p className="mr-3 text-sm font-medium leading-none text-gray-600">
                5/20 Pages
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
