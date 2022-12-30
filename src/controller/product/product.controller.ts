import { Body, Controller, Post } from '@nestjs/common';
import { Delete, Get, Param, Patch, Put } from '@nestjs/common/decorators';
import { createProductDTO, updateProductDTO } from 'src/interfaces/Iproduct';
import { ProductService } from 'src/services/product/product.service';

@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService) {}

    @Get('id=:id')
    async getProduct(@Param('id') productId: string){
      return await this.productService.getProduct(Number(productId))
    }

    @Get()
    async getAllProducts(){
      return await this.productService.getAllProducts()
    }

    @Post('save')
    async addProduct(@Body() product: createProductDTO){
      return await this.productService.saveProduct(product) 
    }

    @Delete('id=:id')
    async deleteProduct(@Param('id') productId: string){
      return await this.productService.deleteProduct(Number(productId))
    }

    @Put()
    async updateProduct(@Body() product: updateProductDTO){
      return await this.productService.updateProduct(product)
    }

    @Patch('id=:id&active=:active')
    async switchStatusProduct(@Param('id') productId: string, @Param('active') productStatus: string){
      return await this.productService.switchStatusProduct(Number(productId), productStatus.toLowerCase() == 'true' ? true : false )
    }
}
