// Wraps main pages

import '../common/style.scss';
import './App.scss';
import React from 'react';
import Home from './Home';
import Experiences from './Experiences';
import Skills from './Skills';
import Projects from './Projects';
import {changeLang, lang} from '../common/data';
import Popup from '../widgets/Popup';

let popupShown = false;

class App extends React.Component {
    static printMode = false;

    render() {
        return <div className="app-layout" lang={lang}>
            {popupShown &&
                <Popup title="My Popup" onClosed={() => {
                    popupShown = false;
                    this.setState({});
                }} content={<h1>Hello</h1>} />
            }

            <div className="section">
                <Home onChangeLang={() => {
                    changeLang();
                    this.setState({});
                }} />
                <Experiences />
                <Skills />
            </div>

            {/* TODO : Remove test */}
            <a onClick={() => {
                popupShown = true;
                this.setState({});
            }}>POPUP</a>

            <Projects />
		</div>;
    }
}

export default App;
