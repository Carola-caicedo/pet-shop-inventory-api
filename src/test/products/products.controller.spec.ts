import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from '../../products/products.controller';
import { ProductsService } from '../../products/products.service';
import { Product } from '../../products/entities/product.entity';

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  const productsMock: Product[] = [
    { id: 1, nombre: 'Collar', stock: 5 } as Product,
    { id: 2, nombre: 'Correa', stock: 3 } as Product,
  ];

  const mockService = {
    create: jest.fn().mockImplementation(dto => ({ id: 3, ...dto })),
    findAll: jest.fn().mockResolvedValue(productsMock),
    findOne: jest.fn().mockImplementation(id => productsMock.find(p => p.id === id)),
    update: jest.fn().mockImplementation((id, dto) => ({ id, ...dto })),
    remove: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        { provide: ProductsService, useValue: mockService },
      ],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
    service = module.get<ProductsService>(ProductsService);
  });

  it('debería listar todos los productos', async () => {
    const result = await controller.findAll();
    expect(result).toHaveLength(2);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('debería buscar un producto por ID', async () => {
    const result = await controller.findOne('1');
    expect(result.nombre).toBe('Collar');
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('debería crear un producto', async () => {
    const dto = { nombre: 'Juguete', stock: 10 };
    const result = await controller.create(dto as any);
    expect(result.nombre).toBe('Juguete');
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('debería actualizar un producto', async () => {
    const dto = { nombre: 'Collar Actualizado', stock: 8 };
    const result = await controller.update('1', dto as any);
    expect(result.nombre).toBe('Collar Actualizado');
    expect(result.stock).toBe(8);
    expect(service.update).toHaveBeenCalledWith(1, dto);
  });

  it('debería eliminar un producto', async () => {
    const result = await controller.remove('1');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
