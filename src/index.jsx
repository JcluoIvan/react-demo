import ReactDOM from 'react-dom';
import React from 'react';

import AppHeader from './components/AppHeader';
import AppMain from './components/AppMain';

import './asset/style';

class App extends React.Component {

    render () {
        return (
            <div>
                <AppHeader />
                <AppMain />
            </div>
        );
    }

};




ReactDOM.render((
    <App />
), document.getElementById('app'));


