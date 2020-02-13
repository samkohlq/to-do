import { Todo } from "../db/models";

/** creates todo based on todo name provided by user */
export const createTodo = (req, res) => {
  // stores todo provided by user in variable
  const value = req.body.value;
  return Todo.create({
    value: value,
    completed: false
  }).then(() => {
    res.send("added a todo");
  });
};

export const retrieveTodo = (req, res) => {
  // TODO(samkohlq): return todo that corresponds with id provided by user
  const id = req.body.id;
  return Todo.findAll({}).then(() => {
    res.send("attempted to retrieve todo of id " + id);
  });
};

/** updates completed status of todo, based on todo id provided by user */
export const updateTodo = (req, res) => {
  const id = req.body.id;
  return Todo.update(
    {
      completed: true
    },
    {
      where: {
        id: id
      }
    }
  ).then(() => {
    res.send("marked todo of specific id to completed");
  });
};

/** deletes todo based on todo id provided by user */
export const deleteTodo = (req, res) => {
  const id = req.body.id;
  return Todo.destroy({
    where: {
      id: id
    }
  })
    .then(() => {
      res.send("deleted todo of id " + id);
    })
    .catch(e => {
      console.log("error" + e);
    });
};
