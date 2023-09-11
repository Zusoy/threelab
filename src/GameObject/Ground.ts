import { BoxGeometry, Mesh, MeshStandardMaterial } from "three";
import { GameObject } from "../Core/GameObject";

export class Ground extends GameObject
{
    public readonly height: number;

    constructor()
    {
        const mesh = new Mesh(
            new BoxGeometry(8, 0.5, 20),
            new MeshStandardMaterial({ color: '#2980b9' })
        );

        mesh.receiveShadow = true;
        super(mesh);

        this.height = 0.5;
    }

    public start(): void
    {
        this.mesh.position.set(0, -2, 0);
    }

    public update(): void
    {
    }
}