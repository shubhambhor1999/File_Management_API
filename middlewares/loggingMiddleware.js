// middleware/loggingMiddleware.js
const morgan = require("morgan");

const loggerFormat =
  ":method :url :status :res[content-length] - :response-time ms";
const loggerOptions = { skip: (req, res) => res.statusCode < 400 };

const loggingMiddleware = morgan(loggerFormat, loggerOptions);

module.exports = loggingMiddleware;
