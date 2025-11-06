import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product)
        private productsRepository: Repository<Product>,
    ) { }

    async create(productData: Partial<Product>): Promise<Product> {
        const product = this.productsRepository.create(productData);
        return await this.productsRepository.save(product);
    }

    async findAll(): Promise<Product[]> {
        return await this.productsRepository.find({
            relations: ['categoria'],
        });
    }

    async findOne(id: number): Promise<Product> {
        const product = await this.productsRepository.findOne({
            where: { id },
            relations: ['categoria'],
        });
        if (!product) {
            throw new NotFoundException('Producto no encontrado');
        }
        return product;
    }

    async update(id: number, updateData: Partial<Product>): Promise<Product> {
        await this.productsRepository.update(id, updateData);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.productsRepository.softDelete(id);
    }

    async updateStock(id: number, newStock: number): Promise<Product> {
        await this.productsRepository.update(id, { stock: newStock });
        return await this.findOne(id);
    }

    async findLowStock(): Promise<Product[]> {
        return await this.productsRepository
            .createQueryBuilder('product')
            .where('product.stock <= product.stock_minimo')
            .andWhere('product.activo = :activo', { activo: true })
            .getMany();
    }
}