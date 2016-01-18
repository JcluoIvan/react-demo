import React from 'react';

import AppAction from '../actions/AppAction';

class AppHeader extends React.Component {

    constructor (props) {

        super(props);

        this.state = { value: null }

    }

    onInputChange (e) {
        this.setState({ value: e.target.value });
    }

    onAddData () {
        AppAction.addData(this.state.value);
        this.setState({ value: '' });
    }

    render () {

        return (
            <div id="Component-AppHeader">
                <input 
                    value={this.state.value} 
                    onChange={this.onInputChange.bind(this)} />
                <button onClick={this.onAddData.bind(this)}>
                    Add Data
                </button>
            </div>
        );
    }

};

export default AppHeader;