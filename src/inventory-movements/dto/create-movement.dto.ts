import { IsEnum, IsNumber, IsString, Min, MinLength, IsNotEmpty } from 'class-validator';
import { MovementType } from '../entities/inventory-movement.entity';

export class CreateMovementDto {
    @IsNumber()
    @IsNotEmpty()
    producto_id: number;

    @IsEnum(MovementType)
    @IsNotEmpty()
    tipo: MovementType;

    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    cantidad: number;

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    motivo: string;

    @IsNumber()
    @IsNotEmpty()
    usuario_id: number;
}