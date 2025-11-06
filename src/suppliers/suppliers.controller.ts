import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe, Query, UseGuards } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { Supplier } from './entities/supplier.entity';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('suppliers')
@UseGuards(JwtAuthGuard, RolesGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class SuppliersController {
    constructor(private readonly suppliersService: SuppliersService) { }

    @Post()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async create(@Body() createSupplierDto: CreateSupplierDto): Promise<Supplier> {
        return await this.suppliersService.create(createSupplierDto);
    }

    @Get()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findAll(): Promise<Supplier[]> {
        return await this.suppliersService.findAll();
    }

    @Get(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findOne(@Param('id') id: string): Promise<Supplier> {
        return await this.suppliersService.findOne(+id);
    }

    @Put(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async update(@Param('id') id: string, @Body() updateSupplierDto: UpdateSupplierDto): Promise<Supplier> {
        return await this.suppliersService.update(+id, updateSupplierDto);
    }

    @Delete(':id')
    @Roles(UserRole.ADMIN)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.suppliersService.remove(+id);
    }

    @Get('search/by-name')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async searchByName(@Query('name') name: string): Promise<Supplier[]> {
        return await this.suppliersService.searchByName(name);
    }
}