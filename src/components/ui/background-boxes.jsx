"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }) => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);

  // Responsive row/col sizes
  useEffect(() => {
    const updateGridSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile
        setRows(new Array(20).fill(1));
        setCols(new Array(10).fill(1));
      } else if (width < 1024) {
        // Tablet
        setRows(new Array(50).fill(1));
        setCols(new Array(20).fill(1));
      } else {
        // Desktop
        setRows(new Array(150).fill(1));
        setCols(new Array(100).fill(1));
      }
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  let colors = [
    "#93c5fd",
    "#f9a8d4",
    "#86efac",
    "#fde047",
    "#fca5a5",
    "#d8b4fe",
    "#a5b4fc",
    "#c4b5fd",
  ];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform:
          "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)",
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-2 sm:p-4",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row-${i}`}
          className="relative h-6 w-12 sm:h-8 sm:w-16 border-l border-slate-700"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: `${getRandomColor()}`,
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col-${j}`}
              className="relative h-6 w-12 sm:h-8 sm:w-16 border-t border-r border-slate-700"
            >
              {j % 2 === 0 && i % 2 === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-4 w-8 sm:h-6 sm:w-10 stroke-[1px] text-slate-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
