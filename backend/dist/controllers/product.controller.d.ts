import { FilterExcludingWhere } from '@loopback/repository';
import { Product } from '../models';
import { ProductRepository } from '../repositories';
export declare class ProductController {
    productRepository: ProductRepository;
    constructor(productRepository: ProductRepository);
    create(product: Omit<Product, 'id'>): Promise<Product>;
    find(filter?: FilterExcludingWhere<Product>): Promise<Product[]>;
    findById(id: number, filter?: FilterExcludingWhere<Product>): Promise<Product>;
    updateById(id: number, product: Product): Promise<void>;
    deleteById(id: number): Promise<void>;
}
