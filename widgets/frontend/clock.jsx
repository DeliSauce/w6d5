import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: new Date()};
    console.log(this.state.time);
  }

  //solutions used SetInterval in componentDidMount and ClearInterval
  //in componentWillUnmount instead of setTimeout in my solution

  //checks for initial render
  componentDidMount() {
    setTimeout(this.tick.bind(this), 1000);
  }

  //checks subsequent renders
  componentDidUpdate() {
    setTimeout(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    return (
      <div>
        {this.state.time.toTimeString()}
      </div>
    );
  }

}

export default Clock;

//http://localhost:8080/
