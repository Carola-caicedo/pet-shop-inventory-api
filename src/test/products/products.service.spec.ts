import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../../products/products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from '../../products/entities/product.entity';

import { Repository } from 'typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let repo: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository, // simulamos el repositorio
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });

  // Puedes dejar los demás tests que ya tienes
});
