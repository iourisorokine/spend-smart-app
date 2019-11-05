'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();
var session = require("express-session");
var passport = require("passport");

_mongoose2.default.connect("mongodb://localhost/spend-smart-database", {
  useNewUrlParser: true
}).then(function (x) {
  console.log('Connected to Mongo! Database name: "' + x.connections[0].name + '"');
}).catch(function (err) {
  console.error("Error connecting to mongo", err);
});

var app_name = require("../package.json").name;

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

// logger
app.use((0, _morgan2.default)('dev'));

// 3rd party middleware
app.use((0, _cors2.default)({
  exposedHeaders: _config2.default.corsHeaders
}));

app.use(_bodyParser2.default.json({
  limit: _config2.default.bodyLimit
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

var MongoStore = require("connect-mongo")(session);
app.use(session({
  secret: process.env.SESSION_SECRET,
  reserve: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: _mongoose2.default.connection
  })
}));

app.server.listen(process.env.PORT || _config2.default.port, function () {
  console.log('Started on port ' + app.server.address().port);
});

var index = require('./routes/index');
app.use("/", index);

var authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

exports.default = app;
//# sourceMappingURL=index.js.map