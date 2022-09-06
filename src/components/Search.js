import { useState } from "react";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = ([]);
    const handleChange = (event) => {
        setSearchTerm(event.target.value)}

    return (
        <div>
            <div>
            <h1>Search</h1>
            {console.log("search entry test",searchTerm)}
            <form>
                <input type="search" placeholder="Search Here..." value={searchTerm}
                onChange={handleChange}
                />
                <button onClick={handleChange} type="submit">Search</button>
            </form>
            </div>
        </div>
        )}
// console.log ("search", searchTerm, setSearchTerm)
export default Search