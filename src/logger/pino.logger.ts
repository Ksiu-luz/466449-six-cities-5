import {Logger as PinoInstance, pino} from 'pino';
import {injectable} from 'inversify';
import {Logger} from './logger.interface.js';


@injectable()
export default class PinoLogger implements Logger {
  private readonly logger: PinoInstance;

  constructor() {
    this.logger = pino();
    this.logger.info('Logger created');
  }

  public debug(message: string, ...args: any[]) {
    this.logger.debug(message, ...args);
  }

  public error(message: string, ...args: any[]) {
    this.logger.error(message, ...args);
  }

  public info(message: string, ...args: any[]) {
    this.logger.info(message, ...args);
  }

  public warn(message: string, ...args: any[]) {
    this.logger.warn(message, ...args);
  }
}
