import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersService } from '../../src/suppliers/suppliers.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Supplier } from '../../src/suppliers/entities/supplier.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

describe('SuppliersService', () => {
  let service: SuppliersService;
  let repo: Repository<Supplier>;

  const mockSupplier: Supplier = {
    id: 1,
    nombre: 'Proveedor de Prueba',
    activo: true,
  } as Supplier;

  const mockRepository = {
    create: jest.fn().mockReturnValue(mockSupplier),
    save: jest.fn().mockResolvedValue(mockSupplier),
    find: jest.fn().mockResolvedValue([mockSupplier]),
    findOne: jest.fn().mockResolvedValue(mockSupplier),
    update: jest.fn(),
    softDelete: jest.fn(),
    createQueryBuilder: jest.fn(() => ({
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockResolvedValue([mockSupplier]),
    })),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuppliersService,
        {
          provide: getRepositoryToken(Supplier),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<SuppliersService>(SuppliersService);
    repo = module.get<Repository<Supplier>>(getRepositoryToken(Supplier));
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  it('debería crear un proveedor', async () => {
    expect(await service.create(mockSupplier)).toEqual(mockSupplier);
  });

  it('debería listar proveedores activos', async () => {
    expect(await service.findAll()).toEqual([mockSupplier]);
  });

  it('debería retornar un proveedor existente', async () => {
    expect(await service.findOne(1)).toEqual(mockSupplier);
  });

  it('debería lanzar error si el proveedor no existe', async () => {
    jest.spyOn(repo, 'findOne').mockResolvedValueOnce(null);
    await expect(service.findOne(99)).rejects.toThrow(NotFoundException);
  });

  it('debería actualizar un proveedor', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValueOnce(mockSupplier);
    expect(await service.update(1, mockSupplier)).toEqual(mockSupplier);
  });

  it('debería eliminar un proveedor', async () => {
    await service.remove(1);
    expect(repo.softDelete).toHaveBeenCalledWith(1);
  });

  it('debería buscar proveedores por nombre', async () => {
    expect(await service.searchByName('Prueba')).toEqual([mockSupplier]);
  });
});
