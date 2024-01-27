import React from 'react';
import SearchResult from "../Component/Spalsh/SearchResult.jsx";
import Contact from '../Component/Spalsh/Contact.jsx';
import NavBarUser from '../Component/User/NavBarUser.jsx';
function SearchResults() {
    return (
        <div>
            <NavBarUser/>
            <SearchResult/>
            <SearchResult/>
            <SearchResult/>
            <Contact/>
        </div>
    );
}
export default SearchResults;