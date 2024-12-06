import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    async addProduct(@Body() loginBody: { email: string, password: string }) {
        return await this.authService.login(loginBody.email, loginBody.password)
    }

}
