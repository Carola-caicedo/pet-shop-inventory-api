import { IsString, IsEnum, IsNumber, Min, IsEmail, IsOptional } from 'class-validator';
import { PetSpecies } from '../entities/pet.entity';

export class CreatePetDto {
    @IsString()
    nombre: string;

    @IsEnum(PetSpecies)
    especie: PetSpecies;

    @IsString()
    raza: string;

    @IsNumber()
    @Min(0)
    edad: number;

    @IsString()
    duenio_nombre: string;

    @IsString()
    duenio_telefono: string;

    @IsEmail()
    @IsOptional()
    duenio_email?: string;

    @IsString()
    @IsOptional()
    observaciones?: string;
}