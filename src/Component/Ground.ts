import { Component } from "../Engine/Core/Component";

export class Ground extends Component
{
    public start(): void
    {
        this.gameObject.receiveShadow = true;
        this.gameObject.position.set(0, -1, 0);
    }

    public update(): void
    {
    }
}