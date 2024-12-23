import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from 'src/services/user/user.service';

@Module({
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}
