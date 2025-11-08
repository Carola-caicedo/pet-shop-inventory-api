import { Test, TestingModule } from '@nestjs/testing';
import { InventoryMovementsController } from './inventory-movements.controller';
import { InventoryMovementsService } from './inventory-movements.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { InventoryMovement, MovementType } from './entities/inventory-movement.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from '../products/entities/product.entity'; 

describe('InventoryMovementsController', () => {
    let controller: InventoryMovementsController;
    let service: InventoryMovementsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [InventoryMovementsController],
            providers: [
                {
                    provide: InventoryMovementsService,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        findByProduct: jest.fn(),
                        findByDateRange: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<InventoryMovementsController>(InventoryMovementsController);
        service = module.get<InventoryMovementsService>(InventoryMovementsService);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should create a movement', async () => {
        const mockMovementDto: CreateMovementDto = {
            producto_id: 1,
            tipo: MovementType.ENTRADA,
            cantidad: 10,
            motivo: 'Compra de insumos',
            usuario_id: 2,
        };

        const mockMovement: InventoryMovement = {
            id: 1,
            ...mockMovementDto,
            fecha: new Date(),
            producto: {} as Product, 
            usuario: {} as User, 
        } as InventoryMovement;

        (jest.spyOn(service, 'create') as any).mockResolvedValue(mockMovement);

        const result = await controller.create(mockMovementDto);

  
        expect(result).toEqual(expect.objectContaining({
            id: 1,
            ...mockMovementDto,
        }));
        
        
        expect(service.create).toHaveBeenCalledWith(mockMovementDto as any); 
    });

    it('should return all movements', async () => {
        const mockMovements: InventoryMovement[] = [
            {
                id: 1,
                producto_id: 1,
                tipo: MovementType.ENTRADA,
                cantidad: 10,
                motivo: 'Compra',
                usuario_id: 2,
                fecha: new Date(),
                producto: {} as Product,
                usuario: {} as User,
            },
        ] as InventoryMovement[];

        jest.spyOn(service, 'findAll').mockResolvedValue(mockMovements);

        const result = await controller.findAll();
        expect(result).toEqual(mockMovements);
        expect(service.findAll).toHaveBeenCalled();
    });
});