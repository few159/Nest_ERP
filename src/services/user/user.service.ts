import { Injectable } from '@nestjs/common';
import prisma from 'prisma/prisma';

@Injectable()
export class UserService {
    async findUser(email: string) {
        return await prisma.users.findFirst({
            where: {
                Email: email
            }
        })
    }
}
