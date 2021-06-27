
import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types"

const Search = ({ setSearchResults, setSearched }) => {
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSearchResults(await getImages(value));
        setSearched(true);
    };

    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input 
                className="search-input" 
                type="text" 
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search for"
                data-testid="search-input"
                />
                <button 
                className="search-btn" 
                type="submit"
                data-testid="search-btn"
                >
                    Display
                </button>
            </form>
        </>
    );
};

Search.propTypes = {
    setSearchResults: PropTypes.func.isRequired,
    setSearched: PropTypes.func.isRequired,
};

export default Search