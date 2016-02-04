import * as express from "express";
import * as example from "./routes/example";

export var app = express();

app.use('/', express.static('public'));
app.use('/api/example', example.router);