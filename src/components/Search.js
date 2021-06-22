
import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
    const [value, setValue] = useState();
    return (
        <>
            <form className="search-form">
                <input 
                className="search-input" 
                type="text" 
                onChange={(e) => setValue(e.target.value)}/>
                <button className="searchBtn" type="submit">Search</button>
            </form>
        </>
    );
};

export default Search