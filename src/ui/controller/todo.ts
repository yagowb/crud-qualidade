async function get() {
    return fetch("/api/todos").then(async (respostadoServidor) => {
        const todosString = await respostadoServidor.text();
        const todosFromServer = JSON.parse(todosString).todos;
        return todosFromServer;
    });
}

export const todoController = {
    get,
};
