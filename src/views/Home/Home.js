import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import NewsArticle from "./../../components/NewsArticle.js";

function Home() {
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState("Pune");

    const loadNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2024-06-13&sortBy=publishedAt&apiKey=091d6b7c752f44e3912ecd34a4f05b47`);
            console.log(response.data); // Log the API response
            setNews(response.data.articles);
        } catch (error) {
            console.error("Error fetching the news:", error);
        }
    };

    useEffect(() => {
        loadNews();
    }, []);

    useEffect(() => {
        loadNews();
    }, [searchQuery]);

    return (
        <div>
            <h1>All articles</h1>
            <input type="text" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

            <div className="news-container">
                {news.map((newsArticle, index) => {
                    const { author, title, description, url, urlToImage, publishedAt } = newsArticle;
                    return (
                        <NewsArticle
                            author={author}
                            title={title}
                            description={description}
                            url={url}
                            urlToImage={urlToImage}
                            publishedAt={publishedAt}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
