import React, {useState} from 'react';
import {ImSearch} from "react-icons/im";

const Search = () => {

    const [search, setSearch] = useState("")

    const handleOnChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    }
    return (
        <div className="h-100 vertical-center">
            <form>
                <input type="search" className="h-100" onChange={handleOnChange} value={search}
                       placeholder="Recherch..."/>
                <ImSearch className="fa"/>
            </form>
        </div>
    );
};

export default Search;