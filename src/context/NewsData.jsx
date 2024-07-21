import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsData = ({message}) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://newsapi.org/v2/everything?q=${message}&apiKey=${import.meta.env.REACT_APP_API_KEY}`)
            .then(response => setData(response.data.articles)
        )
            .catch(error => setError('Error fetching data:', error));
        console.log(message);

            // console.log(data);
                }, [message]);

    return (
        <div>
            {error && <p>{error}</p>}
            {data.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                {data.map((article, index) => (
                  <div className="card" key={index}>
                    <img src={article.urlToImage} alt={article.title} className="card-image" loading='lazy' />
                    <h3 className="card-title">{article.title}</h3>
                    <p className="card-description">{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link">Read more</a>
                  </div>
                ))}
              </div>
            )}
        </div>
    );
};

export default NewsData;
