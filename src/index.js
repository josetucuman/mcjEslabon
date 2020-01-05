const App = require('./app');


App.listen(App.get('port'),()=>{
    console.log('Server corriendo en ',App.get('port'))
});