import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('categories')
@UseGuards(JwtAuthGuard, RolesGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @Post()
    @Roles(UserRole.ADMIN)
    async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categoriesService.create(createCategoryDto);
    }

    @Get()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async findAll(): Promise<Category[]> {
        return await this.categoriesService.findAll();
    }

    @Get(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async findOne(@Param('id') id: string): Promise<Category> {
        return await this.categoriesService.findOne(+id);
    }

    @Put(':id')
    @Roles(UserRole.ADMIN)
    async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        return await this.categoriesService.update(+id, updateCategoryDto);
    }

    @Delete(':id')
    @Roles(UserRole.ADMIN)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.categoriesService.remove(+id);
    }

    @Get(':id/products')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async findWithProducts(@Param('id') id: string): Promise<Category> {
        return await this.categoriesService.findOne(+id);
    }

    @Get('with/products')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findAllWithProducts(): Promise<Category[]> {
        return await this.categoriesService.findWithProducts();
    }
}