import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temp: 4};
  }

  render() {
    return (
      <div>

        {this.state.temp}


      </div>
    );
  }
}

export default Root;
