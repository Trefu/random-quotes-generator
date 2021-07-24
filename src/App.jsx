import "./App.css";
import Quotes from "./Quotes";
import { arrRandomVal, backgroundColors, fetchQuotes } from './utils'
import { useEffect, useState } from "react";
export const App = () => {
  const [color, setColor] = useState('');
  const [quote, setQuote] = useState('');
  const [quotes, setQuotes] = useState([]);

  const newBgColor = () => {
    setColor((prevColor) => {
      let newColor = arrRandomVal(backgroundColors);
      if (prevColor === newColor) return newBgColor()
      return newColor
    })
  }

  const newQuote = () => {
    setQuote(arrRandomVal(quotes));
  }

  useEffect(() => {
    newBgColor();
    const fetchData = async () => {
      const data = await fetchQuotes();
      setQuotes(data.results)
      setQuote(newQuote)
      newQuote()
      console.log(quote)
    }
    fetchData()

  }, [])
  return (
    <div className="app-container" style={{ backgroundColor: color }}>
      <Quotes quote={quote} newBgColor={newBgColor} newQuote={newQuote} quotes={quotes} />

    </div>

  )
}
/* class App extends Component {
  constructor(props) {
    super(props);
    this.changeBgColor = this.changeBgColor.bind(this);
    this.state = {
      backgroundColors: [
        "#A30B37",
        "#BD6B73",
        "#BBB6DF",
        "#C6C8EE",
        "#2C4251",
        "#F79F79",
        "#F7D08A",
        "#87B6A7",
        "#5B5941",
      ],
      selectedColor: "",
    };
  }
  componentDidMount() {
    this.changeBgColor();
  }

  changeBgColor() {
    let color =
      this.state.backgroundColors[
        Math.floor(Math.random() * this.state.backgroundColors.length)
      ];
    this.setState({
      selectedColor: color,
    });
  }

  render() {
    return (
      <div className="App">
        <header
          className={`App-header }`}
          style={{
            backgroundColor: this.state.selectedColor,
            transition: "background-color 1000ms linear",
          }}
        >
          <Quotes action={this.changeBgColor} />
        </header>
      </div>
    );
  }
} */

export default App;
