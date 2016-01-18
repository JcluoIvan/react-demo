import flux from 'flux';

let Dispatcher = new flux.Dispatcher;

let debug = Dispatcher.register(function(data) {
    if (! data.action) console.error('unknown action Dispatcher');
})

export default Dispatcher;