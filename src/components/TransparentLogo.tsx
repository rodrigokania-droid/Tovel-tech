import React, { useEffect, useRef } from 'react';

interface TransparentLogoProps {
  className?: string;
  src?: string;
}

export default function TransparentLogo({ className, src = '/logo.png' }: TransparentLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Set canvas size to match image precisely
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw the original image containing the baked checkerboard
      ctx.drawImage(img, 0, 0);
      
      // Get raw pixel data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      const bgR = data[0];
      const bgG = data[1];
      const bgB = data[2];

      // We will subtract the background color from every pixel.
      // This preserves the anti-aliasing gradients (smooth edges) perfectly,
      // while turning the solid dark gray background into absolute pure black (#000000).
      // Then, CSS mix-blend-screen will easily make the pure black 100% transparent without any jagged edges!
      for (let i = 0; i < data.length; i += 4) {
        data[i]     = Math.max(0, data[i] - bgR);
        data[i + 1] = Math.max(0, data[i + 1] - bgG);
        data[i + 2] = Math.max(0, data[i + 2] - bgB);
        // Alpha stays 255 (we rely on CSS mix-blend-screen to hide the black)
      }
      
      // Put the modified image data back into the canvas
      ctx.putImageData(imageData, 0, 0);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ imageRendering: 'high-quality' }} />;
}
