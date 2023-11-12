import { useState } from 'react';
import './styles.css';
import reloadIcon from '../assets/reload.png';

const QuoteGenerator = () => {
    const [quote, setQuote] = useState({
        quote: "The will of man is his happiness.",
        author: "Friedrich Schiller"
    });
    const fetchQuotes = async () => {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
            headers: { 'X-Api-Key': 'JFXSzwYJbqCM0IzVnvV9nw==JGfiHoxGAEzOjBdO'},
        });

        let quotes = await response.json();

        setQuote(...quotes);
    }

    return (
        <div className="quote">
            <div className="quote__text">{quote.quote}</div>
            <div className="quote__footer">
                <div className="quote__line"></div>
                <div className="quote__info">
                    <div className="quote__author">- {quote.author}</div>
                    <img 
                        className="quote__change" 
                        onClick={fetchQuotes} 
                        src={reloadIcon} 
                        alt="change quote button" />
                </div>
            </div>
        </div>
    )
}

export default QuoteGenerator;