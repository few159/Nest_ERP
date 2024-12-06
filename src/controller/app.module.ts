import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../services/app.service';
import { ProductModule } from './product/product.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { ProductService } from 'src/services/product/product.service';
import { AuthService } from './auth/auth.service';
import { UserService } from 'src/services/user/user.service';

@Module({
  imports: [ProductModule, AuthModule, UserModule],
  controllers: [AppController, AuthController, UserController],
  providers: [AppService, ProductService, AuthService, UserService],
})
export class AppModule {}
