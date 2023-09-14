import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromptsRoute(app : FastifyInstance){
    app.get('/prompts', async () => {
        const prompts = await prisma.prompt.findMany({})
        console.log("PROMPTS", prompts)
        return prompts
    })
}