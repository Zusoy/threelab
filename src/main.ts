import { PerspectiveCamera, Scene } from 'three'
import { Game } from './Engine/Game';
import { Input } from './Engine/Core/Input';
import { GameObject } from './Engine/Core/GameObject';
import { Player } from './Component/Player';
import { Ground } from './Component/Ground';
import renderer from './Renderer';
import light from './Light';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

document.querySelector('#app')?.appendChild(renderer.domElement);

const input = Input.initFromBrowserWindow(window);
const game = new Game(input, renderer, camera, scene);

const player = GameObject.Cube({ width: 1, height: 1, depth: 1, color: '#00cec9' });
const playerComp = new Player(player, input, 0.06);

const ground = GameObject.Cube({ width: 8, height: 0.5, depth: 20, color: '#b2bec3' });
const groundComp = new Ground(ground);

game.addEntity(player);
game.addEntity(ground);
game.mainScene.add(light);

game.start();