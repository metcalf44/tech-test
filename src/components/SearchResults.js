
import React from 'react';
import "../styles/SearchResults.css";
import PropTypes from "prop-types";


const SearchResults = ({ results, searched }) => {

    if (results.length === 0 && searched === false) {
        return null;
    }
    if (results.length === 0 && searched === true) {
        return (
            <p className="search-results-error">No results</p>
        )
    } else {
        return (
        <div className="search-results">
            {results.map((image) => (
                    <img className="card-image"
                    key={image} 
                    src={image} 
                    alt="spaceImage" 
                    data-testid="image"
                    />
            ))}   
        </div>
        )
    }
}
        

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
};

export default SearchResults