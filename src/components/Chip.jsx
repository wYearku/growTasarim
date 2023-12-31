import React from "react";

const Chip = ({ text, color = "#fff", bg = "#ffba08", className }) => {
  return (
    <div
      style={{ backgroundColor: bg, color: color }}
      className={`${className} rounded-2xl px-3 text-sm py-1 select-none overflow-hidden hover:brightness-125 outline-none duration-300 w-fit`}
    >
      {text}
    </div>
  );
};

export default Chip;
