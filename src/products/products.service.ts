import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/common/dtos/products';
import { IProduct } from 'src/common/interfaces/products.interface';
import { Model } from 'mongoose';
import { ProductsDocument } from 'src/common/schemas/products.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from 'src/common/schemas';
@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private productsModel: Model<ProductsDocument>,
  ) {}
  async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<ProductsDocument | null> {
    const newProduct = await new this.productsModel(createProductDto);
    return newProduct.save();
  }
  async UpdateProduct(productId: string, updateProductDto: UpdateProductDto) {
    const existingProduct = await this.productsModel.findByIdAndUpdate(
      productId,
      updateProductDto,
      {
        new: true,
      },
    );
    if (!existingProduct) {
      throw new NotFoundException(`Product ${productId} not found`);
    }
    return existingProduct;
  }

  async getAllProducts() {
    const ProductData = await this.productsModel.find();
    if (!ProductData || ProductData.length == 0) {
      throw new NotFoundException('Products data not found!');
    }
    return ProductData;
  }
}
