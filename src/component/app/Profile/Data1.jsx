import React from 'react';

const Data1 = ({color,icon,title,extra,label}) => {
    return (
        <div className='flex gap-3 mt-3 items-center'>
            <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center' style={{background:color}}>
                {icon}
            </div>
            <div>
                <p className='w-[217px]'>
                    {title && title} <span className='ms-5'> {extra && `extra: ${extra}`} </span> <br /> {label&& label}
                </p>
            </div>
        </div>
    );
};

export default Data1;