import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'db',
  connector: 'postgresql',
  url: '',
  host: 'heffalump.db.elephantsql.com',
  port: 5432,
  user: 'fvamecoa',
  password: 'p4p8Z3xKiwWGuVjur9oAq1OqfKwIioKH',
  database: 'fvamecoa',
  ssl: false,
};

@lifeCycleObserver('datasource')
export class DbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'db';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.db', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
