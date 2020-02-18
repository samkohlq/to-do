import { Todo } from "../db/models";

export const createTodo = async (req, res) => {
  const value = req.body.value;
  await Todo.create({
    value: value,
    completed: false
  });
  res.send("added a todo");
};

export const retrieveTodos = async (req, res) => {
  const todos = await Todo.findAll({});
  res.send(todos);
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
