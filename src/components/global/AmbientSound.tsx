"use client";

import { useState, useRef, useEffect } from "react";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const sourceRef = useRef<AudioBufferSourceNode | null>(null);

  const initAudio = () => {
    if (audioCtxRef.current) return;
    
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const ctx = new AudioContext();
    audioCtxRef.current = ctx;

    // Create White Noise Buffer
    const bufferSize = 2 * ctx.sampleRate; // 2 seconds
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;
    sourceRef.current = whiteNoise;

    // Filters
    const bandpass = ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 400;
    bandpass.Q.value = 0.3;

    const lowpass = ctx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.value = 600;

    const gainNode = ctx.createGain();
    gainNode.gain.value = 0; // Start muted
    gainNodeRef.current = gainNode;

    // Connect
    whiteNoise.connect(bandpass);
    bandpass.connect(lowpass);
    lowpass.connect(gainNode);
    gainNode.connect(ctx.destination);

    whiteNoise.start();
  };

  const toggleSound = () => {
    if (!audioCtxRef.current) {
      initAudio();
    }
    
    const ctx = audioCtxRef.current!;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const gainNode = gainNodeRef.current!;
    const now = ctx.currentTime;

    if (isPlaying) {
      // Fade out
      gainNode.gain.cancelScheduledValues(now);
      gainNode.gain.setValueAtTime(gainNode.gain.value, now);
      gainNode.gain.linearRampToValueAtTime(0, now + 1);
      setIsPlaying(false);
    } else {
      // Fade in
      gainNode.gain.cancelScheduledValues(now);
      gainNode.gain.setValueAtTime(gainNode.gain.value, now);
      gainNode.gain.linearRampToValueAtTime(0.06, now + 2);
      setIsPlaying(true);
    }
  };

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      className="fixed top-6 right-6 z-[10000] text-xs font-mono tracking-widest text-muted hover:text-accent-primary transition-colors duration-300"
    >
      ⟡ SOUND {isPlaying ? "ON" : "OFF"}
    </button>
  );
}
