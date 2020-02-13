import { Todo } from "../db/models";

export const createTodo = async (req, res) => {
  const value = req.body.value;
  await Todo.create({
    value: value,
    completed: false
  });
  res.send("added a todo");
};

export const retrieveTodo = async (req, res) => {
  // TODO(samkohlq): return todo that corresponds with id provided by user
  const id = req.body.id;
  await Todo.findAll({});
  res.send("attempted to retrieve todo of id " + id);
};

/** updates completed status of todo, based on todo id provided by user */
export const updateTodo = async (req, res) => {
  const id = req.body.id;
  await Todo.update(
    {
      completed: true
    },
    {
      where: {
        id: id
      }
    }
  );
  res.send("marked todo of specific id to completed");
};

/** deletes todo based on todo id provided by user */
export const deleteTodo = async (req, res) => {
  const id = req.body.id;
  await Todo.destroy({
    where: {
      id: id
    }
  });
  res.send("deleted todo of id " + id);
};
