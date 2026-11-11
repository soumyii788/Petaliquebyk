import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BlueBouquet3D({ className = '' }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // --- 1. Scene, Camera, Renderer ---
    const scene = new THREE.Scene();

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // --- 2. Lighting (Dreamy Boutique Aesthetic) ---
    const ambientLight = new THREE.AmbientLight(0xfff8f2, 1.35);
    scene.add(ambientLight);

    // Warm key light from top-right
    const keyLight = new THREE.DirectionalLight(0xfff0e4, 2.1);
    keyLight.position.set(5, 7, 6);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.0004;
    scene.add(keyLight);

    // Soft cool fill light from left (enhances royal and baby blue velvety depth)
    const fillLight = new THREE.DirectionalLight(0xdbeafe, 1.6);
    fillLight.position.set(-6, 3, 5);
    scene.add(fillLight);

    // Rim/Back light for fuzzy edge sheen
    const rimLight = new THREE.DirectionalLight(0xbbe1fa, 2.3);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // Soft warm bounce light from below
    const bounceLight = new THREE.PointLight(0xffebd9, 0.9, 12);
    bounceLight.position.set(0, -3.5, 3.5);
    scene.add(bounceLight);

    // --- 3. Procedural Chenille Pipe-Cleaner Texture ---
    function generateChenilleTexture() {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext('2d');

      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 256, 256);

      // Coiled wire fiber bands
      for (let y = 0; y < 256; y += 4) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.28 + 0.22 * Math.sin(y * 0.4)})`;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.moveTo(0, y);
        for (let x = 0; x < 256; x += 10) {
          ctx.lineTo(x, y + (Math.random() - 0.5) * 2.8);
        }
        ctx.stroke();
      }

      // Velvet noise grain
      const imgData = ctx.getImageData(0, 0, 256, 256);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 40;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
      }
      ctx.putImageData(imgData, 0, 0);

      const texture = new THREE.CanvasTexture(c);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(3, 3);
      return texture;
    }

    const chenilleBumpMap = generateChenilleTexture();

    // --- 4. Velvet & Chenille Materials ---
    const matRoyalBlue = new THREE.MeshPhysicalMaterial({
      color: 0x143bb5,
      emissive: 0x08184d,
      roughness: 0.82,
      metalness: 0.05,
      sheen: 1.0,
      sheenRoughness: 0.42,
      sheenColor: new THREE.Color(0x608eff),
      bumpMap: chenilleBumpMap,
      bumpScale: 0.045,
      side: THREE.DoubleSide,
    });

    const matBabyBlue = new THREE.MeshPhysicalMaterial({
      color: 0x67b5e8,
      emissive: 0x183d63,
      roughness: 0.8,
      metalness: 0.04,
      sheen: 1.0,
      sheenRoughness: 0.38,
      sheenColor: new THREE.Color(0xbfe3ff),
      bumpMap: chenilleBumpMap,
      bumpScale: 0.04,
      side: THREE.DoubleSide,
    });

    const matWhiteChenille = new THREE.MeshPhysicalMaterial({
      color: 0xfcfdfd,
      roughness: 0.85,
      sheen: 1.0,
      sheenRoughness: 0.35,
      sheenColor: new THREE.Color(0xffffff),
      bumpMap: chenilleBumpMap,
      bumpScale: 0.035,
      side: THREE.DoubleSide,
    });

    const matNavyEye = new THREE.MeshPhysicalMaterial({
      color: 0x0a1024,
      roughness: 0.7,
      sheen: 0.8,
      sheenRoughness: 0.4,
      sheenColor: new THREE.Color(0x2a3d70),
      bumpMap: chenilleBumpMap,
      bumpScale: 0.03,
    });

    const matCyanEye = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      roughness: 0.78,
      sheen: 1.0,
      sheenRoughness: 0.38,
      sheenColor: new THREE.Color(0xafe4ff),
      bumpMap: chenilleBumpMap,
      bumpScale: 0.035,
    });

    const matGreenStem = new THREE.MeshPhysicalMaterial({
      color: 0x22802d,
      emissive: 0x08260c,
      roughness: 0.85,
      sheen: 0.9,
      sheenRoughness: 0.5,
      sheenColor: new THREE.Color(0x6bd67b),
      bumpMap: chenilleBumpMap,
      bumpScale: 0.04,
    });

    const matSatinRibbon = new THREE.MeshPhysicalMaterial({
      color: 0x1034a6,
      roughness: 0.2,
      metalness: 0.12,
      clearcoat: 0.9,
      clearcoatRoughness: 0.12,
      sheen: 0.85,
      sheenColor: new THREE.Color(0x527aff),
      side: THREE.DoubleSide,
    });

    const matKoreanWrap = new THREE.MeshPhysicalMaterial({
      color: 0xfcfbfa,
      roughness: 0.65,
      transmission: 0.12,
      opacity: 0.96,
      transparent: true,
      side: THREE.DoubleSide,
    });

    const matGoldTrim = new THREE.MeshStandardMaterial({
      color: 0xdfbe7a,
      roughness: 0.35,
      metalness: 0.7,
      side: THREE.DoubleSide,
    });

    const matGlitterNet = new THREE.MeshPhysicalMaterial({
      color: 0x38d8f0,
      roughness: 0.3,
      transmission: 0.7,
      opacity: 0.45,
      transparent: true,
      wireframe: true,
      side: THREE.DoubleSide,
    });

    // --- 5. Geometry Helpers for Pipe-Cleaner Blooms ---

    function createLilyPetalGeometry(length = 1.35, width = 0.44, curveZ = 0.22) {
      const geom = new THREE.PlaneGeometry(width, length, 12, 24);
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const v = (y + length / 2) / length;

        const taper = Math.sin(v * Math.PI) * (1.1 - 0.3 * v);
        pos.setX(i, x * taper);

        const zArch = Math.sin(v * Math.PI) * curveZ - Math.pow(v, 2.5) * (curveZ * 1.5);
        const zFold = -(x * x) * 1.5;
        pos.setZ(i, zArch + zFold);
      }
      geom.computeVertexNormals();
      return geom;
    }

    function createTulipPetalGeometry(height = 1.1, width = 0.55) {
      const geom = new THREE.PlaneGeometry(width, height, 10, 16);
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const v = (y + height / 2) / height;
        const widthFactor = Math.sin(Math.pow(v, 0.7) * Math.PI);
        pos.setX(i, x * (widthFactor + 0.15));

        const zCup = -Math.sin(v * Math.PI) * 0.25 - (x * x) * 1.2;
        pos.setZ(i, zCup);
      }
      geom.computeVertexNormals();
      return geom;
    }

    // --- 6. Assemble the Bouquet Model ---
    const bouquetGroup = new THREE.Group();
    scene.add(bouquetGroup);

    const animatedHeads = [];

    // (A) Top-Center Nazar / Evil Eye Amulet
    const nazarGroup = new THREE.Group();
    nazarGroup.position.set(-0.15, 2.15, 0.05);
    nazarGroup.rotation.set(-0.08, -0.05, 0.08);

    const ringOuter = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.09, 16, 48), matRoyalBlue);
    const ringWhite = new THREE.Mesh(new THREE.TorusGeometry(0.40, 0.075, 16, 48), matWhiteChenille);
    const ringCyan = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.07, 16, 48), matCyanEye);
    const pupil = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 32), matNavyEye);
    pupil.rotation.x = Math.PI / 2;

    nazarGroup.add(ringOuter, ringWhite, ringCyan, pupil);
    bouquetGroup.add(nazarGroup);
    animatedHeads.push({ group: nazarGroup, speed: 1.1, swayAmp: 0.025, phase: 0.5 });

    // (B) Main Center Royal Blue Lily
    const mainLilyGroup = new THREE.Group();
    mainLilyGroup.position.set(0.0, 1.15, 0.45);
    mainLilyGroup.rotation.set(0.1, 0.0, 0.05);

    const lilyPetalGeom = createLilyPetalGeometry(1.35, 0.44, 0.22);
    const petalCount = 6;
    for (let i = 0; i < petalCount; i++) {
      const angle = (i * Math.PI * 2) / petalCount;
      const petalMesh = new THREE.Mesh(lilyPetalGeom, matRoyalBlue);
      petalMesh.rotation.z = angle;
      petalMesh.rotation.x = 0.55;
      petalMesh.translateY(0.55);
      petalMesh.castShadow = true;
      mainLilyGroup.add(petalMesh);
    }

    for (let s = 0; s < 6; s++) {
      const stamenAngle = (s * Math.PI * 2) / 6 + 0.3;
      const stamenStem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.018, 0.48, 8),
        matWhiteChenille
      );
      stamenStem.rotation.z = stamenAngle;
      stamenStem.rotation.x = 0.35;
      stamenStem.translateY(0.25);

      const anther = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), matWhiteChenille);
      anther.position.y = 0.25;
      stamenStem.add(anther);
      mainLilyGroup.add(stamenStem);
    }
    bouquetGroup.add(mainLilyGroup);
    animatedHeads.push({ group: mainLilyGroup, speed: 1.3, swayAmp: 0.035, phase: 1.2 });

    // (C) Dual-Tone Baby Blue & Royal Blue Bordered Lilies
    function createDualToneLily(posX, posY, posZ, rotX, rotY, rotZ) {
      const lily = new THREE.Group();
      lily.position.set(posX, posY, posZ);
      lily.rotation.set(rotX, rotY, rotZ);

      const innerPetalGeom = createLilyPetalGeometry(1.22, 0.38, 0.2);
      const borderPetalGeom = createLilyPetalGeometry(1.28, 0.43, 0.2);

      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI * 2) / 6;

        const borderPetal = new THREE.Mesh(borderPetalGeom, matRoyalBlue);
        borderPetal.rotation.z = angle;
        borderPetal.rotation.x = 0.52;
        borderPetal.translateY(0.52);
        borderPetal.position.z -= 0.015;

        const innerPetal = new THREE.Mesh(innerPetalGeom, matBabyBlue);
        innerPetal.rotation.z = angle;
        innerPetal.rotation.x = 0.52;
        innerPetal.translateY(0.52);
        innerPetal.castShadow = true;

        lily.add(borderPetal, innerPetal);
      }

      for (let s = 0; s < 5; s++) {
        const sAngle = (s * Math.PI * 2) / 5;
        const stamen = new THREE.Mesh(
          new THREE.CylinderGeometry(0.016, 0.016, 0.42, 8),
          matWhiteChenille
        );
        stamen.rotation.z = sAngle;
        stamen.rotation.x = 0.3;
        stamen.translateY(0.22);
        const anther = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), matWhiteChenille);
        anther.position.y = 0.22;
        stamen.add(anther);
        lily.add(stamen);
      }
      return lily;
    }

    const babyLilyLeft = createDualToneLily(-0.35, 0.38, 0.65, 0.15, -0.15, 0.1);
    const babyLilyRight = createDualToneLily(0.68, 0.45, 0.45, 0.12, 0.28, -0.18);
    bouquetGroup.add(babyLilyLeft, babyLilyRight);
    animatedHeads.push({ group: babyLilyLeft, speed: 1.25, swayAmp: 0.03, phase: 2.1 });
    animatedHeads.push({ group: babyLilyRight, speed: 1.4, swayAmp: 0.03, phase: 3.4 });

    // (D) Tulips
    function createTulip(colorMat, posX, posY, posZ, rotX, rotY, rotZ) {
      const tulip = new THREE.Group();
      tulip.position.set(posX, posY, posZ);
      tulip.rotation.set(rotX, rotY, rotZ);

      const tulipGeom = createTulipPetalGeometry(1.05, 0.52);
      const tulipPetals = 5;
      for (let p = 0; p < tulipPetals; p++) {
        const angle = (p * Math.PI * 2) / tulipPetals;
        const petal = new THREE.Mesh(tulipGeom, colorMat);
        petal.rotation.y = angle;
        petal.rotation.x = 0.22;
        petal.translateY(0.45);
        petal.translateZ(0.18);
        petal.castShadow = true;
        tulip.add(petal);
      }
      return tulip;
    }

    const tulipSkyLeft = createTulip(matBabyBlue, -0.85, 1.95, 0.18, 0.08, -0.1, 0.2);
    const tulipRoyalRight = createTulip(matRoyalBlue, 0.95, 1.88, 0.15, 0.05, 0.15, -0.22);
    bouquetGroup.add(tulipSkyLeft, tulipRoyalRight);
    animatedHeads.push({ group: tulipSkyLeft, speed: 1.5, swayAmp: 0.04, phase: 0.8 });
    animatedHeads.push({ group: tulipRoyalRight, speed: 1.35, swayAmp: 0.04, phase: 2.7 });

    // (E) Mini Forget-Me-Not Blossoms
    function createMiniBlossom(x, y, z) {
      const mini = new THREE.Group();
      mini.position.set(x, y, z);
      const miniPetalGeom = new THREE.SphereGeometry(0.07, 8, 8);
      miniPetalGeom.scale(1, 1.4, 0.35);

      for (let i = 0; i < 5; i++) {
        const a = (i * Math.PI * 2) / 5;
        const p = new THREE.Mesh(miniPetalGeom, matRoyalBlue);
        p.rotation.z = a;
        p.translateY(0.09);
        mini.add(p);
      }
      const centerDot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), matWhiteChenille);
      mini.add(centerDot);
      return mini;
    }

    const miniBlossoms = [
      [-1.25, 0.25, 0.35],
      [-1.05, 0.48, 0.42],
      [-0.95, 0.12, 0.52],
      [1.15, 0.32, 0.38],
      [1.02, 0.10, 0.45],
    ];
    miniBlossoms.forEach(([x, y, z]) => {
      bouquetGroup.add(createMiniBlossom(x, y, z));
    });

    // (F) Green Leaves & Stems
    const stemsGroup = new THREE.Group();
    const mainStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.16, 2.8, 16),
      matGreenStem
    );
    mainStem.position.set(0, -0.8, 0);
    stemsGroup.add(mainStem);

    function createLeaf(length, width, px, py, pz, rz, ry) {
      const leafGeom = new THREE.PlaneGeometry(width, length, 8, 16);
      const pos = leafGeom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const v = (y + length / 2) / length;
        pos.setX(i, x * Math.sin(v * Math.PI));
        pos.setZ(i, Math.sin(v * Math.PI) * 0.15 - (x * x) * 2.0);
      }
      leafGeom.computeVertexNormals();
      const leafMesh = new THREE.Mesh(leafGeom, matGreenStem);
      leafMesh.position.set(px, py, pz);
      leafMesh.rotation.set(0.1, ry, rz);
      leafMesh.translateY(length / 2);
      return leafMesh;
    }

    stemsGroup.add(
      createLeaf(1.6, 0.32, -0.65, 0.6, 0.1, 0.55, -0.3),
      createLeaf(1.5, 0.30, 0.72, 0.8, 0.12, -0.5, 0.3),
      createLeaf(1.2, 0.26, -0.2, 0.3, 0.45, 0.15, 0.1)
    );
    bouquetGroup.add(stemsGroup);

    // (G) Glitter Diamond Mesh Netting
    const netGeom = new THREE.CylinderGeometry(1.9, 0.4, 2.6, 24, 8, true, -Math.PI / 2.2, Math.PI / 1.1);
    const netMesh = new THREE.Mesh(netGeom, matGlitterNet);
    netMesh.position.set(0, 0.85, -0.2);
    netMesh.rotation.x = 0.25;
    bouquetGroup.add(netMesh);

    // (H) Korean Paper Wrap & Gold Trim
    const wrapGroup = new THREE.Group();
    wrapGroup.position.set(0, -0.4, -0.15);

    const wrapGeom = new THREE.CylinderGeometry(2.35, 0.48, 2.9, 32, 4, true, -Math.PI / 1.8, Math.PI / 0.9);
    const wrapMesh = new THREE.Mesh(wrapGeom, matKoreanWrap);
    wrapMesh.rotation.x = 0.2;
    wrapMesh.castShadow = true;
    wrapMesh.receiveShadow = true;
    wrapGroup.add(wrapMesh);

    const trimGeom = new THREE.TorusGeometry(2.36, 0.02, 8, 32, Math.PI / 0.9);
    const trimMesh = new THREE.Mesh(trimGeom, matGoldTrim);
    trimMesh.position.set(0, 1.45, 0.28);
    trimMesh.rotation.x = Math.PI / 2.3;
    wrapGroup.add(trimMesh);

    bouquetGroup.add(wrapGroup);

    // (I) Royal Blue Satin Ribbon Bow
    const ribbonGroup = new THREE.Group();
    ribbonGroup.position.set(0, -1.35, 0.35);

    const knot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), matSatinRibbon);
    knot.scale.set(1.1, 0.9, 0.7);
    ribbonGroup.add(knot);

    const loopGeom = new THREE.TorusGeometry(0.35, 0.1, 16, 32);
    const loopLeft = new THREE.Mesh(loopGeom, matSatinRibbon);
    loopLeft.position.set(-0.35, 0.08, 0);
    loopLeft.rotation.set(0.2, 0.4, 0.3);
    loopLeft.scale.set(1, 0.65, 0.5);

    const loopRight = new THREE.Mesh(loopGeom, matSatinRibbon);
    loopRight.position.set(0.35, 0.08, 0);
    loopRight.rotation.set(0.2, -0.4, -0.3);
    loopRight.scale.set(1, 0.65, 0.5);
    ribbonGroup.add(loopLeft, loopRight);

    function createRibbonTail(length, dirX) {
      const geom = new THREE.PlaneGeometry(0.22, length, 8, 20);
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const v = (y + length / 2) / length;
        pos.setZ(i, Math.sin(v * Math.PI * 2.5) * 0.12);
        pos.setX(i, pos.getX(i) + Math.sin(v * Math.PI) * (0.25 * dirX));
      }
      geom.computeVertexNormals();
      const tail = new THREE.Mesh(geom, matSatinRibbon);
      tail.position.set(0.12 * dirX, -length / 2 - 0.08, 0.05);
      return tail;
    }

    const tailLeft = createRibbonTail(1.4, -1);
    const tailRight = createRibbonTail(1.6, 1);
    ribbonGroup.add(tailLeft, tailRight);
    bouquetGroup.add(ribbonGroup);

    // Initial scale & position
    bouquetGroup.scale.set(0.95, 0.95, 0.95);

    // Dynamic horizontal placement based on screen width
    let targetBaseX = width >= 1024 ? 1.4 : width >= 768 ? 0.8 : 0.0;
    let targetBaseY = width < 768 ? 0.3 : -0.1;
    bouquetGroup.position.set(targetBaseX, -6.5, -2.0); // Starts lowered for entrance

    // --- 7. Falling Blue Petals System ---
    const PETAL_COUNT = 60;
    const petalsGroup = new THREE.Group();
    scene.add(petalsGroup);

    const singlePetalGeom = createLilyPetalGeometry(0.55, 0.22, 0.12);
    const petalsData = [];

    for (let p = 0; p < PETAL_COUNT; p++) {
      const isRoyal = Math.random() > 0.45;
      const petalMesh = new THREE.Mesh(
        singlePetalGeom,
        isRoyal ? matRoyalBlue : matBabyBlue
      );

      const x = (Math.random() - 0.5) * 11;
      const y = Math.random() * 16 - 4;
      const z = (Math.random() - 0.5) * 6 + 0.5;

      petalMesh.position.set(x, y, z);
      const s = 0.5 + Math.random() * 0.65;
      petalMesh.scale.set(s, s, s);

      petalsGroup.add(petalMesh);

      petalsData.push({
        mesh: petalMesh,
        baseX: x,
        y: y,
        z: z,
        speedY: 0.018 + Math.random() * 0.025,
        rotSpeedX: (Math.random() - 0.5) * 0.035,
        rotSpeedY: (Math.random() - 0.5) * 0.045,
        rotSpeedZ: (Math.random() - 0.5) * 0.025,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: 0.7 + Math.random() * 0.9,
        swayAmp: 0.4 + Math.random() * 0.45,
      });
    }

    // --- 8. Ambient Micro-Dust Sparkles ---
    const sparkleGeom = new THREE.BufferGeometry();
    const SPARKLE_COUNT = 80;
    const sparklePositions = new Float32Array(SPARKLE_COUNT * 3);
    for (let i = 0; i < SPARKLE_COUNT * 3; i += 3) {
      sparklePositions[i] = (Math.random() - 0.5) * 10;
      sparklePositions[i + 1] = (Math.random() - 0.5) * 10;
      sparklePositions[i + 2] = (Math.random() - 0.5) * 5 + 1;
    }
    sparkleGeom.setAttribute('position', new THREE.BufferAttribute(sparklePositions, 3));

    const sparkleMat = new THREE.PointsMaterial({
      color: 0xe0f2fe,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const sparkles = new THREE.Points(sparkleGeom, sparkleMat);
    scene.add(sparkles);

    // --- 9. Cinematic Entrance Animation (GSAP) ---
    bouquetGroup.rotation.y = -Math.PI / 3;
    bouquetGroup.rotation.x = 0.25;
    bouquetGroup.scale.set(0.5, 0.5, 0.5);

    const entranceTl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        setIsLoaded(true);
      },
    });

    entranceTl.to(bouquetGroup.position, {
      y: targetBaseY,
      z: 0.0,
      duration: 2.5,
      ease: 'power3.out',
    });

    entranceTl.to(
      bouquetGroup.rotation,
      {
        y: 0.0,
        x: 0.0,
        duration: 2.7,
        ease: 'power2.out',
      },
      '-=2.5'
    );

    entranceTl.to(
      bouquetGroup.scale,
      {
        x: 0.95,
        y: 0.95,
        z: 0.95,
        duration: 2.3,
        ease: 'back.out(1.15)',
      },
      '-=2.3'
    );

    entranceTl.fromTo(
      mainLilyGroup.children.map((c) => c.rotation),
      { x: 0.25 },
      { x: 0.55, duration: 1.8, ease: 'power2.out', stagger: 0.03 },
      '-=1.8'
    );

    // --- 10. ScrollTrigger Scroll Interaction ---
    let scrollProgress = 0;
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.2,
      onUpdate: (self) => {
        scrollProgress = self.progress;

        // Bouquet glides down and rotates softly as user scrolls
        gsap.to(bouquetGroup.position, {
          y: targetBaseY - scrollProgress * 2.4,
          z: -scrollProgress * 1.6,
          overwrite: 'auto',
          duration: 0.35,
        });

        gsap.to(bouquetGroup.rotation, {
          y: scrollProgress * 0.9,
          x: scrollProgress * 0.3,
          overwrite: 'auto',
          duration: 0.35,
        });
      },
    });

    // --- 11. Mouse / Touch Parallax & Inertia ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      mouse.targetX = ((clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.targetY = -((clientY - rect.top) / rect.height - 0.5) * 2;
      setIsInteracting(true);
    };

    const handlePointerLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
      setIsInteracting(false);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    container.addEventListener('mouseleave', handlePointerLeave);

    // --- 12. Main Render & Physics Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Parallax rotation applied to bouquet
      const ambientSwayY = Math.sin(elapsedTime * 0.6) * 0.06;
      const ambientSwayX = Math.cos(elapsedTime * 0.8) * 0.03;
      bouquetGroup.rotation.y = scrollProgress * 0.9 + mouse.x * 0.38 + ambientSwayY;
      bouquetGroup.rotation.x = scrollProgress * 0.3 - mouse.y * 0.22 + ambientSwayX;
      bouquetGroup.rotation.z = mouse.x * 0.07 + Math.sin(elapsedTime * 0.5) * 0.02;

      // Subtle breeze on individual flower heads
      animatedHeads.forEach((item) => {
        const { group, speed, swayAmp, phase } = item;
        group.rotation.z += Math.sin(elapsedTime * speed + phase) * swayAmp * 0.04;
        group.rotation.x += Math.cos(elapsedTime * speed * 0.8 + phase) * swayAmp * 0.03;
      });

      // Ribbon tail flutter
      tailLeft.rotation.z = -0.15 + Math.sin(elapsedTime * 1.8) * 0.08;
      tailRight.rotation.z = 0.15 + Math.cos(elapsedTime * 2.0) * 0.09;

      // Falling Petals Physics (speed boosted by scroll progress)
      const fallSpeedMultiplier = 1.0 + scrollProgress * 3.8;
      petalsData.forEach((petal) => {
        petal.y -= petal.speedY * fallSpeedMultiplier;
        petal.mesh.position.y = petal.y;

        petal.mesh.position.x =
          petal.baseX + Math.sin(elapsedTime * petal.swaySpeed + petal.swayPhase) * petal.swayAmp;

        petal.mesh.rotation.x += petal.rotSpeedX * fallSpeedMultiplier;
        petal.mesh.rotation.y += petal.rotSpeedY * fallSpeedMultiplier;
        petal.mesh.rotation.z += petal.rotSpeedZ * fallSpeedMultiplier;

        if (petal.y < -6.0) {
          petal.y = 8.0 + Math.random() * 2.5;
          petal.baseX = (Math.random() - 0.5) * 11;
          petal.mesh.position.z = (Math.random() - 0.5) * 5 + 0.5;
        }
      });

      // Floating dust particles
      const positions = sparkles.geometry.attributes.position.array;
      for (let i = 1; i < SPARKLE_COUNT * 3; i += 3) {
        positions[i] -= 0.003;
        if (positions[i] < -4) positions[i] = 4;
      }
      sparkles.geometry.attributes.position.needsUpdate = true;
      sparkles.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
    }

    animate();

    // --- 13. Responsive Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;

      if (width < 768) {
        targetBaseX = 0.0;
        targetBaseY = 0.35;
        camera.position.set(0, 0.45, 9.2);
      } else if (width < 1024) {
        targetBaseX = 0.8;
        targetBaseY = 0.0;
        camera.position.set(0, 0.25, 8.0);
      } else {
        targetBaseX = 1.4;
        targetBaseY = -0.1;
        camera.position.set(0, 0.15, 7.3);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // --- 14. Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      if (scrollTriggerInstance) scrollTriggerInstance.kill();
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full select-none cursor-grab active:cursor-grabbing ${className}`}
      aria-label="Interactive 3D Handmade Blue Flower Bouquet"
    >
      <canvas ref={canvasRef} className="w-full h-full block outline-none" />

      {/* Floating 3D Badge */}
      <div
        className={`absolute top-24 right-6 sm:right-10 z-20 pointer-events-none transition-all duration-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        <div className="bg-white/80 backdrop-blur-md border border-blush/80 px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
          <span className="font-sans text-[10px] tracking-wider uppercase text-cocoa font-medium">
            Signature Chenille Evil Eye Bouquet
          </span>
        </div>
      </div>

      {/* Subtle Interaction Hint */}
      <div
        className={`absolute bottom-6 right-6 z-20 pointer-events-none transition-opacity duration-700 font-sans text-[11px] tracking-wider uppercase px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-blush text-cocoa/75 shadow-xs flex items-center gap-2 ${
          isLoaded && !isInteracting ? 'opacity-90' : 'opacity-0'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-dusty animate-pulse" />
        Move mouse or touch to inspect 3D bouquet
      </div>
    </div>
  );
}
