const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    given: '한희옥',
    answer: '',
    result: ''
  };

  checkAnswer = e => {
    e.preventDefault();
    if (
      this.state.given[this.state.given.length - 1] === this.state.answer[0]
    ) {
      this.setState({
        given: this.state.answer,
        answer: '',
        result: '오케이~ 고고!!'
      });
    } else {
      this.setState({
        answer: '',
        result: `잘 봐봐~ 끝말을 이어야지!!! - _ - +) `
      });
    }
    this.input.focus();
  };

  onChangeInput = e => {
    this.setState({
      answer: e.currentTarget.value
    });
  };

  input;
  refInput = ele => (this.input = ele);

  render() {
    return (
      <>
        <p>{this.state.given}</p>
        <form onSubmit={this.checkAnswer}>
          <input
            type="text"
            ref={this.refInput}
            value={this.state.answer}
            onChange={this.onChangeInput}
          />
          <button>입력!!!</button>
        </form>
        <p>{this.state.result}</p>
      </>
    );
  }
}

module.exports = WordRelay;
