import { ApiServiceAxios } from "./api-bis.services";
import { ApiService } from "./api-service";
import { WithAttack } from "./attack";
import Wookie from "./wookie";

export default class Droid {
    life: number = 100;

    constructor(private service: ApiServiceAxios) {}

    async loadAll(): Promise<Droid[]> {
        return await this.service.getAll('');
    } 

    attack(hit: number, item: WithAttack) {
        item.takeHit(hit);
    }

    takeHit(hitValue: number): void {
        this.life -= hitValue;
    }
}