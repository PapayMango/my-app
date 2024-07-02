import { PrismaClient } from '@prisma/client';
export const fetchData = async() => {
    const prisma = new PrismaClient();
    const posts =  await prisma.error.findMany();
    console.log(posts)
    return {
        props : {posts}
    }
}