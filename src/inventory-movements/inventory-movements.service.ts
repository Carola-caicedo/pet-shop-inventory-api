import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryMovement, MovementType } from './entities/inventory-movement.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class InventoryMovementsService {
    constructor(
        @InjectRepository(InventoryMovement)
        private movementsRepository: Repository<InventoryMovement>,
        private productsService: ProductsService,
    ) { }

    async create(movementData: Partial<InventoryMovement>): Promise<InventoryMovement> {
        // Validar que los campos requeridos están presentes
        if (!movementData.producto_id || !movementData.tipo || !movementData.cantidad || !movementData.motivo) {
            throw new BadRequestException('Faltan campos requeridos: producto_id, tipo, cantidad, motivo');
        }

        // Verificar que el producto existe
        const product = await this.productsService.findOne(movementData.producto_id);

        // Validar cantidad
        if (movementData.cantidad <= 0) {
            throw new BadRequestException('La cantidad debe ser mayor a 0');
        }

        // Actualizar stock del producto
        if (movementData.tipo === MovementType.ENTRADA) {
            await this.productsService.updateStock(product.id, product.stock + movementData.cantidad);
        } else {
            if (product.stock < movementData.cantidad) {
                throw new BadRequestException(`Stock insuficiente. Disponible: ${product.stock}, Solicitado: ${movementData.cantidad}`);
            }
            await this.productsService.updateStock(product.id, product.stock - movementData.cantidad);
        }

        const movement = this.movementsRepository.create(movementData);
        return await this.movementsRepository.save(movement);
    }

    async findAll(): Promise<InventoryMovement[]> {
        return await this.movementsRepository.find({
            relations: ['producto', 'usuario'],
            order: { fecha: 'DESC' },
        });
    }

    async findOne(id: number): Promise<InventoryMovement> {
        const movement = await this.movementsRepository.findOne({
            where: { id },
            relations: ['producto', 'usuario'],
        });
        if (!movement) {
            throw new NotFoundException('Movimiento no encontrado');
        }
        return movement;
    }

    async findByProduct(productId: number): Promise<InventoryMovement[]> {
        return await this.movementsRepository.find({
            where: { producto_id: productId },
            relations: ['producto', 'usuario'],
            order: { fecha: 'DESC' },
        });
    }

    async findByDateRange(startDate: Date, endDate: Date): Promise<InventoryMovement[]> {
        return await this.movementsRepository
            .createQueryBuilder('movement')
            .where('movement.fecha BETWEEN :startDate AND :endDate', { startDate, endDate })
            .leftJoinAndSelect('movement.producto', 'producto')
            .leftJoinAndSelect('movement.usuario', 'usuario')
            .orderBy('movement.fecha', 'DESC')
            .getMany();
    }
}