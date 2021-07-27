import "./App.css";
import Quotes from "./Quotes";
import Loading from './Loading'
import { arrRandomVal, backgroundColors, fetchQuotes } from './utils'
import { useEffect, useState } from "react";
export const App = () => {
  const [isLoaded, setIsloaded] = useState(false)
  const [color, setColor] = useState('');
  //Array con todas las frases fetcheadas
  const [quotes, setQuotes] = useState([{
    content: "HIT 'EM YIYIII HIT' EM!!!!!",
    author: 'Augusto Narvaez'

  },
  {
    content: "Don't put illusion sausages on the grill of decadence",
    author: 'Mauro Gaston'
  },
  {
    content: 'It is true that today there was a role xd *vanish*',
    author: 'Andrés Caballero Streppel'
  },
  {
    content: 'Alea iacta est',
    author: 'Mariano Tomás Menéndez Guerrero'

  },
  {
    content: 'Ñi Ñi Ñi Ñi',
    author: 'Luca Andrea Maltauro'
  },
  {
    content: "if you can't kill them build a castle behind them",
    author: 'Mariano Tomás Menéndez Guerrero'

  },
  {
    content: 'and if you tell the anecdote?',
    author: 'The Patas'
  },
  {
    content: 'Seventh letter of the alphabet',
    author: 'Juan Sebastian Rodriguez Izquierdo'
  }
  ]);
  const newBgColor = () => {
    setColor((prevColor) => {
      let newColor = arrRandomVal(backgroundColors);
      if (prevColor === newColor) return newBgColor()
      return newColor
    })
  }

  //recibe toma un array de frases y selecciona una al azar


  useEffect(() => {
    newBgColor();
    const fetchData = async () => {
      const data = await fetchQuotes();
      setQuotes([...quotes, ...data.results]);
      setIsloaded(true)
    }
    fetchData()

  }, []);


  if (!isLoaded) return <Loading />
  console.log(quotes)
  return (

    <div className="app-container" style={{ backgroundColor: color }}>
      <Quotes quotes={quotes} newBgColor={newBgColor} />

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
