"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface LogoutIconHandle {
  controls: any;
}

const pathVariants: Variants = {
  animate: {
    x: 2,
    translateX: [0, -3, 0],
    transition: {
      duration: 0.4,
    },
  },
};

const LogoutIcon = forwardRef<
  LogoutIconHandle,
  { controls: any } & HTMLAttributes<HTMLDivElement>
>(({ controls, ...props }, ref) => {
  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <motion.polyline
          points="16 17 21 12 16 7"
          variants={pathVariants}
          animate={controls}
        />
        <motion.line
          x1="21"
          x2="9"
          y1="12"
          y2="12"
          variants={pathVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
});

LogoutIcon.displayName = "LogoutIcon";

export { LogoutIcon };
