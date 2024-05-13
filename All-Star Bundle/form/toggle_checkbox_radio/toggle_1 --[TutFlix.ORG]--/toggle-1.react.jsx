import React from "react";

function index() {
  return (
    <>
      <div>
        <div className="px-4 py-12">
          <div className="mx-auto bg-white py-12 px-4">
            <div className="py-12 flex gap-x-8 items-center justify-center">
              <input
                type="checkbox"
                className="checkbox_toggle_1"
                id="checkbox_toggle_1"
              />
              <label htmlFor="checkbox_toggle_1" className="label">
                <div className="ball_toggle_1 relative cursor-pointer">
                  <svg
                    className="absolute left-[1px] my-auto inset-y-0 cursor-pointer"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd_1478_2177)">
                      <path
                        d="M9.1875 13.2501C7.74539 13.2501 6.36234 12.6772 5.34261 11.6575C4.32288 10.6377 3.75 9.25467 3.75 7.81256C3.75 5.60943 5.01563 3.63412 6.97523 2.78123C7.0443 2.75113 7.12083 2.74253 7.19485 2.75655C7.26887 2.77057 7.33695 2.80656 7.39022 2.85984C7.4435 2.91311 7.47949 2.98119 7.49351 3.05521C7.50753 3.12923 7.49893 3.20576 7.46883 3.27482C7.24383 3.79139 7.125 4.45303 7.125 5.18756C7.125 7.77225 9.22781 9.87506 11.8125 9.87506C12.547 9.87506 13.2087 9.75623 13.7252 9.53123C13.7943 9.50113 13.8708 9.49253 13.9448 9.50655C14.0189 9.52057 14.087 9.55656 14.1402 9.60983C14.1935 9.66311 14.2295 9.73119 14.2435 9.80521C14.2575 9.87923 14.2489 9.95576 14.2188 10.0248C13.3659 11.9844 11.3906 13.2501 9.1875 13.2501Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd_1478_2177"
                        x={0}
                        y={0}
                        width={18}
                        height={18}
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={1} />
                        <feGaussianBlur stdDeviation={1} />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_1478_2177"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy={1} />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow_1478_2177"
                          result="effect2_dropShadow_1478_2177"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_1478_2177"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <svg
                  className="absolute right-[25px] my-auto inset-y-0 hidden toggle-icon_toggle_1 w-[21px] h-[21px] rounded-[2px] bg-white cursor-pointer"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_dd_1478_2165)">
                    <path
                      d="M9 4.76562C8.86325 4.76562 8.7321 4.7113 8.6354 4.6146C8.5387 4.5179 8.48438 4.38675 8.48438 4.25V3.125C8.48438 2.98825 8.5387 2.8571 8.6354 2.7604C8.7321 2.6637 8.86325 2.60938 9 2.60938C9.13675 2.60938 9.2679 2.6637 9.3646 2.7604C9.4613 2.8571 9.51562 2.98825 9.51562 3.125V4.25C9.51562 4.38675 9.4613 4.5179 9.3646 4.6146C9.2679 4.7113 9.13675 4.76562 9 4.76562Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M9 13.3906C8.86325 13.3906 8.7321 13.3363 8.6354 13.2396C8.5387 13.1429 8.48438 13.0118 8.48438 12.875V11.75C8.48438 11.6132 8.5387 11.4821 8.6354 11.3854C8.7321 11.2887 8.86325 11.2344 9 11.2344C9.13675 11.2344 9.2679 11.2887 9.3646 11.3854C9.4613 11.4821 9.51562 11.6132 9.51562 11.75V12.875C9.51562 13.0118 9.4613 13.1429 9.3646 13.2396C9.2679 13.3363 9.13675 13.3906 9 13.3906Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M11.6523 5.86477C11.5503 5.86476 11.4507 5.83452 11.3659 5.77788C11.2811 5.72123 11.215 5.64073 11.176 5.54654C11.137 5.45234 11.1267 5.3487 11.1466 5.24869C11.1665 5.14869 11.2155 5.05682 11.2876 4.98469L12.0831 4.18922C12.1802 4.09463 12.3107 4.04209 12.4462 4.04298C12.5818 4.04387 12.7116 4.09813 12.8074 4.19399C12.9033 4.28986 12.9576 4.41963 12.9584 4.5552C12.9593 4.69077 12.9068 4.82124 12.8122 4.91836L12.0167 5.71383C11.9689 5.76175 11.9121 5.79976 11.8496 5.82566C11.787 5.85156 11.72 5.86485 11.6523 5.86477Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M5.55267 11.9625C5.45069 11.9625 5.35099 11.9322 5.2662 11.8756C5.18141 11.8189 5.11534 11.7383 5.07632 11.6441C5.03731 11.5499 5.02712 11.4462 5.04704 11.3462C5.06696 11.2462 5.11609 11.1543 5.18822 11.0822L5.98369 10.2867C6.03133 10.2378 6.08822 10.1988 6.15104 10.1721C6.21387 10.1453 6.28138 10.1313 6.34967 10.1309C6.41795 10.1304 6.48564 10.1435 6.54881 10.1695C6.61199 10.1954 6.66938 10.2336 6.71766 10.2819C6.76595 10.3302 6.80416 10.3876 6.83008 10.4507C6.85601 10.5139 6.86913 10.5816 6.86868 10.6499C6.86823 10.7182 6.85422 10.7857 6.82747 10.8485C6.80071 10.9113 6.76175 10.9682 6.71283 11.0159L5.91736 11.8113C5.86953 11.8593 5.81269 11.8974 5.7501 11.9233C5.68752 11.9492 5.62042 11.9626 5.55267 11.9625Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M13.875 8.51562H12.75C12.6132 8.51562 12.4821 8.4613 12.3854 8.3646C12.2887 8.2679 12.2344 8.13675 12.2344 8C12.2344 7.86325 12.2887 7.7321 12.3854 7.6354C12.4821 7.5387 12.6132 7.48438 12.75 7.48438H13.875C14.0118 7.48438 14.1429 7.5387 14.2396 7.6354C14.3363 7.7321 14.3906 7.86325 14.3906 8C14.3906 8.13675 14.3363 8.2679 14.2396 8.3646C14.1429 8.4613 14.0118 8.51562 13.875 8.51562Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M5.25 8.51562H4.125C3.98825 8.51562 3.8571 8.4613 3.7604 8.3646C3.6637 8.2679 3.60938 8.13675 3.60938 8C3.60938 7.86325 3.6637 7.7321 3.7604 7.6354C3.8571 7.5387 3.98825 7.48438 4.125 7.48438H5.25C5.38675 7.48438 5.5179 7.5387 5.6146 7.6354C5.7113 7.7321 5.76562 7.86325 5.76562 8C5.76562 8.13675 5.7113 8.2679 5.6146 8.3646C5.5179 8.4613 5.38675 8.51562 5.25 8.51562Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M12.447 11.9627C12.3793 11.9627 12.3122 11.9494 12.2496 11.9235C12.187 11.8975 12.1302 11.8595 12.0823 11.8115L11.2869 11.016C11.1923 10.9189 11.1397 10.7884 11.1406 10.6529C11.1415 10.5173 11.1958 10.3875 11.2916 10.2916C11.3875 10.1958 11.5173 10.1415 11.6529 10.1406C11.7884 10.1397 11.9189 10.1923 12.016 10.2869L12.8115 11.0823C12.8836 11.1544 12.9328 11.2463 12.9527 11.3463C12.9726 11.4464 12.9624 11.55 12.9234 11.6443C12.8844 11.7385 12.8183 11.819 12.7335 11.8757C12.6487 11.9324 12.549 11.9626 12.447 11.9627Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M6.34914 5.86477C6.28144 5.8649 6.21438 5.85164 6.15183 5.82573C6.08928 5.79983 6.03247 5.7618 5.98469 5.71383L5.18922 4.91836C5.09463 4.82124 5.04209 4.69077 5.04298 4.5552C5.04387 4.41963 5.09813 4.28986 5.19399 4.19399C5.28986 4.09813 5.41962 4.04387 5.5552 4.04298C5.69077 4.04209 5.82124 4.09463 5.91836 4.18922L6.71383 4.98469C6.78589 5.05682 6.83496 5.14869 6.85482 5.24869C6.87469 5.3487 6.86446 5.45234 6.82542 5.54654C6.78639 5.64073 6.72031 5.72123 6.63554 5.77788C6.55076 5.83452 6.4511 5.86476 6.34914 5.86477Z"
                      fill="#F59E0B"
                    />
                    <path
                      d="M9 10.3906C8.52718 10.3906 8.06498 10.2504 7.67184 9.98773C7.2787 9.72504 6.97229 9.35168 6.79135 8.91485C6.61041 8.47802 6.56307 7.99735 6.65531 7.53361C6.74755 7.06988 6.97524 6.64391 7.30957 6.30957C7.64391 5.97524 8.06988 5.74755 8.53361 5.65531C8.99735 5.56307 9.47802 5.61041 9.91485 5.79135C10.3517 5.97229 10.725 6.2787 10.9877 6.67184C11.2504 7.06498 11.3906 7.52718 11.3906 8C11.3899 8.6338 11.1378 9.24143 10.6896 9.6896C10.2414 10.1378 9.6338 10.3899 9 10.3906Z"
                      fill="#F59E0B"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_1478_2165"
                      x={0}
                      y={0}
                      width={18}
                      height={18}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={1} />
                      <feGaussianBlur stdDeviation={1} />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1478_2165"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy={1} />
                      <feGaussianBlur stdDeviation="1.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_1478_2165"
                        result="effect2_dropShadow_1478_2165"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_1478_2165"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <style>
          {`
      .checkbox_toggle_1 {
        opacity: 0;
        position: absolute;
      }
      .label {
        width: 50px;
        height: 26px;
        background-color: #374151;
        display: flex;
        border-radius: 4px;
        align-items: center;
        justify-content: space-between;
        padding: 5px;
        position: relative;
        transform: scale(1.5);
      }
      .ball_toggle_1 {
        width: 20px;
        height: 20px;
        background-color: #9ca3af;
        position: absolute;
        top: 3px;
        left: 2px;
        border-radius: 2px;
        transition: transform 0.2s linear;
      }
      .checkbox_toggle_1:checked + .label .ball_toggle_1 {
        transform: translateX(24px);
        display: none;
      }
      .checkbox_toggle_1:checked + .label .toggle-icon_toggle_1 {
        transform: translateX(24px);
        display: block;
      }

      .dark_toggle_1 button {
        background-color: white;
        color: black;
      }
      .dark_toggle_1 .ball_toggle_1 {
        background-color: white;
      }
      .dark_toggle_1 .label {
        background-color: #e5e7eb;
      }
    `}
        </style>
      </div>
    </>
  );
}

export default index;
