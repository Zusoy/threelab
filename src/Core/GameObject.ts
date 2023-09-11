import { Scene, Mesh } from "three";
import { ISceneObject } from "./ISceneObject";
import { Game } from "./Game";

export class GameObject implements ISceneObject
{
    private game: Game|null = null;

    constructor(public readonly mesh: Mesh)
    {
    }

    public enable(scene: Scene, game: Game): void
    {
        scene.add(this.mesh);
        this.game = game;
    }

    public start(): void
    {
    }

    public update(): void
    {
    }

    public getCurrentGame(): Game
    {
        return this.game as Game;
    }
}