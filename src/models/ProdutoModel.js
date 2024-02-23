import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getAll = async () => {
    return prisma.user.findMany()
}

const Create = async ()  => {
    return prisma.user.create()
}

const getById = async () => {
    return await prisma.user.findMany( {
        where: {
            id
        }
    })
}

export default {getAll, Create, getById}