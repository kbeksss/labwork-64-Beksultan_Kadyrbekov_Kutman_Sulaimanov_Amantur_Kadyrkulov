import React from 'react';
import './Spinner.css';
const Spinner = () => {
    return (
        <div className='Backdrop'>
            <div className='Spinner'>
                <div className="spinner-box">
                    <div className="configure-border-1">
                        <div className="configure-core"/>
                    </div>
                    <div className="configure-border-2">
                        <div className="configure-core"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;