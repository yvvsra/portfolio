import React from 'react';

const Wrapper =({ children }) => {
    return (
        <div className= "position-absolute w-300">
            {children}
        </div>
    );
}
export default Wrapper;