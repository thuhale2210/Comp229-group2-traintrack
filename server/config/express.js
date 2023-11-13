const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');


module.exports = () => {
    var app = express();
    app.use(cors());
    app.use(bodyParser.json());
    if (process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }
    else if (process.env.NODE_ENV === 'production'){
        app.use(compress());
    }
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use('/', require('../src/routes/index.server.routes'));
    app.use(express.static('./node_modules'));
    
    return app;

}