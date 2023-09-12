import { DirectionalLight} from 'three';

const light = new DirectionalLight(0xffffff, 1);
light.position.z = 3;
light.position.y = 2;
light.castShadow = true;

export default light;