"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface FilePenLineIconHandle {
  controls: any;
}

const penVariants: Variants = {
  normal: {
    rotate: 0,
    x: 0,
    y: 0,
  },
  animate: {
    rotate: [-0.3, 0.2, -0.4],
    x: [0, -0.5, 1, 0],
    y: [0, 1, -0.5, 0],
    transition: {
      duration: 0.5,
      repeat: 1,
      ease: "easeInOut",
    },
  },
};

const FilePenLineIcon = forwardRef<
  FilePenLineIconHandle,
  { controls: any } & HTMLAttributes<HTMLDivElement>
>(({ controls, ...props }) => {
  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200"
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
        <path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
        <motion.path
          d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
          initial="normal"
          animate={controls}
          variants={penVariants}
        />
        <motion.path
          d="M8 18h1"
          variants={{
            normal: { d: "M8 18h1" },
            animate: { d: "M8 18h5" },
          }}
          animate={controls}
          transition={{ duration: 0.5 }}
        />
      </svg>
    </div>
  );
});

FilePenLineIcon.displayName = "FilePenLineIcon";

export { FilePenLineIcon };
