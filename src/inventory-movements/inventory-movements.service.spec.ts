import { Test, TestingModule } from '@nestjs/testing';
import { InventoryMovementsService } from './inventory-movements.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { InventoryMovement, MovementType } from './entities/inventory-movement.entity';
import { Repository } from 'typeorm';
import { ProductsService } from '../products/products.service';

describe('InventoryMovementsService', () => {
  let service: InventoryMovementsService;
  let repo: Repository<InventoryMovement>;
  let productsService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InventoryMovementsService,
        {
          provide: getRepositoryToken(InventoryMovement),
          useClass: Repository,
        },
        {
          provide: ProductsService,
          useValue: {
            findOne: jest.fn().mockResolvedValue({ id: 1, stock: 100 }),
            updateStock: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<InventoryMovementsService>(InventoryMovementsService);
    repo = module.get<Repository<InventoryMovement>>(getRepositoryToken(InventoryMovement));
    productsService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a movement successfully', async () => {
    const movementData = {
      producto_id: 1,
      tipo: MovementType.ENTRADA,
      cantidad: 10,
      motivo: 'Reposición de stock',
      usuario_id: 2,
    };

    const savedMovement = { id: 1, ...movementData } as InventoryMovement;

    jest.spyOn(repo, 'create').mockReturnValue(savedMovement);
    jest.spyOn(repo, 'save').mockResolvedValue(savedMovement);

    const result = await service.create(movementData);

    expect(result).toEqual(savedMovement);
    expect(productsService.findOne).toHaveBeenCalledWith(1);
    expect(productsService.updateStock).toHaveBeenCalled();
  });
});
