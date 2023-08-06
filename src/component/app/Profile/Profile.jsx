import React, { useEffect, useState } from 'react';
import MobileLoading from '../../core/MobileLoading';
import FieldData from "./FieldData";
import DottedQRCode from "./DottedQr";
const Profile = ({ id }) => {
    const [datas, setData] = useState(null)
    useEffect(() => {

        fetch(`https://business-card-backend-2.vercel.app/cards/visit/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [id])
    console.log(datas);
    return (

        <>
            {!datas && <MobileLoading />}
            {datas && <div className="">


            <div className="max-w-[500px] w-full mx-auto px-3">
      {datas?.display?.desgine === "flat" && (
        <>
          <div
            className="h-[400px] "
            style={{ background: datas?.display?.color }}
          >
            <img
              className="h-[95%] w-full object-cover"
              src={datas?.display?.ProfileImage}
              alt=""
            />
          </div>
          <div className="mt-5">
            <img
              className="md:w-3/4 mx-auto"
              src={datas?.display?.Logo}
              alt=""
            />
          </div>
        </>
      )}
      {datas?.display?.design === "classic" && (
        <>
          <div
            className=" w-[381px] h-[300px]  relative rounded"
            style={{ background: datas?.display?.color }}
          >
            <img
              className="h-full w-full object-cover rounded"
              src={datas?.display?.ProfileImage}
              alt=""
            />
            <div className="">
              <div className="absolute  top-[72%]  z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="381"
                  height="88.28"
                  viewBox="0 0 381 88.28"
                >
                  <path
                    id="wave"
                    d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z"
                    transform="translate(0 0)"
                    fill={datas?.display?.color}
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="32.781"
                  viewBox="0 0 96 32.781"
                >
                  <path
                    id="wave-left"
                    d="M0,35.773V68.554H96l-.032-1.475C63.791,67.267,33.386,56.325,0,35.773Z"
                    transform="translate(0 -35.773)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-[6px] right-0 z-[5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="285"
                  height="81.75"
                  viewBox="0 0 285 81.75"
                >
                  <path
                    id="wave-right"
                    d="M300.742,6.114c-30.018-.329-66.667,9.2-121,41.617C136.118,73.767,99.61,86.065,65.025,86.281H65v1.575H350V14.529C334.376,10.055,318.753,6.312,300.742,6.114Z"
                    transform="translate(-65 -6.106)"
                    fill="#fff"
                  />
                </svg>
              </div>
              <img
                className="absolute bottom-3 right-0 z-50 w-[100px]"
                src={datas?.display?.Logo}
                alt=""
              />
            </div>
          </div>
        </>
      )}

      <div
        className="mt-10 border-4 border-dotted p-3"
        style={{ borderColor: datas?.display?.color }}
      >
        <h2 className="text-xl font-extrabold">
          {datas?.profileInfo?.prefix && datas?.profileInfo?.prefix + "."}{" "}
          {datas?.profileInfo?.first_name +
            " " +
            datas?.profileInfo?.last_name}
        </h2>
        <h3 className="font-bold my-2">{datas?.profileInfo?.department}</h3>
        <h3 className="font-bold mb-2" style={{ color: datas?.display?.color }}>
          {datas?.profileInfo?.company}
        </h3>
        <h4 className="font-medium italic text-[#585858]">
          {datas?.profileInfo?.job_title}
        </h4>
      </div>
      <div className="mt-2">
        <p className="italic text-[#69727d]">
          {datas?.profileInfo?.introduction}
        </p>
      </div>
      <div className="my-5">
        <FieldData userData={datas}/>
      </div>

      <div className="flex gap-2 flex-wrap my-10">
        <h2 className="w-full mb-5 font-bold text-xl">SOCIAL MEDIA</h2>

        <a
          href={
            datas?.fields?.facebook[0]
              ? datas?.fields?.facebook[0]?.url
              : "#"
          }
          className="w-[40px] h-[40px] rounded-full  flex items-center justify-center bg-blue-900"
        >
          <svg
            id="Dribbble-Light-Preview"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="20"
            viewBox="0 0 10 20"
          >
            <g id="icons">
              <path
                id="facebook-_176_"
                data-name="facebook-[#176]"
                d="M335.821,7259v-9h2.732l.446-4h-3.179v-1.948c0-1.029.026-2.052,1.466-2.052h1.458v-2.86a16.121,16.121,0,0,0-2.519-.14c-2.646,0-4.3,1.657-4.3,4.7v2.3H329v4h2.923v9Z"
                transform="translate(-329 -7239)"
                fill="#fff"
                fill-rule="evenodd"
              />
            </g>
          </svg>
        </a>
        <a
          href={
            datas?.fields?.instagram[0]
              ? datas?.fields?.instagram[0]?.url
              : "#"
          }
          className="w-[40px] h-[40px] rounded-full  flex items-center justify-center bg-[#8A3AB9]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.5"
            height="22.5"
            viewBox="0 0 22.5 22.5"
          >
            <g id="instagram-svgrepo-com" transform="translate(1.25 1.25)">
              <path
                id="Path_10"
                data-name="Path 10"
                d="M19.786,5H11.214A5.714,5.714,0,0,0,5.5,10.714v8.571A5.714,5.714,0,0,0,11.214,25h8.571A5.714,5.714,0,0,0,25.5,19.286V10.714A5.714,5.714,0,0,0,19.786,5Z"
                transform="translate(-5.5 -5)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                fill-rule="evenodd"
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M13.143,16.286a3.643,3.643,0,1,1,2.576-1.067A3.643,3.643,0,0,1,13.143,16.286Z"
                transform="translate(-3.143 -2.643)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                fill-rule="evenodd"
              />
              <rect
                id="Rectangle_38"
                data-name="Rectangle 38"
                width="2"
                height="2"
                rx="1"
                transform="translate(14.8 5.2) rotate(-90)"
                fill="#fff"
              />
              <rect
                id="Rectangle_39"
                data-name="Rectangle 39"
                width="1.214"
                height="1.214"
                rx="0.5"
                transform="translate(15.173 4.827) rotate(-90)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="2.5"
              />
            </g>
          </svg>
        </a>
        <a
          href={
            datas?.fields?.twitter[0]
              ? datas?.fields?.twitter[0]?.url
              : "#"
          }
          className="w-[40px] h-[40px] rounded-full  flex items-center justify-center bg-[#1da1f2]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23.193"
            height="19.108"
            viewBox="0 0 23.193 19.108"
          >
            <path
              id="twitter-svgrepo-com"
              d="M14.539,1.393A4.641,4.641,0,0,1,17.707,2.6a8.106,8.106,0,0,0,2.524-.942,3.911,3.911,0,0,1-1.748,2.147A8.126,8.126,0,0,0,20.767,3.2a8,8,0,0,1-1.984,2.011c.007.166.011.333.011.5A10.942,10.942,0,0,1,7.617,16.715,11.923,11.923,0,0,1,1.379,15.01a7.892,7.892,0,0,0,.948.056A8.1,8.1,0,0,0,7.269,13.4a3.966,3.966,0,0,1-3.716-2.695,4.129,4.129,0,0,0,.749.07,4.024,4.024,0,0,0,1.047-.137A3.906,3.906,0,0,1,2.157,6.835V6.784a4.044,4.044,0,0,0,1.8.488A3.859,3.859,0,0,1,2.19,4.039a3.786,3.786,0,0,1,.538-1.951,11.4,11.4,0,0,0,8.2,4.056,3.766,3.766,0,0,1-.1-.884,3.7,3.7,0,0,1,3.715-3.868m6.229,1.8h0M14.539,0A5.024,5.024,0,0,0,9.48,4.563,10.02,10.02,0,0,1,3.787,1.192,1.38,1.38,0,0,0,2.728.7q-.054,0-.109,0a1.384,1.384,0,0,0-1.077.67A5.212,5.212,0,0,0,1.13,5.85a1.4,1.4,0,0,0-.357.933v.051A5.229,5.229,0,0,0,2.2,10.414a1.4,1.4,0,0,0,.038.729,5.252,5.252,0,0,0,1.591,2.367,6.884,6.884,0,0,1-1.5.164,6.378,6.378,0,0,1-.781-.046,1.516,1.516,0,0,0-.168-.01,1.394,1.394,0,0,0-.731,2.576,13.271,13.271,0,0,0,6.97,1.916,12.117,12.117,0,0,0,9.363-4.043,12.742,12.742,0,0,0,3.2-8.177,9.368,9.368,0,0,0,1.7-1.855,1.4,1.4,0,0,0-.315-1.982A1.4,1.4,0,0,0,21.1.58,1.378,1.378,0,0,0,19.539.455a6.637,6.637,0,0,1-1.48.632A6.292,6.292,0,0,0,14.539,0Z"
              transform="translate(0.54 0.5)"
              fill="#fff"
              stroke="#fff"
              stroke-width="1"
            />
          </svg>
        </a>
        <a
          href={
            datas?.fields?.linkedIn[0]
              ? datas?.fields?.linkedIn[0]?.url
              : "#"
          }
          className="w-[40px] h-[40px] rounded-full  flex items-center justify-center bg-[#cd201f]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              id="linkedin-svgrepo-com"
              d="M6,2A4,4,0,0,0,2,6V18a4,4,0,0,0,4,4H18a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4ZM4,6A2,2,0,0,1,6,4H18a2,2,0,0,1,2,2V18a2,2,0,0,1-2,2H6a2,2,0,0,1-2-2Zm5,5a1,1,0,0,0-2,0v6a1,1,0,0,0,2,0Zm.5-3.5A1.5,1.5,0,1,1,8,6,1.5,1.5,0,0,1,9.5,7.5ZM12,10a1,1,0,0,1,.82.428A3.51,3.51,0,0,1,14.5,10,3.593,3.593,0,0,1,18,13.571v3.4h0v0h0a1,1,0,0,1-2,0h0v0h0v-3.4A1.6,1.6,0,0,0,14.5,12a1.76,1.76,0,0,0-1.5.963V16.98h0a1,1,0,0,1-2,0h0V11.058h0v0h0v0h0A1,1,0,0,1,12,10Z"
              transform="translate(-2 -2)"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href={
            datas?.fields?.pinterest[0]
              ? datas?.fields?.pinterest[0]?.url
              : "#"
          }
          className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
          style={{ background: datas?.display?.color }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.621"
            height="19.768"
            viewBox="0 0 15.621 19.768"
          >
            <path
              id="pinterest-svgrepo-com"
              d="M175.46,13.692c-.528,2.722-1.21,4.685-3.117,6.049-.59-4.113.865-7.2,1.54-10.483-1.151-1.906.138-5.743,2.564-4.8,2.985,1.164-2.37,6.809,1.37,7.55,3.9.772,5.3-5.891,2.883-8.312-3.5-3.5-10.466-.531-9.381,4.424a2.066,2.066,0,0,1-1.05,2.566c-1.2-.488-1.32-2.179-1.258-3.829.138-3.794,3.462-6.451,6.8-6.82,4.216-.465,8.173,1.524,8.719,5.431.616,4.408-1.822,9.472-6.331,9.128a8.487,8.487,0,0,1-2.731-.907"
              transform="translate(-168.996 0.027)"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href={
            datas?.fields?.tikTok[0] ? datas?.fields?.tikTok[0]?.url : "#"
          }
          className="w-[40px] h-[40px] rounded-full  flex items-center justify-center"
          style={{ background: datas?.display?.color }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.87"
            height="24.412"
            viewBox="0 0 21.87 24.412"
          >
            <path
              id="tik-tok-brand-assets-video-socialnetwork-oneline-svgrepo-com"
              d="M24,8.63A5.742,5.742,0,0,1,18,3H14.5V16.708c0,3.917-3.084,5.593-5.139,4.105a2.984,2.984,0,0,1,2.389-5.329V11.323c-2.5,0-7.75.979-7.75,7.1,0,7.833,8.518,7.589,10.5,6.556,3.225-1.68,4-3.5,4-7.535V10.588A17.2,17.2,0,0,0,24,12.057"
              transform="translate(-3.1 -2.1)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.8"
            />
          </svg>
        </a>
      </div>
      <div className="my-10">
        <h2 className="w-full mb-5 font-bold text-xl">GET MY CARD</h2>
        <DottedQRCode
          value={`${window?.location?.href}`}
          size={300}
          level="M"
          includeMargin
          pattern="Square" // Change this prop to "Dots", "Rounded", or "Diamond"
        />
      </div>
      <div className="fixed bottom-5 left-[50%] -translate-x-2/4">
        <button
          className="text-white px-4 py-1 text-[16px] rounded"
          style={{ background: datas?.display?.color }}
        >
          + Add to contacts
        </button>
      </div>
    </div>




            </div>}
        </>
    );
};

export default Profile;