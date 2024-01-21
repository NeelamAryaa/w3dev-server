// src/models/ToDo.ts
import mongoose, { Document } from "mongoose";

interface IToDo extends Document {
  task: string;
  completed: boolean;
}

const ToDoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const ToDo = mongoose.model<IToDo>("ToDo", ToDoSchema);

export default ToDo;
