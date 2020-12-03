import React from 'react';
import {Badge} from "antd";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FaRegHeart} from "react-icons/fa";
import {GoGitCompare} from "react-icons/go";

const HeaderIcons = () => {
    return (
        <div className="d-flex justify-content-between d-flex align-items-center flex-row-reverse">
            <div className="text-center mr-3">
                <Badge size="small" count={55}>
                    <AiOutlineShoppingCart className="header-icon"/>
                </Badge>
                <p className="text-icon m-0">Cart</p>
            </div>
            <div className="text-center">
                <Badge size="small" count={55}>
                    <FaRegHeart className="header-icon"/>
                </Badge>
                <p className="text-icon m-0">Wishlist</p>
            </div>
            <div className="text-center">
                <GoGitCompare className="header-icon"/>
                <p className="text-icon m-0">Compare</p>
            </div>
        </div>
    );
};

export default HeaderIcons;