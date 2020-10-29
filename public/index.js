import ReactDemokit from '@feizheng/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactLayoutTrbla from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-layout-trbla">
        <ReactLayoutTrbla value="la" className="mb-3">
          <div>left</div>
          <div>auto</div>
        </ReactLayoutTrbla>
        <button className="button">Start~</button>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
