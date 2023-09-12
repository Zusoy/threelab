import { Scene } from 'three';

export interface ISceneEntity
{
    onStart(): void;

    onUpdate(): void;

    onEnable(scene: Scene): void;
}