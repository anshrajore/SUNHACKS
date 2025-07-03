"use client";

import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { BrandScroller, BrandScrollerReverse } from "@/components/ui/brand-scoller";

export const Component = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const beamRef = useRef<Record<string, unknown> | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);

  const FilmGrain = useMemo(() => {
    return class FilmGrain {
      width: number;
      height: number;
      grainCanvas: HTMLCanvasElement;
      grainCtx: CanvasRenderingContext2D | null;
      grainData: ImageData | null;
      frame: number;
      constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.grainCanvas = document.createElement('canvas');
        this.grainCanvas.width = width;
        this.grainCanvas.height = height;
        const ctx = this.grainCanvas.getContext('2d');
        if (!ctx) throw new Error('Could not get 2D context');
        this.grainCtx = ctx;
        this.grainData = null;
        this.frame = 0;
        this.generateGrainPattern();
      }

      generateGrainPattern() {
        if (!this.grainCtx) return;
        const imageData = this.grainCtx.createImageData(this.width, this.height);
        const data = imageData.data;
        
        for (let i = 0; i < data.length; i += 4) {
          const grain = Math.random();
          const value = grain * 255;
          data[i] = value;     // R
          data[i + 1] = value; // G
          data[i + 2] = value; // B
          data[i + 3] = 255;   // A
        }
        
        this.grainData = imageData;
      }

      update() {
        this.frame++;
        
        if (!this.grainData || !this.grainCtx) return;
        
        // Regenerate grain every few frames for animation
        if (this.frame % 2 === 0) {
          const data = this.grainData.data;
          
          for (let i = 0; i < data.length; i += 4) {
            // Create animated grain with varying intensity
            const grain = Math.random();
            const time = this.frame * 0.01;
            const x = (i / 4) % this.width;
            const y = Math.floor((i / 4) / this.width);
            
            // Add some structure to the grain for more realistic look
            const pattern = Math.sin(x * 0.01 + time) * Math.cos(y * 0.01 - time);
            const value = (grain * 0.8 + pattern * 0.2) * 255;
            
            data[i] = value;
            data[i + 1] = value;
            data[i + 2] = value;
          }
          
          this.grainCtx.putImageData(this.grainData, 0, 0);
        }
      }

      apply(ctx: CanvasRenderingContext2D, intensity = 0.05, colorize = true, hue = 0) {
        ctx.save();
        
        // Apply grain with screen blend mode for lighter areas
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = intensity * 0.5;
        ctx.drawImage(this.grainCanvas, 0, 0);
        
        // Apply grain with multiply for darker areas
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = 1 - (intensity * 0.3);
        ctx.drawImage(this.grainCanvas, 0, 0);
        
        // Add colored grain if specified
        if (colorize) {
          ctx.globalCompositeOperation = 'overlay';
          ctx.globalAlpha = intensity * 0.3;
          ctx.fillStyle = `hsla(${hue}, 50%, 50%, 1)`;
          ctx.fillRect(0, 0, this.width, this.height);
        }
        
        ctx.restore();
      }

      resize(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.grainCanvas.width = width;
        this.grainCanvas.height = height;
        this.generateGrainPattern();
      }
    };
  }, []);

  // Initialize canvas and animation
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (beam.filmGrain) {
        beam.filmGrain.resize(canvas.width, canvas.height);
      }
    };
    
    // Initialize film grain
    const filmGrain = new FilmGrain(window.innerWidth, window.innerHeight);
    
    // Beam state with dynamic color system
    const beam = {
      bassIntensity: 0,
      midIntensity: 0,
      trebleIntensity: 0,
      time: 0,
      filmGrain: filmGrain,
      // Dynamic color state
      colorState: {
        hue: 30,
        targetHue: 30,
        saturation: 80,
        targetSaturation: 80,
        lightness: 50,
        targetLightness: 50
      },
      waves: [
        { 
          amplitude: 30, 
          frequency: 0.003, 
          speed: 0.02, 
          offset: 0,
          thickness: 1,
          opacity: 0.9
        },
        { 
          amplitude: 25, 
          frequency: 0.004, 
          speed: 0.015, 
          offset: Math.PI * 0.5,
          thickness: 0.8,
          opacity: 0.7
        },
        { 
          amplitude: 20, 
          frequency: 0.005, 
          speed: 0.025, 
          offset: Math.PI,
          thickness: 0.6,
          opacity: 0.5
        },
        { 
          amplitude: 35, 
          frequency: 0.002, 
          speed: 0.01, 
          offset: Math.PI * 1.5,
          thickness: 1.2,
          opacity: 0.6
        }
      ],
      particles: [],
      bassHistory: new Array(20).fill(0),
      postProcessing: {
        filmGrainIntensity: 0.04,
        vignetteIntensity: 0.4,
        chromaticAberration: 0.8,
        scanlineIntensity: 0.02
      }
    };
    beamRef.current = beam;
    
    resizeCanvas();
    
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      // Clear canvas with slight fade for motion blur
      ctx.fillStyle = 'rgba(0, 0, 0, 0.92)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Get audio data
      let bassAmplitude = 0;
      let midAmplitude = 0;
      let trebleAmplitude = 0;
      
      if (analyserRef.current && isPlaying) {
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyserRef.current.getByteFrequencyData(dataArray);
        
        // Calculate frequency ranges
        let bassSum = 0;
        for (let i = 0; i < 30; i++) {
          bassSum += dataArray[i];
        }
        bassAmplitude = bassSum / (30 * 255);
        
        let midSum = 0;
        for (let i = 30; i < 200; i++) {
          midSum += dataArray[i];
        }
        midAmplitude = midSum / (170 * 255);
        
        let trebleSum = 0;
        for (let i = 200; i < 800; i++) {
          trebleSum += dataArray[i];
        }
        trebleAmplitude = trebleSum / (600 * 255);
        
        beam.bassHistory.shift();
        beam.bassHistory.push(bassAmplitude);
        const avgBass = beam.bassHistory.reduce((a, b) => a + b) / beam.bassHistory.length;
        
        beam.bassIntensity = avgBass;
        beam.midIntensity = midAmplitude;
        beam.trebleIntensity = trebleAmplitude;
        
        // Dynamic color mapping
        if (bassAmplitude > midAmplitude && bassAmplitude > trebleAmplitude) {
          beam.colorState.targetHue = 0 + bassAmplitude * 30;
          beam.colorState.targetSaturation = 80 + bassAmplitude * 20;
          beam.colorState.targetLightness = 50 + bassAmplitude * 10;
        } else if (midAmplitude > trebleAmplitude) {
          beam.colorState.targetHue = 40 + midAmplitude * 80;
          beam.colorState.targetSaturation = 20 + midAmplitude * 30;
          beam.colorState.targetLightness = 55 + midAmplitude * 15;
        } else {
          beam.colorState.targetHue = 200 + trebleAmplitude * 80;
          beam.colorState.targetSaturation = 20 + trebleAmplitude * 40;
          beam.colorState.targetLightness = 60 + trebleAmplitude * 10;
        }
        
        // Adjust post-processing based on audio
        beam.postProcessing.filmGrainIntensity = 0.03 + bassAmplitude * 0.2;
        beam.postProcessing.chromaticAberration = trebleAmplitude * 0.5;
        
      } else {
        // Demo animation
        beam.bassIntensity = 0.4 + Math.sin(beam.time * 0.01) * 0.3;
        beam.midIntensity = 0.3 + Math.sin(beam.time * 0.015) * 0.2;
        beam.trebleIntensity = 0.2 + Math.sin(beam.time * 0.02) * 0.1;
        
        beam.colorState.targetHue = 180 + Math.sin(beam.time * 0.005) * 180;
        beam.colorState.targetSaturation = 70 + Math.sin(beam.time * 0.01) * 30;
        beam.colorState.targetLightness = 50 + Math.sin(beam.time * 0.008) * 20;
      }
      
      // Smooth color transitions
      beam.colorState.hue += (beam.colorState.targetHue - beam.colorState.hue) * 0.5;
      beam.colorState.saturation += (beam.colorState.targetSaturation - beam.colorState.saturation) * 0.2;
      beam.colorState.lightness += (beam.colorState.targetLightness - beam.colorState.lightness) * 0.1;
      
      // Update time
      beam.time++;
      
      const centerY = canvas.height / 2;
      
      // Draw waves (previous wave drawing code here)
      beam.waves.forEach((wave, waveIndex) => {
        wave.offset += wave.speed * (1 + beam.bassIntensity * 0.8);
        
        const freqInfluence = waveIndex < 2 ? beam.bassIntensity : beam.midIntensity;
        const dynamicAmplitude = wave.amplitude * (1 + freqInfluence * 5);
        
        const waveHue = beam.colorState.hue + waveIndex * 15;
        const waveSaturation = beam.colorState.saturation - waveIndex * 5;
        const waveLightness = beam.colorState.lightness + waveIndex * 5;
        
        const gradient = ctx.createLinearGradient(0, centerY - dynamicAmplitude, 0, centerY + dynamicAmplitude);
        const alpha = wave.opacity * (0.5 + beam.bassIntensity * 0.5);
        
        gradient.addColorStop(0, `hsla(${waveHue}, ${waveSaturation}%, ${waveLightness}%, 0)`);
        gradient.addColorStop(0.5, `hsla(${waveHue}, ${waveSaturation}%, ${waveLightness + 10}%, ${alpha})`);
        gradient.addColorStop(1, `hsla(${waveHue}, ${waveSaturation}%, ${waveLightness}%, 0)`);
        
        ctx.beginPath();
        for (let x = -50; x <= canvas.width + 50; x += 2) {
          const y1 = Math.sin(x * wave.frequency + wave.offset) * dynamicAmplitude;
          const y2 = Math.sin(x * wave.frequency * 2 + wave.offset * 1.5) * (dynamicAmplitude * 0.3 * beam.midIntensity);
          const y3 = Math.sin(x * wave.frequency * 0.5 + wave.offset * 0.7) * (dynamicAmplitude * 0.5);
          const y = centerY + y1 + y2 + y3;
          
          if (x === -50) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width + 50, canvas.height);
        ctx.lineTo(-50, canvas.height);
        ctx.closePath();
        
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      // Apply post-processing effects
      
      // 1. Film grain
      beam.filmGrain.update();
      beam.filmGrain.apply(ctx, beam.postProcessing.filmGrainIntensity, true, beam.colorState.hue);
      
      // 2. Scanlines
      ctx.strokeStyle = `rgba(0, 0, 0, ${beam.postProcessing.scanlineIntensity})`;
      ctx.lineWidth = 1;
      for (let y = 0; y < canvas.height; y += 3) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // 3. Chromatic aberration
      if (beam.postProcessing.chromaticAberration > 0.1) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = beam.postProcessing.chromaticAberration * 0.7;
        
        // Create temporary canvas for channel shifting
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        
        // Copy current frame
        if (tempCtx) {
          tempCtx.drawImage(canvas, 0, 0);
        }
        
        // Red channel shift
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = 'rgb(255, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'screen';
        if (tempCtx) {
          ctx.drawImage(tempCanvas, -2 * beam.postProcessing.chromaticAberration, 0);
        }
        
        // Blue channel shift
        ctx.globalCompositeOperation = 'multiply';
        ctx.fillStyle = 'rgb(0, 0, 255)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalCompositeOperation = 'screen';
        if (tempCtx) {
          ctx.drawImage(tempCanvas, 2 * beam.postProcessing.chromaticAberration, 0);
        }
        
        ctx.restore();
      }
      
      // 4. Vignette with film burn effect
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.width * 0.2,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.9
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(0.5, `rgba(0, 0, 0, ${beam.postProcessing.vignetteIntensity * 0.3})`);
      vignette.addColorStop(0.8, `rgba(0, 0, 0, ${beam.postProcessing.vignetteIntensity * 0.6})`);
      vignette.addColorStop(1, `rgba(0, 0, 0, ${beam.postProcessing.vignetteIntensity})`);
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 5. Film damage/dust particles
      if (Math.random() < 0.02) {
        const dustCount = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < dustCount; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const size = Math.random() * 2 + 0.5;
          
          ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.3})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // 6. Film flicker effect
      const flicker = Math.sin(beam.time * 0.3) * 0.02 + Math.random() * 0.01;
      ctx.fillStyle = `rgba(255, 255, 255, ${flicker})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 7. Subtle color grading
      ctx.save();
      ctx.globalCompositeOperation = 'overlay';
      ctx.globalAlpha = 0.1;
      
      // Warm highlights, cool shadows
      const colorGradeGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      colorGradeGradient.addColorStop(0, 'rgb(255, 240, 220)');
      colorGradeGradient.addColorStop(0.5, 'rgb(255, 255, 255)');
      colorGradeGradient.addColorStop(1, 'rgb(220, 230, 255)');
      ctx.fillStyle = colorGradeGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();
      
      // 8. Film scratches (occasional)
      if (Math.random() < 0.005) {
        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
        ctx.lineWidth = Math.random() * 2 + 0.5;
        ctx.beginPath();
        const scratchX = Math.random() * canvas.width;
        ctx.moveTo(scratchX, 0);
        ctx.lineTo(scratchX + (Math.random() - 0.5) * 20, canvas.height);
        ctx.stroke();
      }
    };
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, FilmGrain]);

  // Update progress
  const updateProgress = useCallback(() => {
    const audio = audioRef.current as HTMLAudioElement | null;
    if (audio && audio.duration) {
      const progress = (audio.currentTime / audio.duration) * 100;
      setAudioProgress(progress);
    }
  }, []);

  useEffect(() => {
    const cleanup = initCanvas();
    return cleanup;
  }, [initCanvas]);

  useEffect(() => {
    const audio = audioRef.current as HTMLAudioElement | null;
    if (audio) {
      const handleCanPlay = () => setIsPlaying(true);
      const handleError = (e: Event) => {
        console.error('Audio error:', e);
        setIsPlaying(false);
      };
      
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('timeupdate', updateProgress);
      
      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, [updateProgress]);

  const DemoOne = () => {
    return (
      <div className="flex flex-col gap-2 items-center justify-center w-screen text-white">
        <BrandScroller />
        <BrandScrollerReverse />
      </div>
    );
  };

  return (
    <div className="music-reactive-hero relative w-full h-full min-h-screen">
      {/* Sunhack Title Logo - Top Right */}
      <div className="absolute top-4 left-4 md:top-2 md:right-8 z-40">
        <Image 
          src="/SunhackTitle.png" 
          alt="Sunhack Title Logo" 
          width={220} 
          height={80} 
          className="w-24 h-auto sm:w-32 md:w-56 lg:w-64 xl:w-82 max-w-full object-contain drop-shadow-lg"
          priority
        />
      </div>
      <canvas ref={canvasRef} className="visualization-canvas" />
      {/* HWI Logo */}
      <div className="hwi-logo">
        <Image 
          src="/HWl2.svg" 
          alt="Hack With India Logo" 
          className="logo-image"
          width={60}
          height={60}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">SUNHACKS</span>
        </h1>
        <p className="hero-tagline">A joint initiative with </p>
        <h1 className="hero-title">
          <span className="title-line">Hack </span>
          <span className="title-line">With India</span>
        </h1>
        <p className="hero-subtitle">Where Innovation Begins – In collaboration with Hack with India.</p>
        <div className="hero-credit flex flex-col items-center gap-2">
          <a
            href="https://hackwithindia.in/About"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white text-white rounded-md font-semibold shadow-none bg-transparent hover:bg-white/10 transition text-center"
            style={{marginBottom: '0.5rem'}}
          >
            More about Hack With India
          </a>
        </div>
      </div>
      <div className="audio-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${audioProgress}%` }}
        />
      </div>
      {/* Brand Scroller as a separate full-width section at the very bottom, always in front */}
      <div className="absolute left-0 right-0 bottom-0 w-screen z-50 px-1 sm:px-4">
        <DemoOne />
      </div>
    </div>
  );
};