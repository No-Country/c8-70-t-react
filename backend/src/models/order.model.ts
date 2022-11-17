import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    postgresql: {table: 'order'},
  }
})
export class Order extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  user_id?: number;

  @property({
    type: 'string',
  })
  products?: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  status?: number;

  @property({
    type: 'date',
  })
  created?: string;

  @property({
    type: 'date',
  })
  modified?: string;


  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
