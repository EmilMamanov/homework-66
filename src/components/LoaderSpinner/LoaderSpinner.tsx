import React from 'react';

const LoaderSpinner: React.FC = () => {
    return (
        <>
            <span className="spinner-border spinner-border-sm me-2"></span>
            <span className="visually-hidden">Loading...</span>
        </>
    );
};

export default LoaderSpinner;