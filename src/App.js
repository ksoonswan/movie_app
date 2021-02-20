import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello contructor");
  }

  state = {
    count: 0,
  };

  add = () => {
    console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };

  componentDidMount() {
    console.log("componentDidMount 컴포넌트가 태어날때 사용");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate 컴포넌트가 업데이트될때 사용");
  }

  componentWillMount() {
    console.log("componentWillMount는 컴포넌트가 사라질때 작동");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
