import "./ButtonStyle.css";
import { Component } from "react";

class ButtonNewQuote extends Component {
  handleClick = (e) => {
    e.preventDefault();
    fetch("https://random-math-quote-api.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => {
        this.props.handler(data);
        this.props.action();
      });
  };

  render() {
    return (
      <button id="submitBtn" className="button" onClick={this.handleClick}>
        New Quote
      </button>
    );
  }
}

export default ButtonNewQuote;
