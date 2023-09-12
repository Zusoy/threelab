import { Component } from "../Engine/Core/Component";
import { GameObject } from "../Engine/Core/GameObject";
import { Input } from "../Engine/Core/Input";
import { KeyCode } from "../Engine/Core/Input/KeyCode";

export class Player extends Component
{
    constructor(
        gameObject: GameObject,
        private readonly input: Input,
        private readonly speed: number
    ) {
        super(gameObject);
    }

    public start(): void
    {
        this.gameObject.castShadow = true;
    }

    public update(): void
    {
        if (this.input.getKey(KeyCode.KeyA)) {
            this.gameObject.position.x -= this.speed;
        }

        if (this.input.getKey(KeyCode.KeyD)) {
            this.gameObject.position.x += this.speed;
        }
    }
}