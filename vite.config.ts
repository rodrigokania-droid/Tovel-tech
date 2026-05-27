import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

try {
  const publicDir = path.resolve(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const sourceImg = 'C:\\Users\\rjkan\\.gemini\\antigravity-ide\\brain\\d3f1107b-55a2-40d7-bfda-9468ab3bcf09\\media__1779892907623.png';
  const destImg = path.join(publicDir, 'logo.png');
  if (fs.existsSync(sourceImg)) {
    fs.copyFileSync(sourceImg, destImg);
  }

  const brandManualImg = 'C:\\Users\\rjkan\\.gemini\\antigravity-ide\\brain\\d3f1107b-55a2-40d7-bfda-9468ab3bcf09\\media__1779895893698.png';
  const destBrandManual = path.join(publicDir, 'brand-manual.png');
  if (fs.existsSync(brandManualImg)) {
    fs.copyFileSync(brandManualImg, destBrandManual);
  }

  const logoMenuImg = 'C:\\Users\\rjkan\\.gemini\\antigravity-ide\\brain\\d3f1107b-55a2-40d7-bfda-9468ab3bcf09\\media__1779906648201.png';
  const destLogoMenu = path.join(publicDir, 'logo-menu.webp');
  if (fs.existsSync(logoMenuImg)) {
    fs.copyFileSync(logoMenuImg, destLogoMenu);
  }

  const faviconImg = 'C:\\Users\\rjkan\\.gemini\\antigravity-ide\\brain\\d3f1107b-55a2-40d7-bfda-9468ab3bcf09\\media__1779896061474.png';
  const destFavicon = path.join(publicDir, 'favicon.png');
  if (fs.existsSync(faviconImg)) {
    fs.copyFileSync(faviconImg, destFavicon);
  }

  const logoFooterImg = 'C:\\Users\\rjkan\\.gemini\\antigravity-ide\\brain\\d3f1107b-55a2-40d7-bfda-9468ab3bcf09\\media__1779896307060.png';
  const destLogoFooter = path.join(publicDir, 'logo-footer.webp');
  if (fs.existsSync(logoFooterImg)) {
    fs.copyFileSync(logoFooterImg, destLogoFooter);
  }

  const logoTransparentImg = 'C:\\Users\\rjkan\\.gemini\\antigravity-ide\\brain\\d3f1107b-55a2-40d7-bfda-9468ab3bcf09\\tovel_logo_transparent_1779891418302.png';
  const destLogoTransparent = path.join(publicDir, 'logo-transparent.png');
  if (fs.existsSync(logoTransparentImg)) {
    fs.copyFileSync(logoTransparentImg, destLogoTransparent);
  }
} catch (e) {
  console.error('Error copying files', e);
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâ€”file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
