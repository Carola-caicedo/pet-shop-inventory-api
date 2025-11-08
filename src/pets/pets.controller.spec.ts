import { Test, TestingModule } from '@nestjs/testing';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { Pet, PetSpecies } from './entities/pet.entity';

describe('PetsController', () => {
  let controller: PetsController;
  let service: PetsService;

  const mockPet: Pet = {
    id: 1,
    nombre: 'Rocky',
    especie: PetSpecies.PERRO,
    raza: 'Labrador',
    edad: 3,
    duenio_email: 'cliente@example.com',
  } as Pet;

  const mockPetsService = {
    create: jest.fn().mockResolvedValue(mockPet),
    findAll: jest.fn().mockResolvedValue([mockPet]),
    findOne: jest.fn().mockResolvedValue(mockPet),
    update: jest.fn().mockResolvedValue({ ...mockPet, nombre: 'Max' }),
    remove: jest.fn().mockResolvedValue(undefined),
    findBySpecies: jest.fn().mockResolvedValue([mockPet]),
    findByOwner: jest.fn().mockResolvedValue([mockPet]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [
        {
          provide: PetsService,
          useValue: mockPetsService,
        },
      ],
    }).compile();

    controller = module.get<PetsController>(PetsController);
    service = module.get<PetsService>(PetsService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería crear una mascota', async () => {
    const result = await controller.create(mockPet);
    expect(result).toEqual(mockPet);
    expect(service.create).toHaveBeenCalled();
  });

  it('debería retornar todas las mascotas', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockPet]);
  });

  it('debería retornar una mascota por id', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual(mockPet);
  });

  it('debería actualizar una mascota', async () => {
    const result = await controller.update('1', { nombre: 'Max' });
    expect(result.nombre).toBe('Max');
  });

  it('debería eliminar una mascota', async () => {
    const result = await controller.remove('1');
    expect(result).toBeUndefined();
  });

  it('debería buscar mascotas por especie', async () => {
    const result = await controller.findBySpecies(PetSpecies.PERRO);
    expect(result).toEqual([mockPet]);
  });

  it('debería buscar mascotas por propietario', async () => {
    const result = await controller.findByOwner('cliente@example.com');
    expect(result).toEqual([mockPet]);
  });
});
