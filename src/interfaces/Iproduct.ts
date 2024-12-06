import { Products } from "@prisma/client"

export interface createProductDTO extends Omit<Products, 'id'| 'price'>{
    price: number
}

export interface updateProductDTO extends Partial<Products>{
    id: number
}