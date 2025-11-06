import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './entities/supplier.entity';

@Injectable()
export class SuppliersService {
    constructor(
        @InjectRepository(Supplier)
        private suppliersRepository: Repository<Supplier>,
    ) { }

    async create(supplierData: Partial<Supplier>): Promise<Supplier> {
        const supplier = this.suppliersRepository.create(supplierData);
        return await this.suppliersRepository.save(supplier);
    }

    async findAll(): Promise<Supplier[]> {
        return await this.suppliersRepository.find({
            where: { activo: true },
        });
    }

    async findOne(id: number): Promise<Supplier> {
        const supplier = await this.suppliersRepository.findOne({
            where: { id },
        });
        if (!supplier) {
            throw new NotFoundException('Proveedor no encontrado');
        }
        return supplier;
    }

    async update(id: number, updateData: Partial<Supplier>): Promise<Supplier> {
        await this.suppliersRepository.update(id, updateData);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.suppliersRepository.softDelete(id);
    }

    async searchByName(name: string): Promise<Supplier[]> {
        return await this.suppliersRepository
            .createQueryBuilder('supplier')
            .where('supplier.nombre LIKE :name', { name: `%${name}%` })
            .andWhere('supplier.activo = :activo', { activo: true })
            .getMany();
    }
}