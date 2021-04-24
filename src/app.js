import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/home';

import '../public/index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
