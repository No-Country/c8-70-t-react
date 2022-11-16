import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {table: 'product'},
  },
})
export class Product extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true
  })
  id: number;

  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
  })
  user_id?: number;

  @property({
    type: 'number',
  })
  category_id?: number;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'string',
  })
  image?: string;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'date',
  })
  modified?: string;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
