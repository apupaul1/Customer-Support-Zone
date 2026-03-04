import React from 'react';

const Loading = () => {
    return (
        <div className="flex lg:w-2/3 w-full flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    );
};

export default Loading;