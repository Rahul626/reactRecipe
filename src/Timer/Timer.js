import React from "react";
import "./Timer.css";

class InputTime extends React.Component {
  render() {
    return (
      <div className="app-input">
        <br></br>
        <h3 className="text-center">Timer App</h3>
        <br></br>
        <input
          type="number"
          value={this.props.value}
          onChange={this.props.handleChange}
          required
        />
      </div>
    );
  }
}

class Timer extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ fontSize: 100, marginLeft: 100 }}>
          {this.props.value}:{this.props.seconds}
        </h1>
      </div>
    );
  }
}

class StartButton extends React.Component {
  render() {
    return (
      <div >
        <button
          className="btn btn-lg btn-danger btn-lg btn-block"
          disabled={!this.props.value}
          onClick={this.props.startCountDown}
        >
          Start
        </button>
      </div>
    );
  }
}

class TimerApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      value: "",
      isClicked: false
      
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
    
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - min * 60;

    this.setState({
      value: min,
      seconds: sec
    });

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds
      });
    }

    if (min < 10) {
      this.setState({
        value: "0" + min
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }

    this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    let time = this.state.value;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked: true
    });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <div className="App">
          <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
              <Timer value={this.state.value} seconds={this.state.seconds} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="row App">
            <div className="col-md-4" />
            <div className="col-md-6">
              <InputTime
                value={this.state.value}
                handleChange={this.handleChange}
              />
              <Timer value={this.state.value} seconds={this.state.seconds} />
              <StartButton
                startCountDown={this.startCountDown}
                value={this.state.value}
              />
            </div>
          </div>
        </div>
      );
    }
  }
}
export default TimerApp;
