/**
 * @name OPTIONS
 * 
 * @description
 *    Swagger setup configurations
 * 
 * @author
 *  Mishu Parnami
 * 
 */

const OPTIONS = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath: '/api/v1',
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
    files: ['../api/routes.js'] //Path to the API handle folder
};

module.exports = OPTIONS;