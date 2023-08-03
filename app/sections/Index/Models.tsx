import { Canvas } from "@react-three/fiber";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Environment, Loader } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion-3d";
import Me from "./Me";
import { Suspense, useLayoutEffect } from "react";
import { useContext } from "react";
import { type SectionProps } from "./Index";

const Macbook = () => {
  const model = useLoader(GLTFLoader, "/models/macbook/scene.gltf");
  const mixer = new THREE.AnimationMixer(model.scene);
  const clip = model.animations[0];
  const track = clip.tracks[0];
  track.trim(0, 4);
  const action = mixer.clipAction(clip);
  action.setLoop(THREE.LoopOnce, 1);
  action.setDuration(5);

  useFrame((state, delta) => {
    mixer.update(delta);
  });

  return (
    <group
      onClick={() => {
        action.play();
      }}>
      <primitive
        rotation-y={2}
        scale={8}
        object={model.scene}
        position={[-4.5, 1.5, -1]}
      />
    </group>
  );
};

const Desk = () => {
  const model = useLoader(GLTFLoader, "/models/table.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <primitive scale={0.1} object={model.scene} position={[2.5, 1.25, -4]} />
  );
};

const Keyboard = () => {
  const model = useLoader(GLTFLoader, "/models/keyboard.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <primitive
      rotation-y={3.2}
      position={[1, 1.5, -0.36]}
      scale={0.018}
      object={model.scene}
    />
  );
};

const SpeakerL = () => {
  const model = useLoader(GLTFLoader, "/models/speaker.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });
  return (
    <primitive
      rotation-y={1.55}
      position={[0.5, 1.5, 2]}
      scale={0.8}
      object={model.scene}
    />
  );
};

const SpeakerR = () => {
  const model = useLoader(GLTFLoader, "/models/speaker2.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });
  return (
    <primitive
      castShadow
      rotation-y={1.55}
      position={[8, 1.5, 2]}
      scale={0.8}
      object={model.scene}
    />
  );
};

const Monitor = () => {
  const model = useLoader(GLTFLoader, "/models/monitor/scene.gltf");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <group>
      <primitive
        position={[-5, 3.5, 1.5]}
        scale={0.003}
        rotation-y={3.12}
        object={model.scene}
      />
    </group>
  );
};

const Chair = () => {
  const model = useLoader(GLTFLoader, "/models/chair2.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <primitive
      scale={8}
      rotation-y={0}
      position={[0, -4.6, -6]}
      object={model.scene}
    />
  );
};

const Lamp = () => {
  const model = useLoader(GLTFLoader, "/models/lamp.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <primitive
      scale={0.2}
      rotation-y={-2}
      position={[5, 1.4, 2]}
      object={model.scene}
    />
  );
};

const Mouse = () => {
  const model = useLoader(GLTFLoader, "/models/mouse.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <primitive
      rotation-y={2}
      scale={10}
      position={[-2.5, 1.5, 0]}
      object={model.scene}
    />
  );
};

const Coffee = () => {
  const model = useLoader(GLTFLoader, "/models/coffee/scene.gltf");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <primitive
      rotation-y={2}
      scale={0.3}
      position={[3.5, 1.9, -2]}
      object={model.scene}
    />
  );
};

const Floor = () => {
  const model = useLoader(GLTFLoader, "/models/floor.glb");
  useLayoutEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  });

  return (
    <primitive
      rotation-y={2}
      scale={0.3}
      position={[0, -4.5, 0]}
      object={model.scene}
    />
  );
};

export default function Models({ IndexContext }: SectionProps) {
  const { index } = useContext(IndexContext);

  const variants = {
    out: {
      scale: 0,
      rotateY: 3,
      transition: {
        duration: 0.7,
        type: "easeInOut",
      },
    },
    in: {
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 3,
        type: "spring",
        bounce: 0.2,
        stiffness: 15,
        damping: 20,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="flex w-full h-full">
      <Canvas shadows camera={{ position: [50, 20, -60], fov: 30 }}>
        <Suspense fallback={null}>
          <pointLight position={[10, 30, 15]} intensity={0.5} castShadow />
          <pointLight position={[-10, 50, 50]} intensity={0.5} castShadow />
          <pointLight position={[0, 2.5, -5]} intensity={0.5} castShadow />
          <spotLight
            intensity={2}
            angle={0.3}
            penumbra={0.5}
            position={[0, 15, 10]}
            castShadow
          />
          <motion.group
            position={[0, -3.5, 0]}
            initial="out"
            animate={index === 0 ? "in" : "out"}
            variants={variants}>
            <Macbook />
            <Keyboard />
            <Monitor />
            <SpeakerL />
            <SpeakerR />
            <Chair />
            <Lamp />
            <Desk />
            <Mouse />
            <Me />
            <Coffee />
            <mesh castShadow receiveShadow position={[0, -6, 0]}>
              <meshStandardMaterial color={new THREE.Color("#7e7e7e")} />
              <cylinderGeometry attach="geometry" args={[12, 12, 2]} />
            </mesh>
          </motion.group>
          <Environment blur={2} near={2} preset="city" />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}
