const sharp = require('d:/libn-sarita/lbn_tv/node_modules/sharp');
const path = require('path');
const fs = require('fs');

const imgDir = 'd:/libn-sarita/lbn_tv/src/assets/images';
const outDir = 'd:/libn-sarita/lbn_tv/src/assets/images/posters';

const W = 600;
const H = 900;

function getVignetteSvg(w, h, topDark = 0.8, bottomDark = 0.92) {
  return Buffer.from(`<svg width="${w}" height="${h}">
    <defs>
      <radialGradient id="vig" cx="50%" cy="50%" r="65%">
        <stop offset="0%" stop-color="#000" stop-opacity="0.05" />
        <stop offset="70%" stop-color="#000" stop-opacity="0.55" />
        <stop offset="100%" stop-color="#000" stop-opacity="0.94" />
      </radialGradient>
      <linearGradient id="topG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#05050a" stop-opacity="${topDark}" />
        <stop offset="30%" stop-color="#05050a" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="botG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="65%" stop-color="#05050a" stop-opacity="0" />
        <stop offset="100%" stop-color="#05050a" stop-opacity="${bottomDark}" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#vig)" />
    <rect width="${w}" height="${h}" fill="url(#topG)" />
    <rect width="${w}" height="${h}" fill="url(#botG)" />
  </svg>`);
}

async function applyFeather(buffer, w, h, { top = 0, bottom = 0, left = 0, right = 0 } = {}) {
  const composites = [];
  if (top > 0 || bottom > 0) {
    const vSvg = Buffer.from(`<svg width="${w}" height="${h}">
      <defs>
        <linearGradient id="vg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff" stop-opacity="${top === 0 ? 1 : 0}" />
          ${top > 0 ? `<stop offset="${top}%" stop-color="#fff" stop-opacity="1" />` : ''}
          <stop offset="${100 - bottom}%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="${bottom === 0 ? 1 : 0}" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#vg)" />
    </svg>`);
    composites.push({ input: vSvg, blend: 'dest-in' });
  }
  if (left > 0 || right > 0) {
    const hSvg = Buffer.from(`<svg width="${w}" height="${h}">
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fff" stop-opacity="${left === 0 ? 1 : 0}" />
          ${left > 0 ? `<stop offset="${left}%" stop-color="#fff" stop-opacity="1" />` : ''}
          <stop offset="${100 - right}%" stop-color="#fff" stop-opacity="1" />
          <stop offset="100%" stop-color="#fff" stop-opacity="${right === 0 ? 1 : 0}" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#hg)" />
    </svg>`);
    composites.push({ input: hSvg, blend: 'dest-in' });
  }
  if (composites.length > 0) {
    return await sharp(buffer).composite(composites).toBuffer();
  }
  return buffer;
}

// 1. TIMELESS PARAGON
async function buildTimelessParagon() {
  const src = path.join(imgDir, 'timeless_paragon_new.jpg');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(16)
    .modulate({ brightness: 0.5 })
    .toBuffer();

  const centerCropRaw = await sharp(src)
    .extract({ left: 160, top: 20, width: 704, height: 536 })
    .resize(560, 426, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const centerCrop = await applyFeather(centerCropRaw, 560, 426, { top: 10, bottom: 15 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.7, 0.9), top: 0, left: 0 },
      { input: centerCrop, top: 235, left: 20 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'timeless_paragon_portrait.jpg'));
  console.log('Done: timeless_paragon_portrait.jpg');
}

