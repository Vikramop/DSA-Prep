import React, { Component } from 'react';
import Counter from './components/Counter1';

export default class App extends Component {
  componentDidMount() {
    console.log('component did mounted');
  }

  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentWillUnmount() {
    console.log('Component unmounted');
  }

  increements() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.state.count}</h1> */}
        {/*  now we will like maintain the folder str we will 
        code we will pass props */}

        <Counter number={this.state.count}></Counter>
        {/* <button
          onClick={() => {
            this.increements();
          }}
        >
          click me
        </button> */}
      </div>
    );
  }
}
