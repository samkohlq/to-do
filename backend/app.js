import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import path from "path";

import {
  createTodo,
  retrieveTodo,
  updateTodo,
  deleteTodo
} from "./controllers/todoController";

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
  res.send("home");
});

// API to retrieve todo
app.get("/retrieve-todo", (req, res) => {
  retrieveTodo(req, res);
});

// API to create todo
app.post("/create-todo", (req, res) => {
  createTodo(req, res);
});

// API to update completion status to true
app.put("/update-todo", (req, res) => {
  updateTodo(req, res);
});

// API to delete todos
app.delete("/delete-todo", (req, res) => {
  deleteTodo(req, res);
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
  res.send(err.message);
});

module.exports = app;
