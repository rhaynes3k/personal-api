const express = require('express');
const {json} = require('body-parser');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');
const routes = require('./controllers/routes');

const app = express();
const port = 8900;


app.use(json());
app.use(middleware.addHeaders);




app.listen(port, () => {
    console.log('Listening on port #'  + port);
});
