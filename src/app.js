import React from 'react';
import ReactDOM from 'react-dom';

import '../public/index.css';

class App extends React.Component {
    render() {
        return (
            <div>
                React App.!
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
