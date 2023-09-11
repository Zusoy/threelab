import { Mesh, BoxGeometry, MeshStandardMaterial, ColorRepresentation, Vector3 } from "three";
import { GameObject } from "../Core/GameObject";
import { Ground } from "./Ground";
import { Input } from "../Input/Input";
import { KeyCode } from "../Input/KeyCode";

interface CubeSize {
    readonly width: number,
    readonly height: number,
    readonly depth: number
}

export class Cube extends GameObject
{
    private readonly bottomOffset: number;
    private ground: Ground|null = null;
    private velocity: Vector3 = new Vector3(0, 0, 0);
    private input: Input|null = null;

    constructor(size: CubeSize, color: ColorRepresentation)
    {
        const mesh = new Mesh(
            new BoxGeometry(size.width, size.height, size.depth),
            new MeshStandardMaterial({ color })
        );

        mesh.castShadow = true;

        super(mesh);

        this.bottomOffset = size.height / 2;
    }

    public start(): void
    {
        this.input = this.getCurrentGame().input;
        this.ground = this.getCurrentGame().findGameObjectOfType<Ground>(this.ground as Ground);
    }

    public update(): void
    {
        this.velocity.y += 0.002;

        if (!this.isGrounded()) {
            this.mesh.position.y -= this.velocity.y;
        }

        this.mesh.position.x =+ this.velocity.x;

        if (this.input!.getKey(KeyCode.KeyA)) {
            this.velocity.x -= 0.05;
        }

        if (this.input!.getKey(KeyCode.KeyD)) {
            this.velocity.x += 0.05;
        }

        if (this.input!.getKey(KeyCode.Space)) {
            this.velocity.y -= 0.005;
        }
    }

    private isGrounded(): boolean
    {
        const y = this.mesh.position.y - this.bottomOffset;
        const groundPosition = this.ground!.mesh.position.y + (this.ground!.height / 2);

        return y <= groundPosition;
    }
}