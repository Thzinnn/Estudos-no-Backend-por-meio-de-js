import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getAll = async () => {
    return await prisma.user.findMany()
}

const create = async (dados) => {
    return await prisma.user.create({
        data: dados
    })
}

const getById = async (id) => {
    return await prisma.user.findMany( {
        where: {
            id
        }
    })
}

export default {getAll, create, getById}