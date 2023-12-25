import React from "react";

const PopUpWrapper = ({ children, controll = () => {} }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-[#2c2c2c62] flex items-center justify-center"
      onClick={() => controll(null)}
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default PopUpWrapper;
