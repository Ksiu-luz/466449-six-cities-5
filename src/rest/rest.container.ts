import { Container } from 'inversify';
import { Component } from '../types/component.enum.js';
import { Logger } from '../libs/logger/logger.interface.js';
import PinoService from '../libs/logger/pino.logger.js';
import { RestSchema } from '../config/rest.shema.js';
import { DatabaseClient } from '../database-client/database-client.interface.js';
import MongoClientService from '../database-client/mongo.database-client.js';
import { Config } from '../config/config.interface.js';
import RestConfig from '../config/rest.config.js';
import Application from './rest.application.js';
import {ExceptionFilter} from '../exception-filters/exception-filter.interface.js';
import {AppExceptionFilter} from '../exception-filters/app-exception-filter.js';

export function createRestApplicationContainer() {
  const restApplicationContainer = new Container();

  restApplicationContainer.bind<Application>(Component.RestApplication).to(Application).inSingletonScope();
  restApplicationContainer.bind<Logger>(Component.Logger).to(PinoService).inSingletonScope();
  restApplicationContainer.bind<Config<RestSchema>>(Component.Config).to(RestConfig).inSingletonScope();
  restApplicationContainer.bind<DatabaseClient>(Component.DatabaseClient).to(MongoClientService).inSingletonScope();
  restApplicationContainer.bind<ExceptionFilter>(Component.AppExceptionFilter).to(AppExceptionFilter).inSingletonScope();
  
  return restApplicationContainer;
}
