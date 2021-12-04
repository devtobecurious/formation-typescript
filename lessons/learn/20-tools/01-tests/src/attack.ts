export type WithAttack = {
    life: number;
    takeHit(hitValue: number): void;
    attack(hit: number, item: WithAttack): void;
}