import { BoxGeometry, ColorRepresentation, Mesh, MeshStandardMaterial, Scene } from 'three';
import { ISceneEntity } from './ISceneEntity';
import { Component } from './Component';

export class GameObject extends Mesh implements ISceneEntity
{
    protected components: Component[] = [];

    public static Cube(config: {width: number, height: number, depth: number, color: ColorRepresentation}): GameObject
    {
        return new GameObject(
            new BoxGeometry(config.width, config.height, config.depth),
            new MeshStandardMaterial({ color: config.color })
        );
    }

    public onStart(): void
    {
        this.components.forEach(cmp => cmp.start());
    }

    public onUpdate(): void
    {
        this.components.forEach(cmp => cmp.update());
    }

    public onEnable(scene: Scene): void
    {
        scene.add(this);
    }

    public getComponent<T extends Component>(componentCtr: T): T|null
    {
        for (let i = 0; i < this.components.length; i++) {
            const component = this.components[i];

            if (typeof(component) === typeof(componentCtr)) {
                return component as T;
            }
        }

        return null;
    }

    public addComponent<T extends Component>(component: T): void
    {
        this.components = [ ...this.components, component ];
    }
}