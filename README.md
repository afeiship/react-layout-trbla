# react-layout-trbla
> Simply trbla layout for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-layout-trbla
```

## properties
| Name      | Type   | Required | Default   | Description                           |
| --------- | ------ | -------- | --------- | ------------------------------------- |
| className | string | false    | -         | The extended className for component. |
| nodeName  | any    | false    | 'div'     | The container tag name.               |
| value     | enum   | false    | -         | The layout type.                      |
| align     | enum   | false    | 'initial' | The flex layout align-items.          |


## usage
1. import css
  ```scss
  @import "~@jswork/react-layout-trbla/dist/style.css";

  // or use sass
  @import "~@jswork/react-layout-trbla/dist/style.scss";

  // customize your styles:
  $react-layout-trbla-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactLayoutTrbla from '@jswork/react-layout-trbla';
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

  ```

## documentation
- https://afeiship.github.io/react-layout-trbla/


## license
Code released under [the MIT license](https://github.com/afeiship/react-layout-trbla/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-layout-trbla
[version-url]: https://npmjs.org/package/@jswork/react-layout-trbla

[license-image]: https://img.shields.io/npm/l/@jswork/react-layout-trbla
[license-url]: https://github.com/afeiship/react-layout-trbla/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-layout-trbla
[size-url]: https://github.com/afeiship/react-layout-trbla/blob/master/dist/react-layout-trbla.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-layout-trbla
[download-url]: https://www.npmjs.com/package/@jswork/react-layout-trbla
