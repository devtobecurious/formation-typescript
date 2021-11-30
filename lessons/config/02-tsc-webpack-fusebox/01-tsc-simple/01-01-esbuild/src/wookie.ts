import {Logger} from './logger';

export class Wookie {
    private logger: Logger;

    constructor(logger?: Logger) {
        this.logger = logger!;
    }

    say() {
        this.logger.log('Hello ! greee');
    }
}