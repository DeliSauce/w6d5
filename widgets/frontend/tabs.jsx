import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {index: 0};
    this.propKeys = Object.keys(this.props.tabs);
  }

  updateIndex(index){
    console.log("update");
    // const index = this.propKeys.indexOf(e.key);
    console.log(index);
    this.setState({index});
  }

  render() {
    console.log("render");
    const tabs = this.propKeys.map((tab, index) => (
      <h1 key={tab} className="tab" onClick={this.updateIndex.bind(this, index)}>
        {tab}
      </h1>
    ));

    return (
      <div className="tabs">
        <ul className="tabs-header">
          {tabs}
        </ul>
        <article className="tabs-content">
          {this.props.tabs[this.propKeys[this.state.index]]}
        </article>
      </div>
    );
  }
}

export default Tabs;
