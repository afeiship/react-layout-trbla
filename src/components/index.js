import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'react-layout-trbla';
const LAYOUT_TYPES = [
  // x
  'la',
  'lar',
  'ar',
  'lr',
  // y
  'ta',
  'tab',
  'ab',
  'tb'
];

const LAYOUT_ALIGN_TYPES = [
  'stretch',
  'center',
  'flex-start',
  'flex-end',
  'space-between',
  'space-around',
  'baseline',
  'initial',
  'inherit'
];

export default class ReactLayoutTrbla extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static layouts = LAYOUT_TYPES;
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The container tag name.
     */
    nodeName: PropTypes.any,
    /**
     * The layout type.
     */
    value: PropTypes.oneOf(LAYOUT_TYPES),
    /**
     * The flex layout align-items.
     */
    align: PropTypes.oneOf(LAYOUT_ALIGN_TYPES)
  };

  static defaultProps = {
    nodeName: 'div',
    align: 'initial'
  };

  render() {
    const {
      className,
      nodeName,
      value,
      align,
      children,
      ...extraProps
    } = this.props;
    const props = {
      'data-component': CLASS_NAME,
      'data-value': value,
      'data-align': align,
      'className': classNames(CLASS_NAME, className),
      ...extraProps
    };

    return React.createElement(nodeName, {
      children,
      ...props
    });
  }
}
