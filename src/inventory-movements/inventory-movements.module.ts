import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryMovementsService } from './inventory-movements.service';
import { InventoryMovementsController } from './inventory-movements.controller';
import { InventoryMovement } from './entities/inventory-movement.entity';
import { ProductsModule } from '../products/products.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([InventoryMovement]),
        ProductsModule,
    ],
    controllers: [InventoryMovementsController],
    providers: [InventoryMovementsService],
    exports: [InventoryMovementsService],
})
export class InventoryMovementsModule { }