import "./ButtonStyle.css";
import { Component } from "react";

class ButtonSocial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
    };
    this.icons = {
      facebook: <span className="fab fa-facebook"></span>,
      twitter: <span className="fab fa-twitter"></span>,
    };
  }
  click = () => {
    console.log(this.props);
  };
  render() {
    return (
      <button className="button" onClick={this.click}>
        {this.icons[this.props.content]}
      </button>
    );
  }
}

export default ButtonSocial;
