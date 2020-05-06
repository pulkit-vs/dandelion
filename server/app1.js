"use strict";
// Node modules
const express = require('express');
const bodyParser = require("body-parser");

// set up app
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Swagger setup
const expressSwagger = require('express-swagger-generator')(app);
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/v1',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'AuthToken',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./server/api/routes.js'] //Path to the API handle folder
};
require('./server/api/routes.js')(app);
expressSwagger(options);
require('./server/sql-table');
app.listen(3000, () => console.log(`Swagger That API listening on port ${port}! ENV : ${process.env.NODE_ENV}`));
