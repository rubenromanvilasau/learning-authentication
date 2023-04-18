const express =  require('express');
const app = express();

// Routes
const loginRoutes = require('./src/routes/login.route');

app.set( 'port', process.env.PORT || 3000 );

app.use( '/login', loginRoutes );

app.listen( app.get( 'port' ), () => {
    console.log( 'Server listening on port ', app.get('port') );
});