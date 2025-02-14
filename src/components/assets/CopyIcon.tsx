import React from "react";

const CopyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="w-3 cursor-pointer"
    >
      <g clipPath="url(#clip0_13144_32684)">
        <mask
          id="mask0_13144_32684"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="12"
        >
          <path d="M12 0H0V12H12V0Z" fill="currentColor"></path>
        </mask>
        <g mask="url(#mask0_13144_32684)">
          <path
            d="M6.858 2.57031H2.571C1.15108 2.57031 0 3.72139 0 5.14131V9.42831C0 10.8482 1.15108 11.9993 2.571 11.9993H6.858C8.27792 11.9993 9.429 10.8482 9.429 9.42831V5.14131C9.429 3.72139 8.27792 2.57031 6.858 2.57031Z"
            fill="currentColor"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.71289 1.728C2.80689 1.718 2.90289 1.714 2.99989 1.714H7.28589C8.08154 1.714 8.8446 2.03007 9.40721 2.59268C9.96982 3.15529 10.2859 3.91835 10.2859 4.714V9C10.2859 9.097 10.2809 9.193 10.2719 9.287C10.7767 9.11165 11.2143 8.78344 11.524 8.34796C11.8336 7.91248 12 7.39136 11.9999 6.857V2.571C11.9999 1.88913 11.729 1.23518 11.2469 0.753028C10.7647 0.270872 10.1108 0 9.42889 0L5.14289 0C4.01789 0 3.06289 0.722 2.71289 1.728Z"
            fill="currentColor"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_13144_32684">
          <rect width="12" height="12" fill="currentColor"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default CopyIcon;
