import Dispatcher from '../dispatcher/Dispatcher';
import { EventEmitter } from 'events';

var cache = {
    auto_inc: 0,
    last_remove: null,
    rows: [],
};

const Store = Object.assign({}, EventEmitter.prototype, {
    getDataRows () {
        return cache.rows;
    },

    dispatchIndex: Dispatcher.register(function(data) {
        switch (data.action) {
            case 'add.data':
                cache.rows.push({
                    id: (cache.auto_inc++),
                    value: data.value
                });
                Store.emit('add.data');
                break;

            case 'remove.data':
                cache.last_remove = null;
                console.log(data.id);
                cache.rows = cache.rows.filter(o => {
                    if (o.id === data.id) {
                        cache.last_remove = o;
                        return false;
                    }
                    return true;
                });
                (cache.last_remove) && Store.emit('remove.data');
                break;
        }
    }),

});

export default Store;