import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from '../../categories/categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Category } from '../../categories/entities/category.entity';

import { Repository } from 'typeorm';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let repo: Repository<Category>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    repo = module.get<Repository<Category>>(getRepositoryToken(Category));
  });

  it('debería estar definido', () => {
    expect(service).toBeDefined();
  });
});
