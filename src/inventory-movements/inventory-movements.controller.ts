import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe, Query, UseGuards } from '@nestjs/common';
import { InventoryMovementsService } from './inventory-movements.service';
import { InventoryMovement } from './entities/inventory-movement.entity';
import { CreateMovementDto } from './dto/create-movement.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('inventory-movements')
@UseGuards(JwtAuthGuard, RolesGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class InventoryMovementsController {
    constructor(private readonly movementsService: InventoryMovementsService) { }

    @Post()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async create(@Body() createMovementDto: CreateMovementDto): Promise<InventoryMovement> {
        return await this.movementsService.create(createMovementDto);
    }

    @Get()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findAll(): Promise<InventoryMovement[]> {
        return await this.movementsService.findAll();
    }

    @Get(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findOne(@Param('id') id: string): Promise<InventoryMovement> {
        return await this.movementsService.findOne(+id);
    }

    @Get('product/:productId')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findByProduct(@Param('productId') productId: string): Promise<InventoryMovement[]> {
        return await this.movementsService.findByProduct(+productId);
    }

    @Get('report/date-range')
    @Roles(UserRole.ADMIN)
    async findByDateRange(
        @Query('startDate') startDate: string,
        @Query('endDate') endDate: string,
    ): Promise<InventoryMovement[]> {
        return await this.movementsService.findByDateRange(
            new Date(startDate),
            new Date(endDate),
        );
    }
}