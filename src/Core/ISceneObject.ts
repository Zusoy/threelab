import { Scene } from 'three';
import { Game } from './Game';

export interface ISceneObject
{
    /**
     * Enable object on scene
     */
    enable(scene: Scene, game: Game): void;

    /**
     * Called when scene start
     */
    start(): void;

    /**
     * Called at game ticks
     */
    update(): void;
}