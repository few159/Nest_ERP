import { Injectable } from '@nestjs/common';
import prisma from 'prisma/prisma';
import { createProductDTO, updateProductDTO } from 'src/interfaces/Iproduct';

@Injectable()
export class ProductService {
    
    async getProduct(productId: number) {
        return await prisma.products.findUnique({
            where: {
                Id: productId
            }
        })
    }
    
    async getAllProducts() {
        return await prisma.products.findMany()
    }
    
    async saveProduct(products: createProductDTO) {
        return await prisma.products.create({
            data: { ...products }
        })
    }
    
    async deleteProduct(productId: number) {
        return await prisma.products.delete({
            where:{
                Id: productId
            }
        })
    }
    
    async updateProduct(products: updateProductDTO) {
        return await prisma.products.update({
            where:{
                Id: products.id
            },
            data: {...products}
        })
    }

    async switchStatusProduct(productId: number, productStatus: boolean) {
        return await prisma.products.update({
            where:{
                Id: productId
            },
            data: {
                Active: productStatus
            }
        })
    }
}



