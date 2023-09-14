import React from "react";
import YouTube from "react-youtube";
var Vimeo = require("react-vimeo");
const Video = ({ item }) => {
  console.log(item);
  const youtubeVideoId = extractVideoId(
    item?.type === "Youtube" ? item?.url : ""
  );
  const opts = {
    height: "315",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const vimeoVideoId = item?.url?.split("/")?.reverse()[0];

  return (
    <>
      <div
        className={`${
          !item?.url ? "hidden" : "block mt-5 h-[315px] w-full md:w-[383px]"
        } `}
      >
        {item?.type === "Youtube" && (
          <>
            {item?.url && (
              <div className="mt-5 h-[315px] w-full md:w-[383px]">
                {/* <iframe
            width="460"
            height="315"
            src={item?.url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
                <YouTube  videoId={youtubeVideoId} opts={opts} />
              </div>
            )}
          </>
        )}
        {item?.type === "Vimeo" && (
          <>
            {item?.url && (
              <div className="mt-5 h-[315px] w-full  md:w-[383px]">
                {/* <iframe
                  src={item?.url}
                  title="Vimeo Video"
                  width="640"
                  height="360"
                  allowFullScreen
                /> */}
                <iframe
                  title="Vimeo Video"
                  src={`https://player.vimeo.com/video/${vimeoVideoId}`}
                  width="100%" // Set the width to 100%
                  height="315" // You can adjust the height as needed
                  frameborder="0"
                  allowFullScreen
                ></iframe>
                {/* <Vimeo
                  className="w-full h-[300px]"
                  style={{ width: "100%" }}
                  videoId={item?.url?.split("/")?.reverse()[0]}
                  autoplay={true}
                  width="100%"
                  height="315"
                /> */}
                ,
              </div>
            )}
          </>
        )}
        {item?.type === "Wistia" && (
          <>
            {item?.url && (
              <div className="mt-5 h-[315px] w-[383px]">
                {/* <iframe
                  src={item?.url}
                  title="Vimeo Video"
                  width="640"
                  height="360"
                  allowFullScreen
                /> */}
                <iframe
                  title="Wistia Video"
                  src={`https://fast.wistia.net/embed/iframe/${getWistiaVideoId(
                    item?.url
                  )}`}
                  width="100%" // Set the width to 100%
                  height="315" // You can adjust the height as needed
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                {/* <Vimeo
                  className="w-full h-[300px]"
                  style={{ width: "100%" }}
                  videoId={item?.url?.split("/")?.reverse()[0]}
                  autoplay={true}
                  width="100%"
                  height="315"
                /> */}
                ,
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

function extractVideoId(url) {
  const videoIdMatch = url.match(
    /(?:\?v=|\/embed\/|\/\d\d?\/|\/vi?\/|https:\/\/youtu\.be\/|\/v\/|\/e\/|https:\/\/www\.youtube\.com\/user\/[^#]*#([^\/]*?\/)*)?([^#\&\?]*).*/
  );
  return videoIdMatch && videoIdMatch[2].length === 11 ? videoIdMatch[2] : null;
}


function getWistiaVideoId(url) {
  const matches = url.match(/wmediaid=([^&]+)/);
  return matches ? matches[1] : null;
}

export default Video;
