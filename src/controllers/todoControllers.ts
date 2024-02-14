// src/controllers/todoController.ts
import { Request, Response } from "express";
import ToDo from "../models/todo";

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await ToDo.find();
    res.json(todos.reverse());
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { task } = req.body;
    const newTodo = await ToDo.create({ task });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  console.log(req.body.task);
  try {
    const { id } = req.params;
    const { task } = req.body;
    let updatedTodo;
    if (task) {
      updatedTodo = await ToDo.findByIdAndUpdate(
        id,
        { task: task },
        { new: true }
      );
    } else {
      updatedTodo = await ToDo.findByIdAndUpdate(
        id,
        { completed: true },
        { new: true }
      );
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
