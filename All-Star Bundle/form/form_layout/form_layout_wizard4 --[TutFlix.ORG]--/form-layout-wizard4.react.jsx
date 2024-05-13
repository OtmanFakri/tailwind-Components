import React, { useEffect } from "react";

function index() {
  useEffect(() => {});
  const showDropDownMenu__form_layout_wizard4 = (el) => {
    el.target.parentElement.children[1].classList.toggle("hidden");
  };
  const swaptext_form_layout_wizard4 = (el) => {
    const targetText = el.innerText;
    document.getElementById(
      "drop-down-content-setter_form_layout_wizard4"
    ).innerText = targetText;
    document
      .getElementById("drop-down-div_form_layout_wizard4")
      .classList.toggle("hidden");
  };
  return (
    <>
      <div className="py-12 px-3">
        <div className="lg:max-w-[1440px] md:max-w-[874px] max-w-[375px] mx-auto bg-white px-6 shadow-md rounded">
          <div className="lg:flex justify-between md:block block">
            <div className="lg:block hidden">
              <div className="lg:flex-col pt-12 lg:gap-0 md:gap-14 gap-0 md:flex hidden">
                <div>
                  <div className="lg:flex items-center gap-8 md:block flex">
                    <div className="flex">
                      <div className="bg-indigo-50 px-3.5 py-3 rounded md:w-10 lg:ml-0 md:ml-5">
                        <svg
                          width={14}
                          height={12}
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.6616 0.529648C13.9213 0.756949 13.9477 1.1518 13.7204 1.41157L4.97036 11.4116C4.85645 11.5418 4.69368 11.6189 4.5208 11.6247C4.34791 11.6304 4.18037 11.5643 4.05806 11.442L0.308058 7.69195C0.0639806 7.44787 0.0639806 7.05214 0.308058 6.80807C0.552136 6.56399 0.947864 6.56399 1.19194 6.80807L4.46956 10.0857L12.7796 0.588443C13.0069 0.32867 13.4018 0.302347 13.6616 0.529648Z"
                            fill="#4338CA"
                          />
                        </svg>
                      </div>
                      <div className="lg:hidden md:block hidden w-36 h-1 bg-indigo-50 mt-4" />
                    </div>
                    <div>
                      <p className="texr-gray-500 lg:pt-0 md:pt-3">
                        Account Type
                      </p>
                    </div>
                  </div>
                  <div className="lg:block md:hidden block w-1 h-16 bg-indigo-50 ml-4" />
                </div>
                <div>
                  <div className="lg:flex items-center gap-8 md:block flex lg:-mt-10 md:mt-0 -mt-10">
                    <div className="flex -mt-6">
                      <div className="bg-indigo-700 px-4 py-2 rounded md:w-10 lg:ml-0 md:-ml-14 -ml-0 font-semibold">
                        <p className="text-white">2</p>
                      </div>
                      <div className="lg:hidden md:block hidden w-40 h-1 bg-indigo-50 mt-4" />
                    </div>
                    <div className=" lg:text-left md:text-center text-left lg:-ml-0 md:-ml-28 -ml-0">
                      <p className="mt-6 font-medium lg:-ml-0 md:-ml-16 -ml-0">
                        Account Settings
                      </p>
                      <p className="lg:max-w-[220px] md:w-full max-w-[220px] pt-1 text-sm pb-1">
                        Manage account settings here according to your liking
                      </p>
                    </div>
                  </div>
                  <div className="lg:block md:hidden block w-1 h-24 bg-indigo-50 ml-4 -mt-[80px]" />
                </div>
                <div className="lg:-ml-0 md:-ml-20 -ml-0 ">
                  <div className="lg:flex items-center gap-8 md:block flex lg:pt-0 md:pt-0 pt-6 lg:-mt-2 md:-mt-0 -mt-6">
                    <div className="bg-indigo-50 px-4 py-2 rounded md:w-10 lg:ml-0 md:ml-4 font-semibold">
                      <p className="text-indigo-700">3</p>
                    </div>
                    <div>
                      <p className="texr-gray-800 font-medium lg:pt-0 md:pt-3 pt-0">
                        Business Information
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="lg:flex items-center gap-8 md:block flex lg:pt-10 md:pt-0 pt-8">
                    <div className="bg-indigo-50 px-4 py-2 rounded md:w-10 font-semibold">
                      <p className="text-indigo-700">4</p>
                    </div>
                    <div>
                      <p className="texr-gray-800 font-medium lg:pt-0 md:pt-3">
                        Billing Details
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="lg:flex items-center gap-8 md:block flex lg:pt-10 md:pt-0 pt-8">
                    <div className="bg-indigo-50 px-4 py-2 rounded md:w-10 font-semibold">
                      <p className="text-indigo-700">5</p>
                    </div>
                    <div>
                      <p className="texr-gray-800 font-medium lg:pt-0 md:pt-3">
                        Finished
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:hidden block pt-10">
              <div className="dropdown-one border border-gray-300 w-full rounded outline-none relative mt-2">
                <button
                  onClick={showDropDownMenu__form_layout_wizard4}
                  className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full bg-gray-100"
                >
                  <span
                    className="pr-4 font-medium text-gray-600 text-sm"
                    id="drop-down-content-setter_form_layout_wizard4"
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
                  id="drop-down-div_form_layout_wizard4"
                >
                  <a href="javascript:void(0)">
                    <p
                      className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                      onClick={(e) => {
                        swaptext_form_layout_wizard4(e.target);
                      }}
                    >
                      <span className="pr-2">1</span> Account Type
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                      onClick={(e) => {
                        swaptext_form_layout_wizard4(e.target);
                      }}
                    >
                      <span className="pr-2">2</span> Account Settings
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                      onClick={(e) => {
                        swaptext_form_layout_wizard4(e.target);
                      }}
                    >
                      <span className="pr-2">3</span> Business Deals
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                      onClick={(e) => {
                        swaptext_form_layout_wizard4(e.target);
                      }}
                    >
                      <span className="pr-2">4</span> Business Information
                    </p>
                  </a>
                  <a href="javascript:void(0)">
                    <p
                      className="hover:bg-gray-100 hover:text-gray-800 text-sm leading-none text-gray-600 p-3 font-medium cursor-pointer"
                      onClick={(e) => {
                        swaptext_form_layout_wizard4(e.target);
                      }}
                    >
                      <span className="pr-2">5</span> Finished
                    </p>
                  </a>
                </div>
              </div>
              {/* end */}
            </div>
            <div className="lg:border-l md:border-0 lg:pl-10 md:pl-0 pl-0">
              <div className="2nd row py-8">
                <div className="border-l border-gray-700" />
                <div className="md:pt-5 pt-6">
                  <p className="text-gray-800 font-semibold">
                    Account Settings
                  </p>
                  <p className="text-gray-600 lg:pt-3 md:pt-3 pt-2">
                    Choose what type of account you need carefully as billing is
                    based upon your account type
                  </p>
                </div>
                <div className="lg:pt-12 md:pt-10 pt-5">
                  <p className="text-gray-800 font-medium">Account Name</p>
                  <input
                    type="text"
                    placeholder="For example “Alpha”"
                    className="max-w-[672px] border border-gray-300 w-full px-2 py-3 rounded focus:outline-none text-gray-600 mt-4"
                  />
                </div>
                <div className="pt-10">
                  <div>
                    <p className="font-medium">Team Size</p>
                  </div>
                  <div className="flex lg:gap-4 md:gap-4 gap-1">
                    <div className="pt-7">
                      <button className="w-[71px] shadow-md text-left border py-4 flex justify-center items-center cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded">
                        <p>1-1</p>
                      </button>
                    </div>
                    <div className="pt-7">
                      <button className="w-[71px] shadow-md text-left border py-4 flex justify-center items-center cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded">
                        <p>1-10</p>
                      </button>
                    </div>
                    <div className="pt-7">
                      <button className="w-[71px] shadow-md text-left border py-4 flex justify-center items-center cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded">
                        <p>10-50</p>
                      </button>
                    </div>
                    <div className="pt-7">
                      <button className="w-[71px] shadow-md text-left border py-4 flex justify-center items-center cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded">
                        <p>50+</p>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <div>
                    <p className="font-medium">Specify Account</p>
                  </div>
                  <div className="pt-2">
                    <button className="shadow-md text-left border lg:px-7 md:px-6 px-3 py-6 cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded w-full">
                      <div className="flex gap-4">
                        <div>
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.5 43.5H31.5"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M24 43.5V31.5"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M35.9998 21C35.9998 16.2525 35.9923 8.37844 35.9886 6C35.9886 5.60218 35.8306 5.22064 35.5492 4.93934C35.2679 4.65804 34.8864 4.5 34.4886 4.5L13.5083 4.52437C13.1113 4.52437 12.7304 4.68176 12.4493 4.96206C12.1681 5.24235 12.0095 5.62268 12.0083 6.01969C12.0083 8.88656 11.9961 18.1294 11.9961 21C11.9961 27.0262 19.7773 31.5 23.9961 31.5C28.2148 31.5 35.9998 27.0262 35.9998 21Z"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12 9H4.5V10.5C4.5 15.6769 7.64531 21 12 21"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M36 9H43.5V10.5C43.5 15.6769 40.3547 21 36 21"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className>
                          <p className="font-medium text-gray-800">
                            Developer Account
                          </p>
                          <p className="max-w-[336px] text-gray-600">
                            This is just the right package for you, It’s worth a
                            lot more than any other offer.
                          </p>
                        </div>
                      </div>
                    </button>
                    <button className="shadow-md text-left border lg:px-7 md:px-6 px-3 py-6 cursor-pointer hover:bg-blue-50 focus:bg-blue-50 focus:border-blue-700 border-[#E2E8F0] rounded w-full mt-3">
                      <div className="flex gap-4">
                        <div>
                          <svg
                            width={48}
                            height={48}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 18L24 6L45 18L24 30L3 18Z"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M10.5 22.5V34.5L24 42L37.5 34.5V22.5"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M45 34.5V18"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M24 30V42"
                              stroke="#4B5563"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className>
                          <p className="font-medium text-gray-800">
                            Designer Account
                          </p>
                          <p className="max-w-[336px] text-gray-600">
                            This is just the right package for you, It’s worth a
                            lot more than any other offer.
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="lg:flex justify-end gap-3 pt-10 md:block block">
                  <div>
                    <button className="md:w-full w-full px-7 py-3 rounded text-indigo-700 border border-indigo-700 font-medium  hover:bg-indigo-50 duration-200">
                      Go Back
                    </button>
                  </div>
                  <div className="lg:pt-0 md:pt-4 pt-4">
                    <button className="md:w-full w-full px-7 py-3 rounded border border-indigo-700 font-medium text-white hover:bg-indigo-700 bg-indigo-600 duration-200">
                      Continue
                    </button>
                  </div>
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
