// Wraps main pages

import React from 'react';
import Home from './Home';
import Skills from './Skills';
import changeLang from '../common/data';

class App extends React.Component {
    render() {
        return <div>
            <Home onChangeLang={() => {
                changeLang();
                this.setState({});
            }} />
            <Skills />
		</div>;
    }
}

export default App;
