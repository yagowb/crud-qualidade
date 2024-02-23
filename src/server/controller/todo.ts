import { z } from "zod";
import { todoRepository } from "@server/repository/todo";
import { NextApiRequest, NextApiResponse } from "next";

async function get(req: NextApiRequest, res: NextApiResponse) {
    const query = req.query;
    const page = Number(query.page);
    const limit = Number(query.limit);

    if (query.page && isNaN(page)) {
        res.status(400).json({
            error: {
                message: "Page must be a number",
            },
        });
        return;
    }
    if (query.limit && isNaN(limit)) {
        res.status(400).json({
            error: {
                message: "Limit must be a number",
            },
        });
        return;
    }
    const output = todoRepository.get({
        page,
        limit,
    });

    res.status(200).json({
        total: output.total,
        pages: output.pages,
        todos: output.todos,
    });
}

const TodoCreateBodySchema = z.object({
    content: z.string(),
});

async function create(req: NextApiRequest, res: NextApiResponse) {
    // fail fast validations
    const body = TodoCreateBodySchema.safeParse(req.body);
    if (!body.success) {
        res.status(400).json({
            error: {
                message: "You need to provide a content to create  TODO",
            },
        });
        return;
    }

    // Here we have the data
    const createdTodo = await todoRepository.createByContent(body.data.content);

    res.status(201).json({
        todo: createdTodo,
    });
}

export const todoController = {
    get,
    create,
};
