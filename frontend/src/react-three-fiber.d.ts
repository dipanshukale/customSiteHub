import * as THREE from "three";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      boxGeometry: any;
      sphereGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      directionalLight: any;
      pointLight: any;
      spotLight: any;
    }
  }
}
