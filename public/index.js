import ReactDemokit from '@feizheng/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactLayoutTrbla from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    layouts: ReactLayoutTrbla.layouts,
    value: 'la'
  };

  get valueCount() {
    return this.state.value.length;
  }

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-layout-trbla">
        <div className="text-center ">
          <label htmlFor="sel" className="mr-10 text-white">
            Select a value:
          </label>
          <select
            id="sel"
            className="p-3"
            onChange={(e) => {
              this.setState({ value: e.target.value });
            }}>
            {this.state.layouts.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <ReactLayoutTrbla value={this.state.value} className="mb-3">
          <div>start</div>
          <div>auto</div>
          {this.valueCount === 3 && <div>end</div>}
        </ReactLayoutTrbla>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
