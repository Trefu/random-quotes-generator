import "./App.css";
import Quotes from "./Quotes";
import { Component } from "react";

class App extends Component {
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
}

export default App;
