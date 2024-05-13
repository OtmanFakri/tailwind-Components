import React from "react";

function index() {
  return (
    <>
      <div className="bg-gray-200">
        <div className="px-4 py-12">
          <div className="lg:max-w-[548px] md:max-w-[516px] max-w-[319px] w-full mx-auto bg-white  rounded">
            <div className="flex items-center justify-start px-4 pt-4 gap-x-3">
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9707 3.48C14.9636 3.36831 14.9193 3.26222 14.8448 3.17871C14.7703 3.09519 14.6699 3.03909 14.5598 3.01938C11.8566 2.53438 10.7282 2.18375 8.20571 1.04438C8.14099 1.01513 8.07079 1 7.99977 1C7.92875 1 7.85855 1.01513 7.79383 1.04438C5.27133 2.18375 4.14289 2.53438 1.43977 3.01938C1.3296 3.03909 1.22924 3.09519 1.15473 3.17871C1.08023 3.26222 1.0359 3.36831 1.02883 3.48C0.908519 5.38969 1.16508 7.16907 1.79227 8.76875C2.30587 10.0736 3.06596 11.2673 4.03102 12.2847C5.70196 14.0575 7.47602 14.8275 7.81446 14.9638C7.93472 15.0124 8.06919 15.0124 8.18946 14.9638C8.52789 14.8275 10.302 14.0575 11.9729 12.2847C12.9364 11.2669 13.695 10.0732 14.2073 8.76875C14.8345 7.16907 15.091 5.38969 14.9707 3.48ZM10.877 5.82719L7.41446 9.82719C7.36993 9.87877 7.31534 9.92071 7.25402 9.95043C7.19271 9.98014 7.12597 9.99701 7.05789 10H7.03727C6.90641 10 6.78075 9.94876 6.68727 9.85719L5.14977 8.35094C5.10286 8.30498 5.06547 8.25023 5.03972 8.18981C5.01397 8.1294 5.00038 8.06451 4.99971 7.99884C4.99836 7.86621 5.04976 7.73849 5.14258 7.64375C5.23541 7.54902 5.36206 7.49505 5.49469 7.4937C5.62731 7.49235 5.75504 7.54374 5.84977 7.63657L7.00602 8.77063L10.1216 5.17282C10.2084 5.07253 10.3315 5.01083 10.4638 5.00127C10.596 4.99172 10.7267 5.0351 10.827 5.12188C10.9272 5.20865 10.9889 5.33171 10.9985 5.46399C11.0081 5.59626 10.9647 5.72691 10.8779 5.82719H10.877Z"
                  fill="#10B981"
                />
              </svg>
              <p className="text-base font-semibold leading-none text-gray-800">
                Payment successful
              </p>
            </div>
            <hr className="mt-3 mb-4 border-green-500" />
            <p className="text-xs leading-[18px] text-gray-600 px-4">
              Hi, Labuschagne! This is a confirmation message for your payment.
              A copy of a detailed invoice can be found here.
            </p>
            <div className="flex items-center justify-end pb-6 mt-6  gap-x-7 px-7">
              <p className="text-xs font-medium leading-3 text-gray-600 cursor-pointer">
                Cancel
              </p>
              <p className="text-xs font-medium leading-3 text-green-700 cursor-pointer hover:underline">
                View details
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
