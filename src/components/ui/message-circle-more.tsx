"use client";

import type { Variants } from "motion/react";
import { motion, useAnimation } from "motion/react";
import type { HTMLAttributes } from "react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

export interface MessageCircleMoreIconHandle {
  controls: any;
}

const dotVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: (custom: number) => ({
    opacity: [1, 0, 0, 1, 1, 0, 0, 1],
    transition: {
      opacity: {
        times: [
          0,
          0.1,
          0.1 + custom * 0.1,
          0.1 + custom * 0.1 + 0.1,
          0.5,
          0.6,
          0.6 + custom * 0.1,
          0.6 + custom * 0.1 + 0.1,
        ],
        duration: 1.5,
      },
    },
  }),
};

const MessageCircleMoreIcon = forwardRef<
  MessageCircleMoreIconHandle,
  { controls: any } & HTMLAttributes<HTMLDivElement>
>(({ controls, ...props },ref) => {
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
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <motion.path
          d="M8 12h.01"
          variants={dotVariants}
          animate={controls}
          custom={0}
        />
        <motion.path
          d="M12 12h.01"
          variants={dotVariants}
          animate={controls}
          custom={1}
        />
        <motion.path
          d="M16 12h.01"
          variants={dotVariants}
          animate={controls}
          custom={2}
        />
      </svg>
    </div>
  );
});

MessageCircleMoreIcon.displayName = "MessageCircleMoreIcon";

export { MessageCircleMoreIcon };
