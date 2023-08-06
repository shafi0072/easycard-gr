import React, { useEffect, useState } from 'react';

const Profile = ({id}) => {
  const [datas, setData] = useState({})
  useEffect(() => {
    fetch(`https://business-card-backend-2.vercel.app/cards/visit/${id}`)
    .then(res => res.json())
    .then(data => setData(data)) 
    .catch(err => console.log(err))
  },[datas, id])
    return (
        <div>
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
        </div>
    );
};

export default Profile;