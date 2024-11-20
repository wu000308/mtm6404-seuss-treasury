import React, { useEffect, useState } from 'react';

function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        // Fetch 10 random quotes from Seussology API
        fetch('https://seussology.info/api/quotes/random/10')
            .then(response => response.json())
            .then(data => setQuotes(data))
    }, []);

    return (
        <div>
            <h2>Random Quotes</h2>
            <div className="quotes-container">
                {quotes.map((quote, index) => (
                    <div key={index} className="quote-box">
                        <p>{quote.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Quotes;
