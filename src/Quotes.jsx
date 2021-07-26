import "./Quotes.css";

import ButtonSocial from "./ButtonSocial";
import ButtonNewQuote from "./ButtonNewQuote";
import { useEffect, useState } from "react";
import { arrRandomVal } from "./utils";

export const Quotes = (props) => {
  const { newBgColor, quotes } = props
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
    console.log(fading)
    setTimeout(() => {
      newQuote()

      console.log(fading)
      setFading(false)
    }, 2000);
  }


  useEffect(() => {
    newQuote()
  }, [])

  return (
    <>
      <div id="quote-box" className={`quotes-container successfully-saved ${fading ? 'hide-opacity' : ''}`}>
        <p className="quote">{quote.content}</p>
        <p id="autor" className="author">
          {quote.author}
        </p>
        <ButtonNewQuote newBgColor={newBgColor} newQuote={handleClick} />
        <ButtonSocial content="facebook" />
        <ButtonSocial content="twitter" />
      </div>

    </>
  )
}

/*         <ButtonNewQuote newBgColor={newBgColor} newQuote={newQuote} />
        {       <ButtonSocial content="facebook" />
      <ButtonSocial content="twitter" /> } */

/* class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      isLoaded: false,
    };
  }
  handler = (data) => {
    this.setState({
      quote: data.quote,
      author: data.author,
      isLoaded: this.isLoaded,
    });
  };
  componentDidMount() {
    console.log(this.props);
    fetch("https://random-math-quote-api.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        this.handler(data);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div id="quote-box" className="quotes-container">
        <p className="quote">{this.state.quote}</p>
        <p id="autor" className="author">
          {this.state.author}
        </p>
        <ButtonNewQuote action={this.props.action} handler={this.handler} />
        <ButtonSocial content="facebook" />
        <ButtonSocial content="twitter" />
      </div>
    );
  }
}
 */
export default Quotes;
