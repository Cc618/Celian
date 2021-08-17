import '../common/style.scss';
import React from 'react';
import App from '../pages/App';

// Popup transition duration in ms
const POPUP_CLOSE_DELAY = 250;

class Popup extends React.Component {
  constructor(props) {
    super(props);

    // If visible false, then there is a closing transition
    this.state = {visible: true};

    this.title = props.title;
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

            // Remove it after the transition
            window.setTimeout(App.closePopup, POPUP_CLOSE_DELAY);
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
