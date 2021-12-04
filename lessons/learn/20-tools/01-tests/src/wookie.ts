import { ApiService } from "./api-service";
import { WithAttack } from "./attack";

export default class Wookie {
    life: number = 100;

    constructor(private service: ApiService) {}

    async loadAll() {
        return await this.service.request('');
    }

    attack(hit: number, item: WithAttack) {
        item.takeHit(hit);
    }

    takeHit(hitValue: number): void {
        this.life -= hitValue;
    }
}