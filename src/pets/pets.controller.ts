import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Pet, PetSpecies } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('pets')
@UseGuards(JwtAuthGuard, RolesGuard)
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Post()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async create(@Body() createPetDto: CreatePetDto): Promise<Pet> {
        return await this.petsService.create(createPetDto);
    }

    @Get()
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findAll(): Promise<Pet[]> {
        return await this.petsService.findAll();
    }

    @Get(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async findOne(@Param('id') id: string): Promise<Pet> {
        return await this.petsService.findOne(+id);
    }

    @Put(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto): Promise<Pet> {
        return await this.petsService.update(+id, updatePetDto);
    }

    @Delete(':id')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async remove(@Param('id') id: string): Promise<void> {
        return await this.petsService.remove(+id);
    }

    @Get('species/:especie')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)
    async findBySpecies(@Param('especie') especie: PetSpecies): Promise<Pet[]> {
        return await this.petsService.findBySpecies(especie);
    }

    @Get('owner/:email')
    @Roles(UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.CLIENT)
    async findByOwner(@Param('email') email: string): Promise<Pet[]> {
        return await this.petsService.findByOwner(email);
    }
}