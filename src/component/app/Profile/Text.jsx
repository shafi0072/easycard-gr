import React from 'react';

const Text = ({item}) => {
    return (
        <div className=''>
            <div className='text-render' dangerouslySetInnerHTML={{__html:item?.text}} />
        </div>
    );
};

export default Text;