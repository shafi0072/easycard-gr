import React from "react";

const Website = ({ item,color,bgColor,design }) => {
  const websiteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <path
        id="website-dashboard-svgrepo-com"
        d="M3,22H21a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1ZM4,10H6V20H4ZM20,20H8V10H20ZM4,4H20V8H4Z"
        transform="translate(-2 -2)"
        fill={color}
      />
    </svg>
  );
  return (
    <div className="flex gap-3 my-5 items-center">
      <div
        className={`${design === "pro" ? "w-[42px] h-[42px]":"w-[50px] h-[50px]"}  rounded-full flex justify-center items-center `}
        style={{ backgroundColor: bgColor }}
      >
        {item?.type === "Website" && websiteIcon}
      </div>
      <div>
        <p className={`${design === "pro" && "text-[18px] roboto"}`}> {item?.label} </p> 
        {/* <p>{}</p> */}
      </div>
    </div>
  );
};

export default Website;
