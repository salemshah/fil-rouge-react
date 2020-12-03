import React from 'react';
import Search from '../search/Search'
import HeaderIcons from "./HeaderIcons";


const Header = () => {
    return (
        <div className="header">
            <div className="container h-100 pt-1">
                <div className="d-flex bd-highlight align-items-center h-100">
                    <div className="flex-fill bd-highlight">Flex item with a lot of content</div>
                    <div className="d-none d-lg-block flex-fill bd-highlight">
                        <Search/>
                    </div>
                    <div className="flex-fill bd-highlight text-right p r-0">
                        <div>
                            <HeaderIcons/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;