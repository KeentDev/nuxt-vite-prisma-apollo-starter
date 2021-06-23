import { PrismaClient } from '@prisma/client'
import faker from 'faker'
const bcrypt = require('bcryptjs')


const prisma = new PrismaClient()

async function encryptPass(password: string) {
    return await bcrypt.hash(password, 10)
}

async function seed() {
    const admin = await prisma.account.create({
        data: {
            username: 'admin',
            password: await encryptPass('12345678'),
            emailAddress: faker.internet.email(),
            status: 1,
        }
    })

    return Promise.all([admin])
        .then(() => {
            console.log('\n✅ All data has been sucessfully seeded.');
        })
        .catch(e => {
            console.error(e)
            process.exit(1)
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
}

export default seed;