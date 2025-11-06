import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private categoriesRepository: Repository<Category>,
    ) { }

    async create(categoryData: Partial<Category>): Promise<Category> {
        const category = this.categoriesRepository.create(categoryData);
        return await this.categoriesRepository.save(category);
    }

    async findAll(): Promise<Category[]> {
        return await this.categoriesRepository.find({
            where: { activa: true },
        });
    }

    async findOne(id: number): Promise<Category> {
        const category = await this.categoriesRepository.findOne({
            where: { id },
        });
        if (!category) {
            throw new NotFoundException('Categoría no encontrada');
        }
        return category;
    }

    async update(id: number, updateData: Partial<Category>): Promise<Category> {
        await this.categoriesRepository.update(id, updateData);
        return await this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.categoriesRepository.softDelete(id);
    }

    async findWithProducts(): Promise<Category[]> {
        return await this.categoriesRepository.find({
            relations: ['products'],
            where: { activa: true },
        });
    }
}