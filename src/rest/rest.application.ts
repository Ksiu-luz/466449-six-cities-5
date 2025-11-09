import {inject, injectable} from 'inversify';
import {Config} from '../config/config.interface.js';
import { Logger } from '../logger/logger.interface.js';
import { RestSchema } from '../config/rest.shema.js';
import { Component } from '../types/component.enum.js';

@injectable()
export default class Application {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>
  ) {}

  public async init() {
    this.logger.info('Application init');
    this.logger.info(`Get value from env $PORT: ${this.config.get('PORT')}`);
  }
}