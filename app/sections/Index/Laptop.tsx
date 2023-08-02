import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Group } from "three";

function LapTop() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useLoader(
    GLTFLoader,
    "/models/scene.gltf"
  );
  useAnimations(animations, group);
  return (
    <group ref={group} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="GLTF_SceneRootNode">
          <group name="Bevels_2" position={[0, 0.008, -0.104]} scale={0.275}>
            <group
              name="Empty_1"
              position={[0, 0.001, 0]}
              rotation={[-Math.PI, 0, 0]}
              scale={[-0.039, 0.039, 0.039]}>
              <group
                name="Camera_Light_0"
                position={[0, 0.077, -0.044]}
                rotation={[-1.192, 0, 0]}
                scale={[-25.381, 25.381, 25.381]}>
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials.PaletteMaterial001}
                />
              </group>
            </group>
            <mesh
              name="Object_4"
              geometry={nodes.Object_4.geometry}
              material={materials.PaletteMaterial001}
            />
            <mesh
              name="Object_6"
              geometry={nodes.Object_6.geometry}
              material={materials.PaletteMaterial002}
            />
            <mesh
              name="Object_7"
              geometry={nodes.Object_7.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            name="Circle001_12"
            position={[0.203, 0.008, -0.104]}
            rotation={[0.011, -0.75, 1.274]}
          />
        </group>
        <mesh
          name="Object_14"
          geometry={nodes.Object_14.geometry}
          material={materials.PaletteMaterial001}
          position={[0, -0.014, 0]}
          scale={0.275}
        />
        <mesh
          name="Object_27"
          geometry={nodes.Object_27.geometry}
          material={materials["Touch_Bar_Shot_2021-04-02_at_18.13.28"]}
          position={[0, -0.014, 0]}
          scale={0.275}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene-transformed.glb");

export default LapTop;
