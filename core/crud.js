const fs = require("fs");
const DB_FILE_PATH = "./core/db";


console.log("[CRUD]");

function create(content) {
    // salvar content no sistema
    fs.writeFileSync(DB_FILE_PATH, content);
    return content;
}



// SIMULATION
console.log(create("Hoje eu tô praticando na aula 2.1"));