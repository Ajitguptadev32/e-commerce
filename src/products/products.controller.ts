import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from 'src/common/dtos/products';
import { ApiTags } from '@nestjs/swagger';
import { response } from 'express';

@ApiTags('Transactions')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Res() @Body() createProductDto: CreateProductDto) {
    try {
      const product =
        await this.productsService.createProduct(createProductDto);
      return response.status(HttpStatus.CREATED).json({
        message: 'Product created successfully',
      });
    } catch (err) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error: Student not created!',
        error: 'Bad Request',
      });
    }
  }
}
