import { Product } from "@prisma/client"

export interface createProductDTO extends Omit<Product, 'id'| 'price'>{
    price: number
}

export interface updateProductDTO extends Partial<Product>{
    id: number
}