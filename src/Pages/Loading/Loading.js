import React from 'react';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '600px' }}>
            <div class="spinner-grow text-success" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;