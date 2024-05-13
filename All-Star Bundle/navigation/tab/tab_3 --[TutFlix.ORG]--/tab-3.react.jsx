import React, { useEffect } from "react";

function index() {
  useEffect(() => {
    document.querySelector("body").addEventListener("click", (e) => {
      // e.stopPropagation();
      console.log("body");
      if (
        document
          .getElementById("drop-down-div_tab_3")
          .classList.contains("active")
      ) {
        document.getElementById("drop-down-div_tab_3").classList.add("hidden");
        document
          .getElementById("drop-down-div_tab_3")
          .classList.remove("active");
      }
    });
  });
  function showDropDownMenu_tab_3(el) {
    document.querySelectorAll(".hideme").forEach((el) => {
      el.classList.remove("active");
    });
    el.parentElement.children[1].classList.add("active");
    el.parentElement.children[1].classList.remove("hidden");
  }
  function text(el) {
    const targetText = el.innerText;
    document.getElementById("drop-down-content-setter_tab_3").innerText =
      targetText;
    document.getElementById("drop-down-div_tab_3").classList.toggle("hidden");
  }
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className="lg:max-w-[740px] md:max-w-[696px] max-w-[375px]  mx-auto  ">
            <div className="md:block hidden">
              <div className="flex justify-between bg-white rounded shadow ">
                <button className="focus:border-b-2 focus:border-y-indigo-700 hover:bg-indigo-50 px-5 py-6 flex-1  border-r border-x-gray-200">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Home</p>
                  </div>
                </button>
                <button className="focus:border-b-2 focus:border-y-indigo-700 hover:bg-indigo-50 px-5 py-6 flex-1  border-r border-x-gray-200">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Members</p>
                  </div>
                </button>
                <button className="focus:border-b-2 focus:border-y-indigo-700 hover:bg-indigo-50 px-5 py-6 flex-1  border-r border-x-gray-200">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Audit Log
                    </p>
                  </div>
                </button>
                <button className="focus:border-b-2 focus:border-y-indigo-700 hover:bg-indigo-50 px-5 py-6 flex-1  border-r border-x-gray-200">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Billing</p>
                  </div>
                </button>
                <button className="focus:border-b-2 border-indigo-700 hover:bg-indigo-50 px-5 py-6 flex-1">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Configurations
                    </p>
                  </div>
                </button>
              </div>
            </div>
            <div className="md:hidden block relative  h-[250px] ">
              <div className="mt-8 rounded">
                <div className="dropdown-one w-full rounded outline-none  relative mt-2 bg-white  drop-shadow">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      showDropDownMenu_tab_3(event.target);
                    }}
                    className="dropbtn-one relative px-5 py-[12px] flex items-center justify-between w-full bg-inherit shadow-sm"
                  >
                    <span
                      className="pr-4 text-gray-800 font-medium text-base"
                      id="drop-down-content-setter_tab_3"
                    >
                      Home
                    </span>
                    <svg
                      width={14}
                      height={30}
                      viewBox="0 0 14 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.67945 21.1966L6.50156 25.657C6.56316 25.7288 6.63959 25.7865 6.72558 25.826C6.81158 25.8656 6.90511 25.8861 6.99976 25.8861C7.09441 25.8861 7.18794 25.8656 7.27394 25.826C7.35993 25.7865 7.43635 25.7288 7.49796 25.657L11.3201 21.1966C11.6848 20.7709 11.3824 20.1133 10.8219 20.1133H3.17656C2.61601 20.1133 2.31359 20.7709 2.67945 21.1966Z"
                        fill="#6B7280"
                      />
                      <path
                        d="M2.67945 8.80336L6.50156 4.34305C6.56316 4.27119 6.63959 4.21351 6.72558 4.17397C6.81158 4.13442 6.90511 4.11395 6.99976 4.11395C7.09441 4.11395 7.18794 4.13442 7.27394 4.17397C7.35993 4.21351 7.43635 4.27119 7.49796 4.34305L11.3201 8.80336C11.6848 9.2291 11.3824 9.88672 10.8219 9.88672H3.17656C2.61601 9.88672 2.31359 9.2291 2.67945 8.80336Z"
                        fill="#6B7280"
                      />
                    </svg>
                  </button>
                  <div
                    className="hidden  rounded w-full  px-3 py-2 absolute top-16 right-0 bg-white drop-shadow"
                    id="drop-down-div_tab_3"
                  >
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className=" hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold hover:cursor-default"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Members</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className=" hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Audit Log</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className=" hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Billing</p>
                      </a>
                    </div>
                    <div
                      onClick={(event) => {
                        event.stopPropagation();
                        text(event.target);
                      }}
                      className=" hover:bg-gray-100 rounded text-gray-600 hover:text-gray-800 p-3 hover:font-bold"
                    >
                      <a href="javascript:void(0)" className="cursor-default">
                        <p className="text-sm leading-none">Configurations</p>
                      </a>
                    </div>
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
