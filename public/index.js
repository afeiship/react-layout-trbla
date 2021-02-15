import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactLayoutTrbla from '../src/main';
import './assets/style.scss';

const LAYOUT_MAPPING = {
  la: 'left -> auto',
  lar: 'left -> auto -> right',
  ar: 'auto -> right',
  lr: 'left -> right or justify',
  ta: 'top -> auto',
  tab: 'top -> auto -> bottom',
  ab: 'auto -> bottom',
  tb: 'top -> bottom or justify'
};

class App extends React.Component {
  state = {
    layouts: ReactLayoutTrbla.layouts,
    value: 'la'
  };

  get valueCount() {
    return this.state.value.length;
  }

  render() {
    const { value } = this.state;
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
        <h1 className="text-center text-white" style={{ fontSize: 60 }}>
          {LAYOUT_MAPPING[value]}
        </h1>
        <ReactLayoutTrbla value={value} className="mb-3">
          <div>start</div>
          <div>auto</div>
          {(this.valueCount === 3 || value === 'lr' || value === 'tb') && (
            <div>end</div>
          )}
        </ReactLayoutTrbla>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
