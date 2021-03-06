const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./src/routes');

app.use(cors());

app.use(express.json());
app.use(routes);
/* app.use('/', require('./src/controllers/EmailController')); */

app.listen(process.env.PORT || 3333);