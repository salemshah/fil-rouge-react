import React from 'react';
import {HiOutlinePhone} from 'react-icons/hi'
import {RiLoginBoxLine} from 'react-icons/ri'

const TopHeader = () => {
    return (
        <div className="top-header">
            <div className="container">
                <div className="top-header-content d-flex bd-highlight align-items-center">
                    <div className="flex-grow-1 bd-highlight">
                        <HiOutlinePhone/>
                        <span> Call: 0767536911  </span>
                    </div>
                    <div className="bd-highlight">
                        <div>

                        </div>
                    </div>
                    <div className="bd-highlight">
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className="h-line"/>
            </div>
        </div>
    );
};

export default TopHeader;