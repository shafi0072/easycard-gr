import React from "react";
import Moment from "react-moment";

const DateView = ({ item,bgColor,color }) => {
  return (
    <div>
      {item?.date && (
        <div className="my-5 flex gap-4 items-center">
          <div    style={{ backgroundColor: bgColor }} className=" w-[40px] h-[40px] flex items-center justify-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.911"
              height="23.337"
              viewBox="0 0 20.911 23.337"
            >
              <path
                id="Path_37"
                data-name="Path 37"
                d="M23.411,11.492V7.853a2.426,2.426,0,0,0-2.426-2.426H6.426A2.426,2.426,0,0,0,4,7.853v3.639m19.411,0V22.411a2.426,2.426,0,0,1-2.426,2.426H6.426A2.426,2.426,0,0,1,4,22.411V11.492m19.411,0H4M8.853,3V7.853M18.558,3V7.853"
                transform="translate(-3.25 -2.25)"
                fill="none"
                stroke={color}
                stroke-linecap="round"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div>
            <p>
              <Moment format="DD/MM/YYYY">
                {item?.date}
              </Moment>
            </p>
            <p>{item?.label}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateView;
