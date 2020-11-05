/* SNIPPETS
numberInput={this.numberInput} 
onClick={this.props.numberInput()}

Reference: https://github.com/MyNameIsURL/react-calculator-app/blob/master/src/App.css
*/
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "25*3",
      displayAnswer: "",
      buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "AC", "+", "-", "/", "=", "."],
    };
  }
  // function to handle number inputs
  input = (event) => {
    // clear
    if (event.target.value === "AC") {
      this.setState({
        userInput: "",
      });
    } else if (event.target.value === "=") {
      this.setState({
        userInput: math.evaluate(this.state.userInput),
        // case for invalid inputs
        // double *
        //double /
      });
    } else {
      this.setState({
        userInput: this.state.userInput + event.target.value,
      });
    }
  };

  render() {
    // render button component for each item in numbers arr
    // individually render these components instead
    const numbers = this.state.buttons.map((i) => (
      <ButtonComponent buttVal={i} input={this.input} />
    ));

    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"AC","+", "-", "/", "=", ".", "*"]
    return (
      <div className="cont">
        <div className="calc-wrapper">
          <Input input={this.state.userInput} />
          <div className="row">
            <ButtonComponent buttVal={1} input={this.input} />
            <ButtonComponent buttVal={2} input={this.input} />
            <ButtonComponent buttVal={3} input={this.input} />
            <ButtonComponent buttVal={4} input={this.input} />
          </div>
          <div className="row">
            <ButtonComponent buttVal={5} input={this.input} />
            <ButtonComponent buttVal={6} input={this.input} />
            <ButtonComponent buttVal={7} input={this.input} />
            <ButtonComponent buttVal={8} input={this.input} />
          </div>
          <div className="row">
            <ButtonComponent buttVal={9} input={this.input} />
            <ButtonComponent buttVal={0} input={this.input} />
            <ButtonComponent buttVal={"AC"} input={this.input} />
            <ButtonComponent buttVal={"="} input={this.input} />
          </div>
          <div className="row">
            <ButtonComponent buttVal={"-"} input={this.input} />
            <ButtonComponent buttVal={"/"} input={this.input} />
            <ButtonComponent buttVal={"+"} input={this.input} />
            <ButtonComponent buttVal={"*"} input={this.input} />
          </div>
        </div>
      </div>
    );
  }
}

class ButtonComponent extends React.Component {
  render() {
    let val = this.props.buttVal;
    return (
      <button className="button-wrapper" onClick={this.props.input} value={val}>
        {val}
      </button>
    );
  }
}

const Input = (props) => {
  return <div className="input">{props.input}</div>;
};
// component for actions
// uses different event functions than number

export default AppComponent;
