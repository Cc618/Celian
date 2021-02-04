// Wraps main pages

import '../common/style.scss';
import React from 'react';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import {changeLang, lang} from '../common/data';

class App extends React.Component {
    render() {
        return <div lang={lang}>
            <Home onChangeLang={() => {
                changeLang();
                this.setState({});
            }} />
            {/* TODO */}
            {/* <Skills /> */}
            {/* <Projects /> */}
		</div>;
    }
}

export default App;
