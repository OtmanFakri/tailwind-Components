import React from "react";

function index() {
  return (
    <>
      <div>
        <div className="bg-gray-200">
          <div className="w-full px-4 py-12 mx-auto bg-white">
            <input type="checkbox" id="switch_toggle_3" />
            <label htmlFor="switch_toggle_3" className="mx-auto">
              <svg
                className="absolute left-[17px]"
                width={10}
                height={12}
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.625 4.5H7.25V2.625C7.25 2.02826 7.01295 1.45597 6.59099 1.03401C6.16903 0.612053 5.59674 0.375 5 0.375C4.40326 0.375 3.83097 0.612053 3.40901 1.03401C2.98705 1.45597 2.75 2.02826 2.75 2.625V4.5H2.375C1.97731 4.50043 1.59603 4.65861 1.31482 4.93982C1.03361 5.22103 0.875434 5.60231 0.875 6V10.125C0.875434 10.5227 1.03361 10.904 1.31482 11.1852C1.59603 11.4664 1.97731 11.6246 2.375 11.625H7.625C8.02269 11.6246 8.40397 11.4664 8.68518 11.1852C8.96639 10.904 9.12457 10.5227 9.125 10.125V6C9.12457 5.60231 8.96639 5.22103 8.68518 4.93982C8.40397 4.65861 8.02269 4.50043 7.625 4.5V4.5ZM6.5 4.5H3.5V2.625C3.5 2.22718 3.65804 1.84564 3.93934 1.56434C4.22064 1.28304 4.60218 1.125 5 1.125C5.39782 1.125 5.77936 1.28304 6.06066 1.56434C6.34196 1.84564 6.5 2.22718 6.5 2.625V4.5Z"
                  fill="#4338CA"
                />
              </svg>
              <svg
                className="cross_toggle_3"
                width={10}
                height={12}
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.625 4.5H3.5V2.625C3.5 2.22718 3.65804 1.84564 3.93934 1.56434C4.22064 1.28304 4.60218 1.125 5 1.125C5.39782 1.125 5.77936 1.28304 6.06066 1.56434C6.34196 1.84564 6.5 2.22718 6.5 2.625C6.5 2.72446 6.53951 2.81984 6.60983 2.89016C6.68016 2.96049 6.77554 3 6.875 3C6.97446 3 7.06984 2.96049 7.14017 2.89016C7.21049 2.81984 7.25 2.72446 7.25 2.625C7.25 2.02826 7.01295 1.45597 6.59099 1.03401C6.16903 0.612053 5.59674 0.375 5 0.375C4.40326 0.375 3.83097 0.612053 3.40901 1.03401C2.98705 1.45597 2.75 2.02826 2.75 2.625V4.5H2.375C1.97731 4.50043 1.59603 4.65861 1.31482 4.93982C1.03361 5.22103 0.875434 5.60231 0.875 6V10.125C0.875434 10.5227 1.03361 10.904 1.31482 11.1852C1.59603 11.4664 1.97731 11.6246 2.375 11.625H7.625C8.02269 11.6246 8.40397 11.4664 8.68518 11.1852C8.96639 10.904 9.12457 10.5227 9.125 10.125V6C9.12457 5.60231 8.96639 5.22103 8.68518 4.93982C8.40397 4.65861 8.02269 4.50043 7.625 4.5V4.5Z"
                  fill="#4338CA"
                />
              </svg>
            </label>
          </div>
        </div>

        <style>
          {`
    input[type="checkbox"] {
      visibility: hidden;
      width: 0;
      height: 0;
    }
    label {
      width: 80px;
      height: 30px;
      background: #4338ca;
      position: relative;
      cursor: pointer;
      box-shadow: 1px 3px 9px grey;
      display: block;
      border-radius: 100px;
    }
    label svg {
      position: absolute;
      z-index: -1;
      width: 28px;
      height: 28px;
      top: -1px;
      left: 5px;
      /* transition: all 0.5s linear; */
    }
    label svg.cross_toggle_3 {
      z-index: 1;
      /* transition: all 0.5s linear; */
    }
    label:after {
      content: "";
      width: 40px;
      height: 40px;
      background: white;
      position: absolute;
      left: 0px;
      top: -5px;
      border-radius: 90px;
      /* transition: 0.8s; */
    }
    input:checked + label {
      background: #4338ca;
    }
    input:checked + label svg {
      z-index: 1;
      transform: translatex(120%);
    }
    input:checked + label svg.cross_toggle_3 {
      z-index: -10;
    }
    input:checked + label:after {
      transform: translatex(110%);
    }`}
        </style>
      </div>
    </>
  );
}

export default index;
