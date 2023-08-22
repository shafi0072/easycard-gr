import React from "react";
const YouTube = ({ item }) => {
  // console.log(item)
  return (
    <>
      <div className={`${!item?.url ? "hidden" : "block mt-5"} `}>
        {item?.url && (
          <div className="mt-5">
            <iframe
              width="383"
              height="315"
              src={item?.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
};

export default YouTube;
