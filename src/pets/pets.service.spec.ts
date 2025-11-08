import { Test, TestingModule } from '@nestjs/testing';
import { PetsService } from './pets.service';
import { Repository } from 'typeorm';
import { Pet, PetSpecies } from './entities/pet.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

describe('PetsService', () => {
  let service: PetsService;
  let repo: Repository<Pet>;

  const mockPet: Pet = {
    id: 1,
    nombre: 'Rocky',
    especie: PetSpecies.PERRO,
    raza: 'Labrador',
    edad: 3,
    duenio_email: 'cliente@example.com',
  } as Pet;

  const mockRepository = {
    create: jest.fn().mockReturnValue(mockPet),
    save: jest.fn().mockResolvedValue(mockPet),
    find: jest.fn().mockResolvedValue([mockPet]),
    findOne: jest.fn().mockResolvedValue(mockPet),
    update: jest.fn().mockResolvedValue(mockPet),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PetsService,
        {
          provide: getRepositoryToken(Pet),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PetsService>(PetsService);
    repo = module.get<Repository<Pet>>(getRepositoryToken(Pet));
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería crear una mascota', async () => {
    const result = await service.create(mockPet);
    expect(result).toEqual(mockPet);
    expect(repo.create).toHaveBeenCalled();
    expect(repo.save).toHaveBeenCalled();
  });

  it('debería retornar todas las mascotas', async () => {
    const result = await service.findAll();
    expect(result).toEqual([mockPet]);
    expect(repo.find).toHaveBeenCalled();
  });

  it('debería retornar una mascota por ID', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(mockPet);
    expect(repo.findOne).toHaveBeenCalled();
  });

  it('debería lanzar error si no encuentra una mascota', async () => {
    jest.spyOn(repo, 'findOne').mockResolvedValueOnce(null);
    await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
  });

  it('debería actualizar una mascota', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(mockPet);
    const result = await service.update(1, { nombre: 'Max' });
    expect(result).toEqual(mockPet);
  });

  it('debería eliminar una mascota', async () => {
    const result = await service.remove(1);
    expect(result).toBeUndefined();
    expect(repo.delete).toHaveBeenCalledWith(1);
  });

  it('debería buscar mascotas por especie', async () => {
    const result = await service.findBySpecies(PetSpecies.PERRO);
    expect(result).toEqual([mockPet]);
  });

  it('debería buscar mascotas por dueño', async () => {
    const result = await service.findByOwner('cliente@example.com');
    expect(result).toEqual([mockPet]);
  });
});
