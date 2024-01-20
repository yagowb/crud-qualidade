"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs")); // ES6
//const fs = require("fs"); - Common JS
const { Interface } = require("readline");
const DB_FILE_PATH = "./core/db";
console.log("[CRUD]");
function create(content) {
    const todo = {
        date: new Date().toISOString(),
        content: content,
        done: false,
    };
    const todos = [
        ...read(),
        todo,
    ];
    // salvar content no sistema
    fs_1.default.writeFileSync(DB_FILE_PATH, JSON.stringify({
        todos,
        dogs: [],
    }, null, 2));
    return content;
}
function read() {
    const dbString = fs_1.default.readFileSync(DB_FILE_PATH, "utf-8");
    const db = JSON.parse(dbString);
    if (!db.todos) { //  fail fest validation
        return [];
    }
    return db.todos;
}
// SIMULATION
create("First TODO");
create("Second TODO");
console.log(read());
