import { Todo } from "../db/models";

// creates task based on task name provided by user
export const createTodo = (req, res) => {
  // stores task provided by user in variable
  const value = req.body.value;
  return Todo.create({
    value: value,
    completed: false
  }).then(() => {
    res.send("added a task");
  });
};

export const retrieveTodo = (req, res) => {
  // TODO: return task that corresponds with id provided by user
  const value = req.body.id;
  return Todo.findAll({}).then(() => {
    res.send("attempted to retrieve task of id " + value);
  });
};

// updates completed status of task, based on task id provided by user
export const updateTodo = (req, res) => {
  const value = req.body.id;
  return Todo.update(
    {
      completed: true
    },
    {
      where: {
        id: value
      }
    }
  ).then(() => {
    res.send("marked task of specific id to completed");
  });
};

// deletes task based on task id provided by user
export const deleteTodo = (req, res) => {
  const value = req.body.id;
  return Todo.destroy({
    where: {
      id: value
    }
  })
    .then(() => {
      res.send("deleted task of id " + value);
    })
    .catch(e => {
      console.log("error" + e);
    });
};
