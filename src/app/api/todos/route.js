import { prisma } from "../../../utils/prisma";

export const POST = async (req, res) => {
    const payload = await req.json();
    const {text} = payload;

    if (!text) {
      return new Response(JSON.stringify({ error: 'Text is required' }), { status: 422 });
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
      return new Response(JSON.stringify({ error: 'id and text are required' }), { status: 422 });
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
    return new Response(JSON.stringify({ error: 'id is required' }), { status: 422 });
  }

  await prisma.todo.delete({
    where: { id },
  });

  return new Response(JSON.stringify({message: 'deleted'}), { status: 200 });
}