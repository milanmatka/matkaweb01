import React, { useEffect, useState } from "react";
import { getStarlineResults } from "../services/api";

export const Testimonials = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const gameId = "682cea10d43e678601651ffe"; // Starline game ID

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await getStarlineResults(gameId);
        if (response.success) {
          setResults(response.data);
        } else {
          setError(response.error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    const hours = date.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours} ${period}`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div id="testimonials" className="text-center">
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div id="testimonials" className="text-center">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Starline Results</h2>
        </div>
        <div className="row">
          {results.map((result, i) => (
            <div key={result._id} className="col-md-4 col-sm-6">
              <div className="result-box">
                <div className="result-time">
                  <h4>{formatTime(result.date)}</h4>
                  <p>{formatDate(result.date)}</p>
                </div>
                <div className="result-number">
                  <div className="open-digits">
                    <h3>Open</h3>
                    <p className="result-digit">{result.openDigits}</p>
                  </div>
                  <div className="jodi-number">
                    <h3>Jodi</h3>
                    <p className="result-digit">{result.jodiResult}</p>
                  </div>
                  <div className="close-digits">
                    <h3>Close</h3>
                    <p className="result-digit">{result.closeDigits}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
