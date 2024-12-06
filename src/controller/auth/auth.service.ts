import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(email: string, password: string) {
        const dbUser = await this.userService.findUser(email);

        if(!dbUser || dbUser.Password !== password) throw new UnauthorizedException();

        const payload = {
            sub: dbUser.Id,
            acessa_ai_po: dbUser.Password
        }

        return {
            accessToken: await this.jwtService.signAsync(payload),
            expiresIn: new Date(new Date().getTime() + 1200)
        }
    }
}
