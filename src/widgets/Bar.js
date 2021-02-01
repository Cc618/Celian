import './Bar.scss';
import React from 'react';

// ratio color bgColor
class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    this.state = {visible: false};

    this.animLoop();
  }

  isVisible() {
    var rect = this.ref.current.getBoundingClientRect();

    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }

  // Called to update visible animation
  animLoop() {
    if (this.ref !== undefined && this.ref.current !== null) {
      if (this.isVisible()) {
        if (!this.state.visible) {
          this.setState({visible: true});
        }
      } else {
        if (this.state.visible) {
          this.setState({visible: false});
        }
      }
    }

    window.setTimeout(() => this.animLoop(), 1000 / 10);
  }

  render() {
    return (
      <div ref={this.ref}
        className="bar"
        style={{
          width: this.state.visible ? `${this.props.ratio * 100}%` : '0',
          backgroundColor: this.props.color}} />
    );
  }
}

export default Bar;
