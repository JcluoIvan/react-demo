import React from 'react';

import AppAction from '../actions/AppAction';
import AppStore from '../stores/AppStore';

class AppMain extends React.Component {

    constructor (props) {

        super(props);

        this.state = { rows: AppStore.getDataRows() };

    }

    componentDidMount() {
        
        this._onUpdated = this.onUpdated.bind(this);

        AppStore.on('add.data', this._onUpdated);
        AppStore.on('remove.data', this._onUpdated);

    }


    onUpdated() {
        console.log(AppStore.getDataRows());
        this.setState({
            rows: AppStore.getDataRows()
        });
    }

    onRemove(id) {
        AppAction.removeData(id);
    }

    renderRow(row) {
        return (
            <li key={row.id}>
                <label> 
                    {row.value} 
                </label>
                <button onClick={this.onRemove.bind(this, row.id)}> 
                    Remove 
                </button>
            </li>
        );
    }

    render () {
        let { rows } = this.state;
        return (
            <ul id="Component-AppMain">
                {rows.map(row => this.renderRow(row))}
            </ul>

        );
    }

};

export default AppMain;