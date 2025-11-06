import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private configService: ConfigService,
        private usersService: UsersService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET')  || 'clave_petshop_2024_carol_adriana',
        });
    }

    async validate(payload: any) {
        const user = await this.usersService.findOne(payload.sub);
        return {
            id: user.id,
            email: user.email,
            nombre: user.nombre,
            rol: user.rol,
        };
    }
}