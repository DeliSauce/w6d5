import React from 'react';
import Tabs from './tabs';
import Clock from './clock';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temp: 34};
  }

  render() {

    let tabData = {one: "I am the first", two: "Second pane here", three: "Third pane here"};
    return (
      <div>
        {<Tabs tabs={tabData}/>}
        {<Clock />}
      </div>
    );
  }
}

export default Root;
