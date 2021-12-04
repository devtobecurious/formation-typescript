import { ApiService } from "./api-service";
import { WithAttack } from "./attack";

export default class Droid {
    life: number = 100;

    constructor(private service: ApiService) {}

    attack(hit: number, item: WithAttack) {
        item.takeHit(hit);
    }

    takeHit(hitValue: number): void {
        this.life -= hitValue;
    }
}