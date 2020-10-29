# react-layout-trbla
> Simply trbla layout for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-layout-trbla
```

## update
```shell
npm update @feizheng/react-layout-trbla
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-layout-trbla/dist/style.scss";

  // customize your styles:
  $react-layout-trbla-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@feizheng/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactLayoutTrbla from '@feizheng/react-layout-trbla';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-layout-trbla">
          <ReactLayoutTrbla className="bg-gray-800 mb-5 text-white" />
          <button className="button">Start~</button>
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

[version-image]: https://img.shields.io/npm/v/@feizheng/react-layout-trbla
[version-url]: https://npmjs.org/package/@feizheng/react-layout-trbla

[license-image]: https://img.shields.io/npm/l/@feizheng/react-layout-trbla
[license-url]: https://github.com/afeiship/react-layout-trbla/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-layout-trbla
[size-url]: https://github.com/afeiship/react-layout-trbla/blob/master/dist/react-layout-trbla.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-layout-trbla
[download-url]: https://www.npmjs.com/package/@feizheng/react-layout-trbla
