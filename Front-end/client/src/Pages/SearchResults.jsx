import React from 'react';
import SearchResult from "../Component/Spalsh/SearchResult.jsx";
import SearchResult1 from "../Component/Spalsh/SearchResult1.jsx";
import Contact from '../Component/Spalsh/Contact.jsx';
import NavBarUser from '../Component/User/NavBarUser.jsx';
function SearchResults() {
    return (
        <div>
            <NavBarUser/>
            <SearchResult/>
            <SearchResult1/>
            <Contact/>
        </div>
    );
}
export default SearchResults;