"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import { getAllToDos } from "./controllers/todoControllers";
const todoControllers_1 = require("./controllers/todoControllers");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
console.log(process.env.MONGODB_URL);
mongoose_1.default.connect(`${process.env.MONGODB_URL}`);
app.get("/todos", todoControllers_1.getAllToDos);
app.post("/todos", todoControllers_1.addTodo);
app.put("/todos/:id", todoControllers_1.updateTodo);
app.delete("/todos/:id", todoControllers_1.deleteTodo);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
