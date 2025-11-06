import { IsString, IsNumber, IsPositive, Min, IsBoolean, IsOptional, MinLength } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @MinLength(2)
    nombre: string;

    @IsString()
    descripcion: string;

    @IsNumber()
    @IsPositive()
    precio: number;

    @IsNumber()
    @Min(0)
    stock: number;

    @IsNumber()
    @Min(0)
    stock_minimo: number;

    @IsString()
    proveedor: string;

    @IsBoolean()
    @IsOptional()
    activo?: boolean;

    @IsNumber()
    @IsOptional()
    categoria_id?: number;
}