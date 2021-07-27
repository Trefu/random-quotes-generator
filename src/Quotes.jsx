import "./Quotes.css";
import './Loading'
import { useEffect, useState } from "react";
import { arrRandomVal } from "./utils";
import Loading from "./Loading";

export const Quotes = (props) => {
  const { quotes, newBgColor } = props
  const [quote, setQuote] = useState('');
  const [fading, setFading] = useState(false);
  const newQuote = () => {
    setQuote((prevQuote) => {
      let pickedQuote = arrRandomVal(quotes);
      if (pickedQuote === prevQuote) return newQuote();
      return pickedQuote;
    });

  }

  const handleClick = () => {
    setFading(true)
    setTimeout(() => {
      newQuote()
      setFading(false)
      newBgColor()
    }, 2000);
  }

  useEffect(() => {
    newQuote()
  }, [])
  if (!quote) return <Loading />
  return (
    <>
      <div id="quote-box" className={`quotes-container successfully-saved ${fading ? 'hide-opacity' : ''}`}>
        <p id='text' className="quote">{quote.content}</p>
        <p id="author" className="author">
          {quote.author}
        </p>
        <button className={`link ${fading ? 'hide' : ''}`} onClick={handleClick} id='new-quote'>New Quote</button>
        <a className={`link ${fading ? 'hide' : ''}`} id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.content}%0A-${quote.author}`} >Tweet</a>
      </div>

    </>
  )
}

export default Quotes;
