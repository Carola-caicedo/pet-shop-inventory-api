import { IsString, IsBoolean, MinLength, IsOptional } from 'class-validator';

export class CreateCategoryDto {
    @IsString()
    @MinLength(2)
    nombre: string;

    @IsString()
    descripcion: string;

    @IsBoolean()
    @IsOptional()
    activa?: boolean;
}