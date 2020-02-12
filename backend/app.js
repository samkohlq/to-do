import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import path from "path";
import Sequelize from "sequelize";

// create new sequealize instance with connection params
const sequelize = new Sequelize(
  "database_development",
  "postgres",
  "postgres",
  {
    host: "localhost",
    dialect: "postgres",
    port: "5432"
  }
);

// define the Todo model
const Todo = sequelize.define("todo", {
  value: Sequelize.STRING,
  completed: Sequelize.BOOLEAN
});

// sync model with database
Todo.sync().then(() => {
  console.log("synced with database");
  return Todo.create({
    value: "foobar",
    completed: false
  });
});

// connects app to database
sequelize.authenticate().then(() => {
  console.log("successfully connected to database");
});

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

// API to retrieve todos
app.get("/retrieve-todos", (req, res) => {
  Todo.findAll({}).then(() => {
    res.send("retrieved list of tasks");
  });
});

// API to create todo
app.post("/create-todo", (req, res) => {
  Todo.create({
    value: "set up CRUD operations",
    completed: false
  }).then(() => {
    res.send("added a task");
  });
});

// API to update completion status to true
app.put("/update-todo", (req, res) => {
  Todo.update(
    {
      completed: true
    },
    {
      where: {
        id: 1
      }
    }
    // only send response when "completed" has been updated
  ).then(() => {
    res.send("marked task of id 1 to completed");
  });
});

// API to delete todos
app.delete("/delete-todo", (req, res) => {
  Todo.destroy({
    where: {
      id: 2
    }
  })
    .then(() => {
      res.send("deleted task of id 2");
    })
    .catch(e => {
      console.log("error" + e);
    });
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
});

module.exports = app;
