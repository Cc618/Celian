// Wraps main pages

import '../common/style.scss';
import './App.scss';
import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import {changeLang, lang} from '../common/data';

class App extends React.Component {
    static printMode = false;

    render() {
        return <div className="app-layout" lang={lang}>
            <Home onChangeLang={() => {
                changeLang();
                this.setState({});
            }} />
            <Skills />
            <Projects />
		</div>;
    }
}

export default App;
