import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.inputRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.focused = this.focused.bind(this);
  }

  focused() {
    this.inputRef.current.focus();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <form>
        <label>
          <input
            type="text"
            style={{ margin: "10px" }}
            value={this.state.value}
            ref={this.inputRef}
            onChange={this.handleChange}
          />
        </label>
        <input
          type="submit"
          style={{ margin: "10px" }}
          disabled={String(this.state.value).toLowerCase().includes("реакт")}
          value="Отправить"
        />
        <input type="button" onClick={this.focused} value="Focus" />
      </form>
    );
  }
}
