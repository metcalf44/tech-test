
import React from 'react';
import "../styles/SearchResults.css";
import PropTypes from "prop-types";


const SearchResults = ({ results }) => {

    return !results.length ? (
        <p className="search-results-error">No results</p>
    ) : (

        <div className="search-results">
            {results.map(image => (
                
                    <img className="card-image" 
                    src={image} 
                    alt="spaceImage" 
                    data-testid="image"
                    />
              
            ))}   
        </div>
    );
}

SearchResults.propTypes = {
    results: PropTypes.array.isRequired,
};

export default SearchResults