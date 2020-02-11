import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

var app = express();

// view engine setup
// use the following middlewares to enhance our existing req object
// initialise logger from morgan
app.use(logger("dev"));
// convert headers into json and add to request object
app.use(express.json());
// decode characters in URL
app.use(express.urlencoded({ extended: false }));
// parse cookie header and populate req.cookies
app.use(cookieParser());
// allow access to files in the static directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("hello!");
});
app.post("/", (req, res) => {
  res.send("post");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
