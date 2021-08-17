import '../common/style.scss';
import React from 'react';

// Popup transition duration in ms
const POPUP_CLOSE_DELAY = 250;

class Popup extends React.Component {
  constructor(props) {
    super(props);

    // If visible false, then there is a closing transition
    this.state = {visible: true};

    this.title = props.title;
    this.onClosed = props.onClosed;
    this.content = props.content;
  }

  render() {
    return <div className={"popup-wrapper " + (this.state.visible ? "popup-show" : "popup-hide")}>
      <div className="popup-card">
        <div className="popup-top">
          <p className="popup-title">{this.title}</p>
          <i className="material-icons popup-close" onClick={() => {
            // Close only
            if (!this.state.visible) return;

            // Hide with transition
            this.setState({visible: false});

            // Hide and remove inputs
            window.setTimeout(this.onClosed, POPUP_CLOSE_DELAY);
          }}>close</i>
        </div>
        <div className="popup-content">
          {this.content}
        </div>
      </div>
    </div>;
  }
}

export default Popup;
