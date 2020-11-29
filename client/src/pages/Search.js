import React, { useEffect, useState } from 'react';
import Books from "../components/Books";

function Search() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=dracula`)
            .then(response => response.json())
            .then(result => {
                setBooks(result.items);
            })
    }, []
    )
    return (
        <div>
            Search page
            {books.map(book => (
                <Books title= {book.volumeInfo.title}/>
            ))}
        </div>
    );
}

export default Search;