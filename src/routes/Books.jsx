import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch all books from Seussology API
        fetch('https://seussology.info/api/books')
            .then(response => response.json())
            .then(data => { setBooks(data); })
    }, []);

    return (
        <div>
            <h2>Books List</h2>
            <div className="books-list">
                {books.map(book => (
                    <Link key={book.id} to={`/books/${book.id}`}>
                        <img
                            src={book.image ? book.image : '/path/to/placeholder-image.jpg'}
                            alt={book.title}
                            className="book-cover"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Books;
