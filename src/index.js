import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import middleware from './middleware';
import config from './config.json';
import mongoose from 'mongoose';

require("dotenv").config();
const session = require("express-session");
const passport = require("passport");

mongoose
  .connect("mongodb://localhost/spend-smart-database", {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("../package.json").name;

const app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// connect to db
// initializeDb( db => {

// 	// internal middleware
// 	app.use(middleware({ config, db }));

// 	// api router
// 	app.use('/api', api({ config, db }));

// 	app.server.listen(process.env.PORT || config.port, () => {
// 		console.log(`Started on port ${app.server.address().port}`);
// 	});
// });

const MongoStore = require("connect-mongo")(session);
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    reserve: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

app.use(passport.initialize())
app.use(passport.session())

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

const index = require('./routes/index')
app.use("/",index);

const authRoutes =require("./routes/auth")
app.use("/api/auth",authRoutes);

export default app;
