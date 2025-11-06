import { IsString, IsEmail, IsBoolean, MinLength, IsOptional } from 'class-validator';

export class CreateSupplierDto {
    @IsString()
    @MinLength(2)
    nombre: string;

    @IsString()
    @MinLength(2)
    contacto: string;

    @IsString()
    telefono: string;

    @IsEmail()
    email: string;

    @IsString()
    direccion: string;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}