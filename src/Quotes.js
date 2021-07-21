import "./Quotes.css";
import { Component } from "react";
import ButtonSocial from "./ButtonSocial";
import ButtonNewQuote from "./ButtonNewQuote";

class Quotes extends Component {
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

export default Quotes;
