import Info from './info';
import React from 'react';
import marked from 'marked';

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      display: false
    };
  }

  handleChange(e) {
    this.setState({input: e.target.value});
  }

  handleRequest() {
    this.setState({display: !this.state.display});
  }

  render() {
    const ans = marked(this.state.input);
    $("#targ").html(ans);

    return (
      <div id="big-wrapper">
        <div id="wrapper">
          <button id="mybutton" onClick={this.handleRequest.bind(this)}>Help!</button>
          <div className="subheading"><h4>Type Here:</h4></div>
          <textarea id="text" className="boxy" value={this.state.input} onChange={this.handleChange.bind(this)} />
          <div className="subheading"><h4>Output to appear...</h4></div>
          <div id="targ" className="boxy"></div>
        </div>

        <Info show={this.state.display}/>
      </div>
    );
  }
};

export default Master;
