// import React, { useState } from "react";
// import { IconButton } from "@material-ui/core";
// import FavoriteIcon from "@material-ui/icons/Favorite";

// function Fav() {
//   const [isFav, setIsFav] = useState(false);

//   function handleFavClick() {
//     setIsFav(!isFav);
//   }

//   return (
//     <IconButton onClick={handleFavClick}>
//       <FavoriteIcon color={isFav ? "secondary" : "default"} />
//     </IconButton>
//   );
// }

// export default Fav;

// import React from 'react'

// function Fav(props) {
//   return (
//     <div>
//         <h1>
//          {props.Quote} 
//         {props.Author}
//         </h1>
//     </div>
//   )
// }

// export default Fav
import React, { useState, useEffect } from 'react';
// import './Favourites.css';
import { useParams, useLocation } from 'react-router-dom';
import './Styles.css';

const Fav = () => {
  const { quote: quoteFromUrl } = useParams();
  const { search } = useLocation();
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  useEffect(() => {
    // Load saved quotes from local storage on component mount
    const savedQuotesFromLocalStorage = localStorage.getItem('savedQuotes');
    if (savedQuotesFromLocalStorage) {
      setSavedQuotes(JSON.parse(savedQuotesFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    // Retrieve quote from URL parameter
    const searchParams = new URLSearchParams(search);
    const quoteFromUrlParam = searchParams.get('quote');
    if (quoteFromUrlParam) {
      setQuote(quoteFromUrlParam);
    }
  }, [search]);

  const saveQuote = () => {
    if (quote) {
      // Add quote to savedQuotes array
      const updatedQuotes = [...savedQuotes, quote];
      setSavedQuotes(updatedQuotes);

      // Save updated quotes to local storage
      localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
    }
  };

  const handlePageRefresh = () => {
    // Delete all saved quotes when page is refreshed
    setSavedQuotes([]);
    localStorage.removeItem('savedQuotes');
  };

  useEffect(() => {
    // Add event listener for page refresh
    window.addEventListener('beforeunload', handlePageRefresh);
    return () => {
      // Remove event listener on component unmount
      window.removeEventListener('beforeunload', handlePageRefresh);
    };
  }, []);

  return (
    <div className='fav'>
  <br></br>
  <br></br>
  <br></br>
  {quote && <button className='quote-button' onClick={saveQuote}>Save Quote</button>}
  <br></br>
  <br></br>
  <br></br>
  {savedQuotes.length > 0 && (
    <div className='saved-quotes-list'>
      <ul>
        {savedQuotes.map((savedQuote, index) => (
          <li key={index}>{savedQuote}</li>
        ))}
      </ul>
    </div>
  )}
</div>

  );
};

export default Fav;