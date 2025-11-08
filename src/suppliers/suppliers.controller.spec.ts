import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersController } from '../../src/suppliers/suppliers.controller';
import { SuppliersService } from '../../src/suppliers/suppliers.service';
import { Supplier } from '../../src/suppliers/entities/supplier.entity';

describe('SuppliersController', () => {
  let controller: SuppliersController;
  let service: SuppliersService;

  const mockSupplier: Supplier = {
    id: 1,
    nombre: 'Proveedor de Prueba',
    activo: true,
  } as Supplier;

  const mockSuppliersService = {
    create: jest.fn().mockResolvedValue(mockSupplier),
    findAll: jest.fn().mockResolvedValue([mockSupplier]),
    findOne: jest.fn().mockResolvedValue(mockSupplier),
    update: jest.fn().mockResolvedValue(mockSupplier),
    remove: jest.fn().mockResolvedValue(undefined),
    searchByName: jest.fn().mockResolvedValue([mockSupplier]),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersController],
      providers: [
        {
          provide: SuppliersService,
          useValue: mockSuppliersService,
        },
      ],
    }).compile();

    controller = module.get<SuppliersController>(SuppliersController);
    service = module.get<SuppliersService>(SuppliersService);
  });

  it('debería estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('debería crear un proveedor', async () => {
    expect(await controller.create(mockSupplier)).toEqual(mockSupplier);
  });

  it('debería listar todos los proveedores', async () => {
    expect(await controller.findAll()).toEqual([mockSupplier]);
  });

  it('debería encontrar un proveedor por id', async () => {
    expect(await controller.findOne('1')).toEqual(mockSupplier);
  });

  it('debería actualizar un proveedor', async () => {
    expect(await controller.update('1', mockSupplier)).toEqual(mockSupplier);
  });

  it('debería eliminar un proveedor', async () => {
    expect(await controller.remove('1')).toBeUndefined();
  });

  it('debería buscar proveedores por nombre', async () => {
    expect(await controller.searchByName('Prueba')).toEqual([mockSupplier]);
  });
});


