import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('products')
@UseGuards(JwtAuthGuard, RolesGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return await this.productsService.create(createProductDto);
    }

    @Get()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async findAll(): Promise<Product[]> {
        return await this.productsService.findAll();
    }

    @Get(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async findOne(@Param('id') id: string): Promise<Product> {
        return await this.productsService.findOne(+id);
    }

    @Put(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
        return await this.productsService.update(+id, updateProductDto);
    }

    @Delete(':id')
    @Roles(UserRole.ADMIN)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.productsService.remove(+id);
    }

    @Get('stock/bajo')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findLowStock(): Promise<Product[]> {
        return await this.productsService.findLowStock();
    }

    @Put(':id/stock')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async updateStock(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto): Promise<Product> {
        return await this.productsService.updateStock(+id, updateStockDto.stock);
    }
}