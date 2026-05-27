import React, { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  src: string;
}

export default function BackgroundVideo({ src }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // We check if Hls is loaded from the global CDN script
    // @ts-ignore
    if (window.Hls && window.Hls.isSupported()) {
      // @ts-ignore
      const hls = new window.Hls({
        startLevel: -1, // Auto quality
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(
        // @ts-ignore
        window.Hls.Events.MANIFEST_PARSED,
        () => {
          video.play().catch(e => console.log('Auto-play prevented:', e));
        }
      );
      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari)
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.log('Auto-play prevented:', e));
      });
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster="/logo-transparent.png"
      className="w-full h-full object-cover opacity-50 mix-blend-screen bg-[#0A0A0A]"
      style={{ filter: 'contrast(1.1) brightness(0.9)' }}
    />
  );
}
