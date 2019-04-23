const React = require('react');
const { Component } = require('react');

class WordRelay extends Component {
  state = {
    text: 'Hello, webpack'
  };
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;
