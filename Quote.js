import './Styles.css';
import { Button } from '@mui/material';
import React, { useState, useEffect } from "react";


import { useNavigate } from 'react-router-dom';
//import "./Quote.css";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  const handleClick = () => {
    getQuote();
  };

  const handleTweet = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const handleCopyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = `"${quote}" - ${author}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Quote Copied");
  };

  const [flag, setFlag] = React.useState(true);
  const addtofav = () => {
    setFlag(!flag);
    navigate(`/fav?quote=${encodeURIComponent(quote)}`);
  }

  return (
    <div className="quote-container">
      
      <div className="quote">
        <p className="quote-text">{quote}</p>
        <p className="quote-author">
        <span className="author-symbol">~</span>
          {author}
        </p>
        <Button className='fav' onClick={addtofav} variant="contained" 
             color={flag ? "primary" : "secondary"}>♡</Button>
             <br></br>
        <Button className='copy-to-clipboard' onClick={handleCopyToClipboard} variant="contained"
             color="info">Copy to Clipboard</Button>
      </div>

      <button className="quote-button" onClick={handleClick}>New Quote</button>
      
      <button className='quote__button--twitter' onClick={handleTweet}>Tweet</button>
      
    </div>
  );
}

export default Quote;