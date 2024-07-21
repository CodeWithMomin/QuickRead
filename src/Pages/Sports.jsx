import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sports = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?category=sports&apiKey=${import.meta.env.REACT_APP_API_KEY}`)
      .then(response => {
        setData(response.data.articles);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false); // Set loading to false if there is an error
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <header><h1>Sports Headlines</h1></header>
      <div className="container">
        {loading ? (
          <div className="loading">
            <p>Loading...</p>
          </div>
        ) : (
          data.length > 0 ? (
            data.map((article, index) => (
              <div className="card" key={index}>
                <img
                  src={article.urlToImage || 'https://via.placeholder.com/300x180?text=No+Image'}
                  alt={article.title}
                  className="card-image"
                  loading='lazy'
                />
                <div className="card-content">
                  <h2 className="card-title">{article.title}</h2>
                  <p className="card-description">{article.description}</p>
                  <a href={article.url} className="read-more" target="_blank" rel="noopener noreferrer">Read More</a>
                </div>
              </div>
            ))
          ) : (
            <div className="no-news-found">
              <p>No sports news found</p>
            </div>
          )
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default Sports;
