import { IsEmail, IsString, IsEnum, IsBoolean, MinLength, IsOptional } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    nombre: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsEnum(UserRole)
    @IsOptional()
    rol?: UserRole;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}