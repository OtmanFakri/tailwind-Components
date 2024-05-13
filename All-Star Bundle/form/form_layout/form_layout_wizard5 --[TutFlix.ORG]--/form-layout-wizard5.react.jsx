import React, { useEffect } from "react";
function index() {
  useEffect(() => {});
  const showDropDownMenu_form_layout_wizard5 = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext_form_layout_wizard5 = (el) => {
    const targetText = el.innerText;
    document.getElementById("drop-down-content-setter_form_layout_wizard5").innerText = targetText;
    document.getElementById("drop-down-div_form_layout_wizard5").classList.toggle("hidden");
  };
  return (
    <>
      <div className="py-4 px-4">
        <div className="lg:max-w-[1124px] mx-auto bg-white py-8 lg:px-10 md:px-6 px-4 shadow-md rounded">
          <div className="lg:block md:hidden hidden">
            <div className="flex justify-between pt-[48px] h-[90px] pb- border-b border-gray-300">
              <div>
                <div className="pb-6 border-b-2 border-blue-700 wiz-instance px-4">
                  <div className="flex">
                    <p className="text-base font-semibold leading-none text-slate-800">
                      1
                    </p>
                    <span className="ml-3 text-base font-medium leading-none text-slate-800">
                      Account Type
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-6 hover:border-b-2 border-blue-700 wiz-instance px-4">
                  <div className="flex">
                    <p className="text-base font-semibold leading-none text-slate-800">
                      2
                    </p>
                    <span className="ml-3 text-base font-medium leading-none text-gray-800">
                      Account Settings
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-6 hover:border-b-2 border-blue-700 wiz-instance px-4">
                  <div className="flex">
                    <p className="text-base leading-none text-slate-800 font-semibold">
                      3
                    </p>
                    <span className="ml-3 text-base font-medium leading-none text-slate-800">
                      Business Deals
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <div className="pb-6 hover:border-b-2 border-blue-700 wiz-instance px-4">
                  <div className="flex">
                    <p className="text-base font-semibold leading-none text-slate-800">
                      4
                    </p>
                    <span className="ml-3 text-base font-medium leading-none text-slate-800">
                      Business Information
                    </span>
                  </div>
                </div>
              </div>
              <div className="pb-6 hover:border-b-2 border-blue-700 wiz-instance px-4">
                <div className="flex">
                  <p className="text-base font-semibold leading-none text-slate-800">
                    5
                  </p>
                  <span className="ml-3 text-base font-medium leading-none text-slate-800">
                    Finished
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 md:px-6 px-3 lg:hidden md:block block">
            <div className="dropdown-one border border-gray-300 w-full rounded outline-none relative mt-2">
              <button
                onClick={showDropDownMenu_form_layout_wizard5}
                className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full bg-gray-100"
              >
                <span
                  className="pr-4 font-medium text-gray-600 text-sm"
                  id="drop-down-content-setter_form_layout_wizard5"
                >
                  <span className="pr-2">1</span> Account Type
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
                className="hidden rounded w-full shadow border-t border-gray-200 px-1 py-2 absolute top-12 right-0 bg-white"
                id="drop-down-div_form_layout_wizard5"
              >
                <a href="javascript:void(0)">
                  <p
                    className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                    onClick={(e) => {
                      swaptext_form_layout_wizard5(e.target);
                    }}
                  >
                    <span className="pr-2">1</span> Account Type
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                    onClick={(e) => {
                      swaptext_form_layout_wizard5(e.target);
                    }}
                  >
                    <span className="pr-2">2</span> Account Settings
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                    onClick={(e) => {
                      swaptext_form_layout_wizard5(e.target);
                    }}
                  >
                    <span className="pr-2">3</span> Business Deals
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                    onClick={(e) => {
                      swaptext_form_layout_wizard5(e.target);
                    }}
                  >
                    <span className="pr-2">4</span> Business Information
                  </p>
                </a>
                <a href="javascript:void(0)">
                  <p
                    className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                    onClick={(e) => {
                      swaptext_form_layout_wizard5(e.target);
                    }}
                  >
                    <span className="pr-2">5</span> Finished
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div />
          <div className="lg:px-[288px] md:px-6 px-3 pt-10">
            <div className="lg:max-w-[468px] w-full">
              <p className="text-base font-medium text-gray-800">
                Select Account Type
              </p>
              <p className="font-normal text-gray-600">
                Choose what type of account you need carefully as billing is
                based upon your account type
              </p>
            </div>
            <div className="pt-10">
              <button className="text-left border lg:px-7 md:px-6 px-3 py-6 cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded shadow-md lg:max-w-[468px] w-full">
                <p className="font-medium text-gray-800">Personal Account</p>
                <p className="font-normal text-gray-600">
                  Choose what type of account you need carefully as billing is
                  based upon your account type
                </p>
              </button>
            </div>
            <div className="pt-10">
              <button className="text-left border lg:px-7 md:px-6 px-3 py-6 cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded shadow-md lg:max-w-[468px] w-full">
                <p className="font-medium text-gray-800">Team Account</p>
                <p className="font-normal text-gray-600">
                  Choose what type of account you need carefully as billing is
                  based upon your account type
                </p>
              </button>
              <div className="flex justify-end py-10">
                <button className="bg-indigo-700 px-4 py-3 rounded text-white hover:bg-indigo-500 lg:w-[109px] md:w-full w-full duration-300">
                  Continue
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
