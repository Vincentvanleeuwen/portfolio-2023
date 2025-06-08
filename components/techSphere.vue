<template>
  <div ref="container" class="tech-sphere" />
  <div
    v-if="hovered"
    class="tooltip"
    :style="{ top: y + 'px', left: x + 'px' }"
  >
    <strong>{{ hovered.name }}</strong
    ><br />
    <small>{{ hovered.details }}</small>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, onBeforeUnmount, watch } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

interface Tech {
  name: string;
  icon: string;
  link: string;
  details?: string;
}

const props = defineProps<{
  techs: Tech[];
}>();

const container = ref<HTMLElement | null>(null);
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let controls: OrbitControls;
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const hovered = ref<Tech | null>(null);
const x = ref(0);
const y = ref(0);

const isMobile = ref(false);
function updateIsMobile() {
  isMobile.value = window.innerWidth < 640;
}

onMounted(() => {
  updateIsMobile();
  window.addEventListener("resize", updateIsMobile);

  // 1️⃣ Setup Three.js
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.value!.clientWidth, container.value!.clientHeight);
  container.value!.appendChild(renderer.domElement);

  let width = container.value!.clientWidth;
  let height = container.value!.clientHeight;
  const R = Math.min(width, height) * 0.5 * 0.8;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  // Position camera so the sphere fits fully
  const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
  camera.position.z = (R / Math.tan(halfFov)) * 1.3;

  // 2️⃣ Add OrbitControls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.rotateSpeed = 0.5;
  controls.enableZoom = false;

  // 3️⃣ Create icon sprites on a sphere
  const group = new THREE.Group();
  const loader = new THREE.TextureLoader();

  const N = props.techs.length;
  props.techs.forEach((t, i) => {
    let xPos = 0,
      yPos = 0,
      zPos = 0;

    const phi = Math.acos(-1 + (2 * i) / N);
    const theta = (2 * Math.PI * i) / N;

    if (isMobile.value) {
      // vertical belt
      yPos = R * Math.sin(theta);
      zPos = R * Math.cos(theta);
    } else {
      // full 3D sphere with phyllotaxis
      const th = Math.PI * (3 - Math.sqrt(5)) * i;
      xPos = R * Math.cos(th) * Math.sin(phi);
      yPos = R * Math.cos(phi);
      zPos = R * Math.sin(th) * Math.sin(phi);
    }

    const mat = new THREE.SpriteMaterial({
      map: loader.load(t.icon),
      transparent: true,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(24, 24, 1);
    sprite.userData = t;

    if (isMobile.value) {
      sprite.position.set(xPos, yPos, zPos);
    } else {
      sprite.position.set(
        R * Math.cos(theta) * Math.sin(phi),
        R * Math.sin(theta) * Math.sin(phi),
        R * Math.cos(phi)
      );
    }
    group.add(sprite);
  });
  scene.add(group);

  // 4️⃣ Animation loop
  const animate = () => {
    if (!hovered.value) {
      if (isMobile.value) {
        group.rotation.x += 0.002;
        group.rotation.y += 0.0001;
      } else {
        group.rotation.y += 0.002;
      }
    }
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();

  // 5️⃣ Hover detection
  const onPointerMove = (e: MouseEvent) => {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hit = raycaster.intersectObjects(group.children)[0];
    if (hit) {
      hovered.value = hit.object.userData;
      x.value = e.clientX + 10;
      y.value = e.clientY + 10;
    } else {
      hovered.value = null;
    }
  };
  renderer.domElement.addEventListener("pointermove", onPointerMove);

  const canvas = renderer.domElement as HTMLElement;
  canvas.style.cursor = "grab";

  canvas.addEventListener("pointerdown", () => {
    canvas.style.cursor = "grabbing";
  });
  canvas.addEventListener("pointerup", () => {
    canvas.style.cursor = "grab";
  });

  // ─── RESPOND TO WINDOW RESIZE ──────────────
  const handleResize = () => {
    width = container.value!.clientWidth;
    height = container.value!.clientHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  window.addEventListener("resize", handleResize);

  onBeforeUnmount(() => {
    renderer.domElement.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("resize", updateIsMobile);

    renderer.dispose();
  });
});
</script>

<style scoped lang="scss">
.tech-sphere {
  width: 100%;
  height: 600px;
  position: relative;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
}
.tooltip {
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  pointer-events: none;
  font-size: 0.85rem;
  z-index: 10;
}
</style>
