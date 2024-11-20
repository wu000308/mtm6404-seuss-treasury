import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BookDetails() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        // Fetch details for a specific book by ID from Seussology API
        fetch(`https://seussology.info/api/books/${id}`)
            .then(response => response.json())
            .then(data => { setBook(data); })
    }, [id]);

    if (!book) {
        return <p>Loading book details...</p>;
    }


    return (
        <div>
            <h2>{book.title}</h2>
            <img
                src={book.image ? book.image : '/path/to/placeholder-image.jpg'}
                alt={book.title}
                className="book-cover"
            />
            <p>{book.description}</p>
            <p><strong>Year Published:</strong> {book.year_published}</p>
        </div>
    );
}

export default BookDetails;
