import { Renderer, Camera, Scene, DirectionalLight } from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ISceneObject } from './ISceneObject';
import { Input } from '../Input/Input';

export class Game
{
    private readonly controls: OrbitControls;
    private readonly light: DirectionalLight;
    private gameObjects: ISceneObject[] = [];

    constructor(
        public readonly input: Input,
        public readonly camera: Camera,
        public readonly renderer: Renderer,
        public readonly mainScene: Scene
    ) {
        this.light = new DirectionalLight(0xffffff, 1);
        this.light.position.z = 3;
        this.light.position.y  = 2;
        this.light.castShadow = true;
        this.mainScene.add(this.light);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    }

    addGameObject(gameObject: ISceneObject): void
    {
        this.gameObjects = [ ...this.gameObjects, gameObject ];
        gameObject.enable(this.mainScene, this);
    }

    public start(): void
    {
        this.gameObjects.forEach(gameObject => gameObject.start());

        this.update();
    }

    public update(): void
    {
        requestAnimationFrame(() => this.update());
        this.renderer.render(this.mainScene, this.camera);
        this.controls.update();

        this.gameObjects.forEach(gameObject => gameObject.update());
    }

    public findGameObjectOfType<T extends ISceneObject>(gameObjCtr: T): T|null
    {
        for (let i = 0; i < this.gameObjects.length; i++) {
            const go = this.gameObjects[i];

            if (typeof(go) === typeof(gameObjCtr)) {
                return go as T;
            }
        }

        return null;
    }
}