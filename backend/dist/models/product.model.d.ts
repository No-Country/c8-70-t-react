import { Entity } from '@loopback/repository';
export declare class Product extends Entity {
    id: number;
    name?: string;
    description?: string;
    user_id?: number;
    category_id?: number;
    price?: number;
    image?: string;
    created?: string;
    modified?: string;
    constructor(data?: Partial<Product>);
}
export interface ProductRelations {
}
export declare type ProductWithRelations = Product & ProductRelations;
