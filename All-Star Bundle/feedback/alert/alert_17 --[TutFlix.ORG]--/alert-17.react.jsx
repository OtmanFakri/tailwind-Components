import React from "react";

function index() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div className="lg:max-w-[548px] md:max-w-[516px] max-w-[319px] py-10 mx-auto bg-white rounded">
            <hr className="mb-8 border-gray-100" />
            <svg
              className="mx-auto mb-4"
              width={48}
              height={48}
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44.9131 10.44C44.8919 10.1049 44.7589 9.78665 44.5354 9.53612C44.3119 9.28558 44.0108 9.11727 43.6803 9.05814C35.5709 7.60314 32.1856 6.55126 24.6181 3.13314C24.424 3.04539 24.2133 3 24.0003 3C23.7872 3 23.5766 3.04539 23.3825 3.13314C15.815 6.55126 12.4297 7.60314 4.32028 9.05814C3.98979 9.11727 3.68868 9.28558 3.46517 9.53612C3.24166 9.78665 3.10866 10.1049 3.08747 10.44C2.72653 16.1691 3.49622 21.5072 5.37778 26.3063C6.91859 30.2208 9.19886 33.8019 12.094 36.8541C17.1068 42.1725 22.429 44.4825 23.4443 44.8913C23.8051 45.0372 24.2085 45.0372 24.5693 44.8913C25.5847 44.4825 30.9068 42.1725 35.9197 36.8541C38.8101 33.8008 41.0859 30.2197 42.6228 26.3063C44.5043 21.5072 45.274 16.1691 44.9131 10.44ZM32.6318 17.4816L22.2443 29.4816C22.1108 29.6363 21.947 29.7621 21.7631 29.8513C21.5791 29.9404 21.3789 29.991 21.1747 30H21.1128C20.7202 30.0001 20.3432 29.8463 20.0628 29.5716L15.4503 25.0528C15.3096 24.9149 15.1974 24.7507 15.1201 24.5694C15.0429 24.3882 15.0021 24.1935 15.0001 23.9965C14.9961 23.5986 15.1502 23.2155 15.4287 22.9313C15.7072 22.6471 16.0872 22.4851 16.485 22.4811C16.8829 22.477 17.2661 22.6312 17.5503 22.9097L21.019 26.3119L30.3659 15.5185C30.6262 15.2176 30.9954 15.0325 31.3922 15.0038C31.789 14.9752 32.181 15.1053 32.4818 15.3656C32.7827 15.626 32.9678 15.9951 32.9965 16.392C33.0251 16.7888 32.895 17.1807 32.6347 17.4816H32.6318Z"
                fill="#10B981"
              />
            </svg>
            <p className="px-3 text-xs text-center text-gray-600 lg:px-8 md:px-6">
              Hi, Labuschagne! This is a confirmation message for your payment.
              A copy of a detailed invoice can be found here.
            </p>
            <hr className="my-8 border-gray-100" />
            <div className="flex items-center justify-center gap-x-4">
              <button className="px-4 py-3 text-sm font-medium leading-none text-[#15803D] duration-300 ease-in-out transform bg-white border border-[#10B981] rounded hover:bg-gray-50">
                Cancel
              </button>
              <button className="px-4 py-3 text-sm font-medium leading-none text-white duration-300 ease-in-out transform bg-[#10B981] border rounded hover:bg-[#10b99d]">
                View details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