// 2. WHOLENESS
async function buildWholeness() {
  const src = path.join(imgDir, 'Wholeness (1).png');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(18)
    .modulate({ brightness: 0.45, saturation: 1.15 })
    .toBuffer();

  // Full Logo: x: 100..1140 (w: 1040, h: 480)
  const logoRaw = await sharp(src)
    .extract({ left: 100, top: 150, width: 1040, height: 490 })
    .resize(540, 254, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  // Dr. Prashanti: x: 1240..1920 (w: 680, h: 1000)
  const doctorRaw = await sharp(src)
    .extract({ left: 1240, top: 80, width: 680, height: 1000 })
    .resize(460, 676, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const doctor = await applyFeather(doctorRaw, 460, 676, { bottom: 18, left: 10 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.8, 0.95), top: 0, left: 0 },
      { input: logoRaw, top: 55, left: 30 },
      { input: doctor, top: 295, left: 70 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'wholeness_portrait.jpg'));
  console.log('Done: wholeness_portrait.jpg');
}

// 3. THE WORD AT WORK
async function buildWordAtWork() {
  const src = path.join(imgDir, 'TheWordatWork.png');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(18)
    .modulate({ brightness: 0.48 })
    .toBuffer();

  const fullSceneRaw = await sharp(src)
    .extract({ left: 100, top: 50, width: 1472, height: 891 })
    .resize(560, 339, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const fullScene = await applyFeather(fullSceneRaw, 560, 339, { top: 12, bottom: 16 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.75, 0.95), top: 0, left: 0 },
      { input: fullScene, top: 280, left: 20 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'word_at_work_portrait.jpg'));
  console.log('Done: word_at_work_portrait.jpg');
}

// 4. IGNITE SHOW
async function buildIgnite() {
  const src = path.join(imgDir, 'YOUTHIgnite.png');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(18)
    .modulate({ brightness: 0.45 })
    .toBuffer();

  const fireLogo = await sharp(src)
    .extract({ left: 3350, top: 950, width: 2300, height: 1250 })
    .resize(480, 261, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const hostRaw = await sharp(src)
    .extract({ left: 1300, top: 400, width: 1800, height: 2975 })
    .resize(420, 694, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const host = await applyFeather(hostRaw, 420, 694, { bottom: 18 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.7, 0.95), top: 0, left: 0 },
      { input: fireLogo, top: 60, left: 60 },
      { input: host, top: 290, left: 90 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'ignite_portrait.jpg'));
  console.log('Done: ignite_portrait.jpg');
}

// 5. CRAFTING FAITH
async function buildCraftingFaith() {
  const src = path.join(imgDir, 'Crafting Faith.png');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(18)
    .modulate({ brightness: 0.48 })
    .toBuffer();

  const logoRaw = await sharp(src)
    .extract({ left: 40, top: 80, width: 850, height: 580 })
    .resize(480, 327, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();
  const logo = await applyFeather(logoRaw, 480, 327, { right: 8 });

  // Host starts at x: 960 (no logo overlap)
  const hostRaw = await sharp(src)
    .extract({ left: 960, top: 60, width: 640, height: 1000 })
    .resize(420, 656, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();
  const host = await applyFeather(hostRaw, 420, 656, { bottom: 18, left: 10 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.75, 0.95), top: 0, left: 0 },
      { input: logo, top: 50, left: 60 },
      { input: host, top: 350, left: 90 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'crafting_faith_portrait.jpg'));
  console.log('Done: crafting_faith_portrait.jpg');
}

// 6. MONEY MATTERS
async function buildMoneyMatters() {
  const src = path.join(imgDir, 'MoneyMatter.jpeg');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(18)
    .modulate({ brightness: 0.48 })
    .toBuffer();

  const logo = await sharp(src)
    .extract({ left: 80, top: 160, width: 640, height: 340 })
    .resize(480, 255, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const hostRaw = await sharp(src)
    .extract({ left: 820, top: 100, width: 780, height: 841 })
    .resize(480, 517, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();
  const host = await applyFeather(hostRaw, 480, 517, { bottom: 18, left: 10 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.75, 0.95), top: 0, left: 0 },
      { input: logo, top: 55, left: 60 },
      { input: host, top: 355, left: 60 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'money_matters_portrait.jpg'));
  console.log('Done: money_matters_portrait.jpg');
}

// 7. TEEVABLAZE
async function buildTeevablaze() {
  const src = path.join(imgDir, 'teevablaze_banner.jpg');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(16)
    .modulate({ brightness: 0.5 })
    .toBuffer();

  const logo = await sharp(src)
    .extract({ left: 20, top: 130, width: 440, height: 350 })
    .resize(450, 358, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  // Joshua starts at x: 520 (no 'E' overlap)
  const hostsRaw = await sharp(src)
    .extract({ left: 520, top: 90, width: 345, height: 485 })
    .resize(440, 618, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();
  const hosts = await applyFeather(hostsRaw, 440, 618, { bottom: 18, left: 10 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.7, 0.95), top: 0, left: 0 },
      { input: logo, top: 40, left: 75 },
      { input: hosts, top: 330, left: 80 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'teevablaze_portrait.jpg'));
  console.log('Done: teevablaze_portrait.jpg');
}

// 8. HEALTHY LIVING (Unified Scene)
async function buildHealthyLiving() {
  const src = path.join(imgDir, 'healthy_living.jpg');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(16)
    .modulate({ brightness: 0.5 })
    .toBuffer();

  const fullSceneRaw = await sharp(src)
    .extract({ left: 10, top: 40, width: 1000, height: 536 })
    .resize(560, 300, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const fullScene = await applyFeather(fullSceneRaw, 560, 300, { top: 10, bottom: 15 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.7, 0.95), top: 0, left: 0 },
      { input: fullScene, top: 290, left: 20 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'healthy_living_portrait.jpg'));
  console.log('Done: healthy_living_portrait.jpg');
}

// 9. ETHS
async function buildETHS() {
  const src = path.join(imgDir, 'ETHS.png');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(18)
    .modulate({ brightness: 0.48 })
    .toBuffer();

  const fullSceneRaw = await sharp(src)
    .extract({ left: 240, top: 20, width: 1192, height: 900 })
    .resize(560, 423, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const fullScene = await applyFeather(fullSceneRaw, 560, 423, { top: 10, bottom: 15 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.75, 0.95), top: 0, left: 0 },
      { input: fullScene, top: 240, left: 20 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'eths_portrait.jpg'));
  console.log('Done: eths_portrait.jpg');
}

// 10. VOICE OF PRAISE
async function buildVoiceOfPraise() {
  const src = path.join(imgDir, 'voice_of_praise.jpg');
  const bg = await sharp(src)
    .resize(W, H, { fit: 'cover', position: 'center' })
    .blur(16)
    .modulate({ brightness: 0.48 })
    .toBuffer();

  const fullSceneRaw = await sharp(src)
    .extract({ left: 50, top: 20, width: 924, height: 556 })
    .resize(560, 337, { fit: 'contain' })
    .ensureAlpha()
    .toBuffer();

  const fullScene = await applyFeather(fullSceneRaw, 560, 337, { top: 10, bottom: 15 });

  await sharp(bg)
    .composite([
      { input: getVignetteSvg(W, H, 0.75, 0.95), top: 0, left: 0 },
      { input: fullScene, top: 280, left: 20 }
    ])
    .jpeg({ quality: 94 })
    .toFile(path.join(outDir, 'voice_of_praise_portrait.jpg'));
  console.log('Done: voice_of_praise_portrait.jpg');
}

async function run() {
  await buildTimelessParagon();
  await buildWholeness();
  await buildWordAtWork();
  await buildIgnite();
  await buildCraftingFaith();
  await buildMoneyMatters();
  await buildTeevablaze();
  await buildHealthyLiving();
  await buildETHS();
  await buildVoiceOfPraise();
  console.log('ALL PORTRAIT POSTERS POLISHED PERFECTLY!');
}

run().catch(console.error);
