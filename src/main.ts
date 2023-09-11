import { PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { Game } from './Core/Game';
import { Cube, Ground } from './GameObject';
import { Input } from './Input/Input';

const scene = new Scene();
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const webglRenderer = new WebGLRenderer();
webglRenderer.shadowMap.enabled = true;
webglRenderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#app')?.appendChild(webglRenderer.domElement);

const input = Input.InitFromBrowserWindow(window);
const game = new Game(input, camera, webglRenderer, scene);

const cube = new Cube({ width: 1, height: 1, depth: 1}, 0xffffff);
const ground = new Ground();

game.addGameObject(ground);
game.addGameObject(cube);
game.start();