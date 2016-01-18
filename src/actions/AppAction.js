import Dispatcher from '../dispatcher/Dispatcher';

let actions = {};

actions.addData = function (value) {
    Dispatcher.dispatch({
        action: 'add.data',
        value,
    });
};

actions.removeData = function (id) {
    Dispatcher.dispatch({
        action: 'remove.data',
        id,
    })
};

export default actions;
