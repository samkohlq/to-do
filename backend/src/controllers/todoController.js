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
  const todoToUpdate = await Todo.findByPk(id);
  await todoToUpdate.update({ completed: !todoToUpdate.completed });
  // sends updated status as response to request from frontend
  res.send(todoToUpdate);
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
