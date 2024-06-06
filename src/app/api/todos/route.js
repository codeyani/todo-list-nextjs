import { prisma } from "../../../utils/prisma";

export const POST = async (req, res) => {
    const payload = await req.json();
    const {text} = payload;

    if (!text) {
      return res.status(400).json({ error: "task is required" });
    }

    const todo = await prisma.todo.create({
      data: { ...payload, isDone: false},
    });
    return new Response(JSON.stringify(todo), { status: 201 });
}

export const GET = async (req, res) => {
  const todos = await prisma.todo.findMany();
  return new Response(JSON.stringify(todos), { status: 200 });
}


export const PUT = async (req, res) => {
  const payload = await req.json();
  const {id, text} = payload;

    if (!id || !text) {
      return res.status(400).json({ error: "ID and text are required" });
    }

    const todo = await prisma.todo.update({
      where: { id },
      data: { text },
    });

    return new Response(JSON.stringify(todo), { status: 200 });
}

export const DELETE = async (req, res) => {
  const payload = await req.json();
  const {id} = payload;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  await prisma.todo.delete({
    where: { id },
  });

  return new Response(JSON.stringify({message: 'deleted'}), { status: 200 });
}