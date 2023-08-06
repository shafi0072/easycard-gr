import React from "react";
import Data1 from "./Data1";


const FieldData = ({ userData }) => {
  console.log(userData)
  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17.085"
      height="19.102"
      viewBox="0 0 17.085 19.102"
    >
      <path
        id="phone-svgrepo-com"
        d="M11.012,5.671S10.726,5,10.288,5a1.09,1.09,0,0,0-.8.336c-.149.137-2.648,2.191-2.648,2.191a2.361,2.361,0,0,0-.671,1.829,12.117,12.117,0,0,0,1.493,5.26,24.358,24.358,0,0,0,6.119,7.239,14.192,14.192,0,0,0,3.4,1.9,9.868,9.868,0,0,0,1.652.346,1.678,1.678,0,0,0,1.082-.334c.465-.338,3.076-2.437,3.076-2.437a.8.8,0,0,0-.1-1.249c-.746-.671-3.01-2.164-3.495-2.556a1.2,1.2,0,0,0-1.475.047c-.3.272-.83.719-.9.775-.1.075-.364.317-.662.2a9.137,9.137,0,0,1-3.385-2.975,9.245,9.245,0,0,1-1.809-3.32.486.486,0,0,1,.2-.57c.215-.149,1.008-.81,1.008-.81a1.144,1.144,0,0,0,.3-1.1c-.214-.6-1.655-4.095-1.655-4.095Z"
        transform="translate(-6.162 -5)"
        fill="#fff"
      />
    </svg>
  );

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
        fill="#fff"
      />
    </svg>
  );
  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22.5"
      height="22.5"
      viewBox="0 0 22.5 22.5"
    >
      <path
        id="email-svgrepo-com"
        d="M17.444,13A4.444,4.444,0,1,1,13,8.556,4.445,4.445,0,0,1,17.444,13Zm0,0v1.667a2.778,2.778,0,0,0,2.778,2.778h0A2.778,2.778,0,0,0,23,14.667V13A10,10,0,1,0,13,23h4.444"
        transform="translate(-1.75 -1.75)"
        fill="none"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2.5"
      />
    </svg>
  );
  const locationIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.905"
      height="22.545"
      viewBox="0 0 16.905 22.545"
    >
      <g id="layer1" transform="translate(0.75 0.75)">
        <path
          id="path929"
          d="M9.022,288.8a7.71,7.71,0,0,0-7.7,7.7c0,7.469,7.266,13.147,7.266,13.147a.7.7,0,0,0,.873,0s7.266-5.678,7.266-13.147A7.715,7.715,0,0,0,9.022,288.8Zm0,1.4a6.293,6.293,0,0,1,6.3,6.3c0,6.11-5.533,10.938-6.3,11.591-.763-.651-6.3-5.479-6.3-11.591A6.288,6.288,0,0,1,9.022,290.2Z"
          transform="translate(-1.322 -288.797)"
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
        />
        <path
          id="circle931"
          d="M4.232,290.385a1.323,1.323,0,1,0,1.324,1.322A1.326,1.326,0,0,0,4.232,290.385Zm0,.529a.794.794,0,1,1-.793.793A.79.79,0,0,1,4.232,290.914Z"
          transform="translate(3.469 -284.876)"
          fill="none"
          stroke="#fff"
          stroke-width="1.5"
        />
      </g>
    </svg>
  );

  const linkIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.001"
      height="20.049"
      viewBox="0 0 21.001 20.049"
    >
      <path
        id="url-_1424_"
        data-name="url-[#1424]"
        d="M246.238,448.523a3.783,3.783,0,0,1,.669-6.017,4.314,4.314,0,0,1,5.189.6l.639.608a1.056,1.056,0,0,0,1.444,0,.938.938,0,0,0,0-1.374l-.54-.514a6.527,6.527,0,0,0-8.709-.3,5.639,5.639,0,0,0-.135,8.373l.722.687a1.056,1.056,0,0,0,1.444,0,.938.938,0,0,0,0-1.374Zm14.835.378-.521-.5a1.056,1.056,0,0,0-1.444,0,.938.938,0,0,0,0,1.374l.639.608a3.82,3.82,0,0,1,.627,4.941,4.218,4.218,0,0,1-6.319.637l-.722-.687a1.056,1.056,0,0,0-1.444,0,.938.938,0,0,0,0,1.374l.722.687a6.342,6.342,0,0,0,8.775-.11,5.806,5.806,0,0,0-.313-8.329Zm-4.131,5.69-9.261-8.817a.941.941,0,0,1,0-1.375,1.058,1.058,0,0,1,1.444,0l9.262,8.817a.941.941,0,0,1,0,1.375,1.06,1.06,0,0,1-1.445,0Z"
        transform="translate(-242.5 -439.499)"
        fill="#fff"
        stroke="#fff"
        stroke-width="1"
        fill-rule="evenodd"
      />
    </svg>
  );

  const whatsapppIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21.582"
      height="21.575"
      viewBox="0 0 21.582 21.575"
    >
      <g id="whatsapp-svgrepo-com" transform="translate(0.348 0.25)">
        <path
          id="Path_14"
          data-name="Path 14"
          d="M14.278,11.492c-.266-.126-1.538-.755-1.776-.853s-.406-.126-.587.14-.671.839-.825,1.021-.294.2-.559,0a7.174,7.174,0,0,1-2.084-1.287,7.342,7.342,0,0,1-1.4-1.8c-.154-.252,0-.392.112-.531s.252-.294.392-.448A1.944,1.944,0,0,0,7.8,7.3a.531.531,0,0,0,0-.462c0-.126-.587-1.4-.811-1.916s-.42-.448-.573-.448H5.858a1.007,1.007,0,0,0-.7.322A2.937,2.937,0,0,0,4.25,6.96,5.021,5.021,0,0,0,5.3,9.687,11.636,11.636,0,0,0,9.76,13.6c.615.266,1.091.42,1.468.545a3.538,3.538,0,0,0,1.636.1,2.7,2.7,0,0,0,1.762-1.231,2.336,2.336,0,0,0,.154-1.231A1.451,1.451,0,0,0,14.278,11.492Z"
          transform="translate(0.869 1.082)"
          fill="#fff"
          stroke="#fff"
          stroke-width="0.5"
        />
        <path
          id="Path_15"
          data-name="Path 15"
          d="M18.351,3.549A10.293,10.293,0,0,0,10.953.5,10.405,10.405,0,0,0,1.989,16.094L.59,21.478l5.51-1.4a10.349,10.349,0,0,0,4.965,1.259h-.112a10.405,10.405,0,0,0,7.4-17.789Zm-7.4,16a8.559,8.559,0,0,1-4.405-1.217L6.24,18.15,2.967,19l.867-3.189-.2-.322a8.636,8.636,0,1,1,7.314,4.056Z"
          transform="translate(-0.59 -0.5)"
          fill="#fff"
          stroke="#fff"
          stroke-width="0.5"
        />
      </g>
    </svg>
  );
  const viberIcon = (
    <svg id="viber-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="20.938" height="21.584" viewBox="0 0 20.938 21.584">
      <path id="Path_16" data-name="Path 16" d="M12.924,4a.924.924,0,0,0,0,1.847,3.7,3.7,0,0,1,2.7,1,3.7,3.7,0,0,1,1,2.7.924.924,0,1,0,1.847,0,5.539,5.539,0,0,0-1.541-4A5.54,5.54,0,0,0,12.924,4Z" transform="translate(-1.531 -0.823)" fill="#fff" />
      <path id="Path_17" data-name="Path 17" d="M5.013,7.853C5.118,7.018,6.2,5.884,7.064,6.01h0c.72.137,1.31,1.22,1.7,1.934.064.117.122.225.175.316a.915.915,0,0,1-.154,1.148l-.089.071c-.329.261-.756.6-.656.941a13.173,13.173,0,0,0,3.639,3.627c.348.2.618-.189.85-.524.055-.079.107-.155.158-.219a.9.9,0,0,1,1.14-.158A12.715,12.715,0,0,1,15.8,14.562a.78.78,0,0,1,.165,1.03c-.372.7-1.449,1.626-2.23,1.438A12.833,12.833,0,0,1,5.074,8.363a.916.916,0,0,1-.064-.488Z" transform="translate(-0.997 -0.976)" fill="#fff" />
      <path id="Path_18" data-name="Path 18" d="M12.924,7a.924.924,0,1,0,0,1.847,1.082,1.082,0,0,1,.924.924.924.924,0,1,0,1.847,0A2.9,2.9,0,0,0,12.924,7Z" transform="translate(-1.531 -1.052)" fill="#fff" />
      <path id="Path_19" data-name="Path 19" d="M6.994,22.054q.039.022.081.04c.5.216,1.12-.266,2.358-1.228l1.24-.964a17.572,17.572,0,0,0,6.292-.825,6.466,6.466,0,0,0,3.967-3.967,18.256,18.256,0,0,0,0-9.813,6.466,6.466,0,0,0-3.967-3.967,22.489,22.489,0,0,0-11.66,0A6.466,6.466,0,0,0,1.337,5.3a18.256,18.256,0,0,0,0,9.813A6.466,6.466,0,0,0,5.3,19.076a10.211,10.211,0,0,0,1.212.363C6.516,21.007,6.516,21.791,6.994,22.054Zm1.369-2.7V18.323A.46.46,0,0,0,8,17.872a17.043,17.043,0,0,1-2.085-.539A4.618,4.618,0,0,1,3.081,14.5a14.1,14.1,0,0,1-.568-4.3,14.1,14.1,0,0,1,.568-4.3A4.618,4.618,0,0,1,5.915,3.073a17.436,17.436,0,0,1,5.2-.665,17.39,17.39,0,0,1,5.239.665,4.618,4.618,0,0,1,2.834,2.834,14.1,14.1,0,0,1,.568,4.3,14.1,14.1,0,0,1-.568,4.3,4.618,4.618,0,0,1-2.834,2.834,16.881,16.881,0,0,1-6.121.705.465.465,0,0,0-.3.1Z" transform="translate(-0.666 -0.56)" fill="#fff" fill-rule="evenodd" />
    </svg>

  );

  return (
    <div>
      {userData?.fields?.Phone?.map((items, index) => <Data1
        color={userData?.display?.color}
        icon={phoneIcon}
        title={items?.Number}
        extra={items?.Code}
        label="office"
      />)}
      {userData?.fields?.website?.map((items, index) => <Data1
        color={userData?.display?.color}
        icon={websiteIcon}
        title={items?.address}
        extra=""
        label={items?.label}
      />)}
    {
      userData?.fields?.email?.map((items,index)=>  <Data1
      color={userData?.display?.color}
      icon={emailIcon}
      title={items.address}
      extra=""
      label={items.label}
    />)
    }
      {
        userData?.fields?.address?.map((items,index)=><Data1
        color={userData?.display?.color}
        icon={locationIcon}
        title={items.location}
        extra=""
        label={items.label}
      />)
      }
      {
        userData?.fields?.link?.map((items,index)=><Data1
        color={userData?.display?.color}
        icon={linkIcon}
        title={items.url}
        label={items.label}
      />)
      }
     {
      userData?.fields?.whatsApp?.map((items,index)=> <Data1
      color={userData?.display?.color}
      icon={whatsapppIcon}
      title={items.number}
      label={items.label}
    />)
     }
    {
      userData?.fields?.viber?.map((items,index)=>  <Data1
      color={userData?.display?.color}
      icon={viberIcon}
      title={items.number}
      extra=""
      label={items.label}
    />)
    }
    </div>
  );
};

export default FieldData;
