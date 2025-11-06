import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsNumber, Min, IsPositive } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsNumber()
    @Min(0)
    @IsOptional()
    stock?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    precio?: number;

    @IsNumber()
    @Min(0)
    @IsOptional()
    stock_minimo?: number;
}