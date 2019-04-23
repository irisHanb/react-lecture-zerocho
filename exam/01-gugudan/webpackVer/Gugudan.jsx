const React = require('react');
const { Component } = React;

class Gugudan extends Component {
  getRandomNum = () => Math.ceil(Math.random() * 9);
  state = {
    first: this.getRandomNum(),
    second: this.getRandomNum(),
    answer: '',
    result: ''
  };
  updateInput = e => {
    this.setState({
      answer: e.currentTarget.value
    });
  };
  checkAnswer = e => {
    e.preventDefault();
    if (parseInt(this.state.answer) === this.state.first * this.state.second) {
      this.setState(prevState => {
        return {
          first: this.getRandomNum(),
          second: this.getRandomNum(),
          result: `딩동댕~ ${prevState.first} * ${prevState.second} = ${
            this.state.answer
          } 정답입니다.`
        };
      });
    } else {
      this.setState({
        result: '-- +) 틀렸다... '
      });
    }
    this.setState({
      answer: ''
    });
  };
  refInput = ele => (this.input = ele);

  render() {
    return (
      <React.Fragment>
        <p>{`${this.state.first} 와 ${this.state.second} 의 곱은?`}</p>
        <form onSubmit={this.checkAnswer}>
          <input
            type="number"
            ref={this.refInput}
            value={this.state.answer}
            onChange={this.updateInput}
          />
          <button>정답확인</button>
        </form>
        <p>{this.state.result}</p>
      </React.Fragment>
    );
  }
}

module.exports = Gugudan;
