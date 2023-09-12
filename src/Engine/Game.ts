import { Camera, Renderer, Scene } from 'three';
import { ISceneEntity } from './Core/ISceneEntity';
import { Input } from './Core/Input';

export class Game
{
    protected entities: ISceneEntity[] = [];

    constructor(
        public readonly input: Input,
        protected readonly renderer: Renderer,
        protected readonly camera: Camera,
        public readonly mainScene: Scene
    ) {
    }

    public start(): void
    {
        this.entities.forEach(entity => entity.onStart());

        this.update();
    }

    public update(): void
    {
        requestAnimationFrame(() => this.update());
        this.renderer.render(this.mainScene, this.camera);

        this.entities.forEach(entity => entity.onUpdate());
    }

    public addEntity(entity: ISceneEntity): void
    {
        this.entities = [ ...this.entities, entity ];
        entity.onEnable(this.mainScene);
    }
}