import { Injectable } from '@nestjs/common';
import prisma from 'prisma/prisma';
import { createProductDTO, updateProductDTO } from 'src/interfaces/Iproduct';

@Injectable()
export class ProductService {
    
    async getProduct(productId: number) {
        return await prisma.product.findUnique({
            where: {
                id: productId
            }
        })
    }
    
    async getAllProducts() {
        return await prisma.product.findMany()
    }
    
    async saveProduct(product: createProductDTO) {
        return await prisma.product.create({
            data: { ...product }
        })
    }
    
    async deleteProduct(productId: number) {
        return await prisma.product.delete({
            where:{
                id: productId
            }
        })
    }
    
    async updateProduct(product: updateProductDTO) {
        return await prisma.product.update({
            where:{
                id: product.id
            },
            data: {...product}
        })
    }

    async switchStatusProduct(productId: number, productStatus: boolean) {
        return await prisma.product.update({
            where:{
                id: productId
            },
            data: {
                active: productStatus
            }
        })
    }
}



