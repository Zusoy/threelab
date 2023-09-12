import { GameObject } from "./GameObject";

export abstract class Component
{
    constructor(protected readonly gameObject: GameObject)
    {
        gameObject.addComponent(this);
    }

    abstract start(): void;

    abstract update(): void;
}