import React from 'react';

export default class Button extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    small: React.PropTypes.bool,
    flat: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    value: React.PropTypes.string
  }

  render() {
    const { small, flat, className, ...rest } = this.props;

    const props = {
      className: 'st2-forms__button',
      ...rest
    };

    if (className) {
      props.className += ` ${className}`;
    }

    if (small) {
      props.className += ' st2-forms__button--small';
    }

    if (flat) {
      props.className += ' st2-forms__button--flat';
    }

    return <input type="button" data-test="rerun_button" {...props} />;
  }
}
