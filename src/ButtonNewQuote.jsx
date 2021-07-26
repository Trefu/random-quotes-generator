import "./ButtonStyle.css";

export const ButtonNewQuote = (props) => {
  const { newQuote } = props;

  return (
    <button id="submitBtn" className="button" onClick={newQuote}>New Quote</button>
  )
}
/* 
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


} */

export default ButtonNewQuote;
