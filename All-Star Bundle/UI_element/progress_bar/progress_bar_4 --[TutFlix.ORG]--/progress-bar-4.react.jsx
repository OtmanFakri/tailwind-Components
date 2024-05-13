import React from "react";
function index() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className="lg:max-w-[644px] md:max-w-[696px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-10">
            <div>
              <div className="flex justify-between gap-3">
                <p className="text-base font-semibold text-gray-800">
                  Create dashboard with trending design
                </p>
                <p className="text-sm font-medium text-gray-600">26%</p>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-600">
                  Project is about modern technology
                </p>
                <svg
                  className="mt-6 lg:block md:hidden hidden"
                  width={564}
                  height={12}
                  viewBox="0 0 564 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={564} height={12} rx={6} fill="#E0E7FF" />
                  <rect width={162} height={12} rx={6} fill="#4F46E5" />
                </svg>
                <svg
                  className="mt-6 lg:hidden md:block hidden"
                  width={616}
                  height={12}
                  viewBox="0 0 616 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={616} height={12} rx={6} fill="#E0E7FF" />
                  <rect width={231} height={12} rx={6} fill="#4F46E5" />
                </svg>
                <svg
                  className="mt-6 lg:hidden md:hidden block"
                  width={290}
                  height={8}
                  viewBox="0 0 311 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={311} height={8} rx={4} fill="#E0E7FF" />
                  <rect width={81} height={8} rx={4} fill="#4F46E5" />
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
