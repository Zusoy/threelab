import { WebGLRenderer } from 'three';

const webglRenderer = new WebGLRenderer();
webglRenderer.shadowMap.enabled = true;
webglRenderer.setSize(window.innerWidth, window.innerHeight);

export default webglRenderer;