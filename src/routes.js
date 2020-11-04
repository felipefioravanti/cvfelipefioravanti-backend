const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const emailController = require('./controllers/EmailController');

routes.use(bodyParser.urlencoded({extended: false}));
routes.use(bodyParser.json());

routes.post('/emailsmtp', async function(req, res) {
    const params = req.body;
    const name = params.contactName;
    const email = params.contactEmail;
    const title = params.contactTitle;
    const message = params.contactMessage;

    await emailController.Teste(name, email, title, message);
});

module.exports = routes;