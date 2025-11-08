import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from '../../categories/categories.controller';
import { CategoriesService } from '../../categories/categories.service';
import { Category } from '../../categories/entities/category.entity';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  const mockService = {
    create: jest.fn(dto => ({ id: 3, ...dto })),
    findAll: jest.fn().mockResolvedValue([{ id: 1, nombre: 'Accesorios' }, { id: 2, nombre: 'Comida' }]),
    findOne: jest.fn(id => ({ id, nombre: id === 1 ? 'Accesorios' : 'Comida' })),
    update: jest.fn((id, dto) => ({ id, ...dto })),
    remove: jest.fn().mockResolvedValue({ affected: 1 }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [{ provide: CategoriesService, useValue: mockService }],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('debería devolver todas las categorías', async () => {
    const categories = await controller.findAll();
    expect(categories).toHaveLength(2);
  });

  it('debería crear una categoría', async () => {
    const category = await controller.create({ nombre: 'Juguetes' } as Category);
    expect(category).toEqual({ id: 3, nombre: 'Juguetes' });
  });

  it('debería actualizar una categoría', async () => {
    const updated = await controller.update('1', { nombre: 'Accesorios Actualizados' } as Category);
    expect(updated).toEqual({ id: 1, nombre: 'Accesorios Actualizados' });
  });

  it('debería eliminar una categoría', async () => {
    const result = await controller.remove('1');
    expect(result).toEqual({ affected: 1 });
  });
});
