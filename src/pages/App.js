// Wraps main pages

import '../common/style.scss';
import './App.scss';
import React from 'react';
import Home from './Home';
import Experiences from './Experiences';
import Skills from './Skills';
import Projects from './Projects';
import {changeLang, lang} from '../common/data';

// Popup shown as main popup
let currentPopup = null;

// Sets the value of the overflow-y style variable for the main screen
function setMainOverflowY(value) {
    document.getElementsByTagName('body')[0].style.overflowY = value;
    document.getElementsByTagName('html')[0].style.overflowY = value;
}

class App extends React.Component {
    static printMode = false;
    static instance = null;

    constructor(props) {
        super(props);

        App.instance = this;
    }

    // Shows a new popup
    static showPopup(popup) {
        currentPopup = popup;

        setMainOverflowY('hidden');

        App.instance.setState({});
    }

    // Closes the current popup
    static closePopup() {
        currentPopup = null;

        setMainOverflowY('scroll');

        App.instance.setState({});
    }

    render() {
        return <div className="app-layout" lang={lang}>
            {/* Display current popup if necessary */}
            {currentPopup !== null && currentPopup}

            <div className="section">
                <Home onChangeLang={() => {
                    changeLang();
                    this.setState({});
                }} />
                <Experiences />
                <Skills />
            </div>

            <Projects />
		</div>;
    }
}

export default App;
