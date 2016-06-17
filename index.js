const express = require('express');
const {json} = require('body-parser');
const app = express();
const port = 9000;
// const mainCtrl = require('./controllers/mainCtrl.js');
const middleware = require('./controllers/middleware.js');
const personal = require('./controllers/personal.js');

app.use(json());
app.use(middleware.addHeaders);
personal(app);





app.listen(port, () => {
    console.log(`Express listening on ${port}`);
});
