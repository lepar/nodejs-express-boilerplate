import express from 'express';


const app = express();


import bodyParser from 'body-parser';

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing route
import routes from './listRoutes.js';
//register the route
routes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);
