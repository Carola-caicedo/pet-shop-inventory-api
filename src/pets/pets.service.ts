import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet, PetSpecies } from './entities/pet.entity';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pet)
        private petsRepository: Repository<Pet>,
    ) { }

    async create(petData: Partial<Pet>): Promise<Pet> {
        const pet = this.petsRepository.create(petData);
        return await this.petsRepository.save(pet);
    }

    async findAll(): Promise<Pet[]> {
        return await this.petsRepository.find({
            order: { fecha_registro: 'DESC' },
        });
    }

    async findOne(id: number): Promise<Pet> {
        const pet = await this.petsRepository.findOne({
            where: { id },
        });
        if (!pet) {
            throw new NotFoundException('Mascota no encontrada');
        }
        return pet;
    }

    async update(id: number, updateData: Partial<Pet>): Promise<Pet> {
        await this.petsRepository.update(id, updateData);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.petsRepository.delete(id);
    }

    async findBySpecies(especie: PetSpecies): Promise<Pet[]> {
        return await this.petsRepository.find({
            where: { especie },
            order: { nombre: 'ASC' },
        });
    }

    async findByOwner(duenioEmail: string): Promise<Pet[]> {
        return await this.petsRepository.find({
            where: { duenio_email: duenioEmail },
        });
    }
}