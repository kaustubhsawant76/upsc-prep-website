import React, { useEffect, useState } from "react";
import axios from "axios";

const CurrentAffairsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=YOUR_API_KEY")
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-3xl text-center font-bold mb-6">Current Affairs</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.url} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">{article.title}</h3>
            <p className="text-sm mb-2">{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentAffairsPage;