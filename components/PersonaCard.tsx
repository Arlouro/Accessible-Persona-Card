import React, { useState, useRef, useEffect } from 'react';
import { Persona } from '../types';
import PersonaIllustration from './PersonaIllustration';

declare const html2canvas: (element: HTMLElement, options?: any) => Promise<HTMLCanvasElement>;
declare const jspdf: any;


interface PersonaCardProps {
  persona: Persona;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ persona }) => {
  // ======================================================================
  // == State Management                                                 ==
  // ======================================================================
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSoundscapePlaying, setIsSoundscapePlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [focusedSectionIndex, setFocusedSectionIndex] = useState(-1);
  const [focusedControlIndex, setFocusedControlIndex] = useState(0);

  // ======================================================================
  // == Refs for DOM Elements and State                                  ==
  // ======================================================================
  const cardRef = useRef<HTMLElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const downloadMenuRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const controlRefs = useRef<(HTMLButtonElement | null)[]>([]);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const soundscapeNodesRef = useRef<any>({});
  const frictionIntervalRef = useRef<number | null>(null);
  const keyboardTimeoutRef = useRef<number | null>(null);
  
  // ======================================================================
  // == Constants                                                        ==
  // ======================================================================
  const cardId = 'persona-card-content';
  const titleId = 'persona-title';
  const descriptionId = 'persona-description';
  const controlsDescriptionId = 'controls-description';
  const MIN_ZOOM = 0.8;
  const MAX_ZOOM = 2.0;
  const ZOOM_STEP = 0.1;

  // ======================================================================
  // == Effects                                                ==
  // ======================================================================

  // Focus heading of the currently focused section
  useEffect(() => {
    if (focusedSectionIndex !== -1 && headingRefs.current[focusedSectionIndex]) {
      headingRefs.current[focusedSectionIndex]?.focus({ preventScroll: true });
    }
  }, [focusedSectionIndex]);

  // Clean up speech synthesis and soundscape on component unmount
  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window && speechSynthesis.speaking) {
        speechSynthesis.cancel();
      }
      stopSoundscape();
    };
  }, []);

  // Close download menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target as Node)) {
        setIsDownloadMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // ======================================================================
  // == Core Logic and Event Handlers                                    ==
  // ======================================================================

  // ----------------------------------------------------------------------
  // -- Accessibility Handlers (Contrast, Text-to-Speech)
  // ----------------------------------------------------------------------
  const handleToggleContrast = () => {
    const newContrastState = !isHighContrast;
    setIsHighContrast(newContrastState);
    setAnnouncement(
      newContrastState
        ? 'High contrast mode enabled.'
        : 'High contrast mode disabled.'
    );
  };
  
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
        setAnnouncement('Sorry, your browser does not support text-to-speech.');
        return;
    }

    if (isSpeaking) {
        speechSynthesis.cancel();
        setIsSpeaking(false);
        setAnnouncement('Audio playback stopped.');
    } else {
        const textToSpeak = [
            persona.title,
            ...persona.description.map(section => `${section.heading}. ${section.content}`)
        ].join('\n\n');

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(false);
            setAnnouncement('Audio playback finished.');
        };
        utterance.onerror = () => {
            setIsSpeaking(false);
            setAnnouncement('An error occurred during audio playback.');
        };

        speechSynthesis.speak(utterance);
        setAnnouncement('Playing audio version of the persona.');
    }
  };

  // ----------------------------------------------------------------------
  // -- Emotional Soundscape Logic
  // ----------------------------------------------------------------------
  const stopSoundscape = () => {
    if (frictionIntervalRef.current) {
      clearInterval(frictionIntervalRef.current);
      frictionIntervalRef.current = null;
    }
     if (keyboardTimeoutRef.current) {
      clearTimeout(keyboardTimeoutRef.current);
      keyboardTimeoutRef.current = null;
    }
    if (audioContextRef.current && soundscapeNodesRef.current) {
        Object.values(soundscapeNodesRef.current).forEach((node: any) => {
            if (node.stop) node.stop();
            if (node.disconnect) node.disconnect();
        });
        soundscapeNodesRef.current = {};
        audioContextRef.current.close().then(() => {
            audioContextRef.current = null;
        });
    }
    setIsSoundscapePlaying(false);
  };

const handleToggleSoundscape = () => {
    if (isSoundscapePlaying) {
        stopSoundscape();
        setAnnouncement('Emotional soundscape stopped.');
        return;
    }

    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioContextRef.current = context;
    const now = context.currentTime;
    const soundscapeDuration = 55; 

    // --- Create Audio Nodes ---

    // Emotional Layer
    const focusPad = context.createOscillator();
    focusPad.type = 'sine';
    focusPad.frequency.setValueAtTime(80, now);
    const clarityPad = context.createOscillator();
    clarityPad.type = 'triangle';
    clarityPad.frequency.setValueAtTime(440, now);
    const mainGain = context.createGain();
    mainGain.gain.setValueAtTime(0, now);
    mainGain.gain.linearRampToValueAtTime(0.15, now + 5);
    mainGain.gain.linearRampToValueAtTime(0, now + soundscapeDuration);

    const uneaseTone = context.createOscillator();
    uneaseTone.type = 'sawtooth';
    uneaseTone.frequency.setValueAtTime(221, now);
    const uneaseFilter = context.createBiquadFilter();
    uneaseFilter.type = 'lowpass';
    uneaseFilter.frequency.setValueAtTime(300, now);
    const uneaseGain = context.createGain();
    uneaseGain.gain.setValueAtTime(0, now + 12);
    uneaseGain.gain.linearRampToValueAtTime(0.05, now + 22);
    uneaseGain.gain.linearRampToValueAtTime(0, now + 45);

    // Identifiable Object Layer
    const computerHum = context.createOscillator();
    computerHum.type = 'sine';
    computerHum.frequency.setValueAtTime(50, now);
    const humGain = context.createGain();
    humGain.gain.setValueAtTime(0, now);
    humGain.gain.linearRampToValueAtTime(0.1, now + 3);
    humGain.gain.linearRampToValueAtTime(0.1, now + soundscapeDuration - 5);
    humGain.gain.linearRampToValueAtTime(0, now + soundscapeDuration);

    const screenReaderVoice = context.createOscillator();
    screenReaderVoice.type = 'sawtooth';
    const screenReaderFilter = context.createBiquadFilter();
    screenReaderFilter.type = 'bandpass';
    screenReaderFilter.Q.value = 20;
    const screenReaderGain = context.createGain();
    screenReaderGain.gain.setValueAtTime(0, now);

    const frictionNoise = context.createBufferSource();
    const frictionBufferSize = context.sampleRate * 2;
    const frictionBuffer = context.createBuffer(1, frictionBufferSize, context.sampleRate);
    const frictionOutput = frictionBuffer.getChannelData(0);
    for (let i = 0; i < frictionBufferSize; i++) frictionOutput[i] = Math.random() * 2 - 1;
    frictionNoise.buffer = frictionBuffer;
    frictionNoise.loop = true;
    const frictionGain = context.createGain();
    frictionGain.gain.setValueAtTime(0, now);

    const keyboardGain = context.createGain();

    // --- Connect Nodes ---
    focusPad.connect(mainGain);
    clarityPad.connect(mainGain);
    mainGain.connect(context.destination);
    
    uneaseTone.connect(uneaseFilter);
    uneaseFilter.connect(uneaseGain);
    uneaseGain.connect(context.destination);

    computerHum.connect(humGain);
    humGain.connect(context.destination);

    screenReaderVoice.connect(screenReaderFilter);
    screenReaderFilter.connect(screenReaderGain);
    screenReaderGain.connect(context.destination);

    frictionNoise.connect(frictionGain);
    frictionGain.connect(context.destination);

    keyboardGain.connect(context.destination);

    // --- Start Oscillators & Schedule Events ---
    focusPad.start(now);
    clarityPad.start(now);
    uneaseTone.start(now);
    computerHum.start(now);
    screenReaderVoice.start(now);
    frictionNoise.start(now);

    // Stage 2: Concern
    screenReaderGain.gain.linearRampToValueAtTime(0.08, now + 15);
    screenReaderGain.gain.linearRampToValueAtTime(0.08, now + 45);
    screenReaderGain.gain.linearRampToValueAtTime(0, now + 50);

    // Stage 3: Tension 
    frictionGain.gain.linearRampToValueAtTime(0.05, now + 25);
    frictionGain.gain.linearRampToValueAtTime(0.05, now + 40);
    frictionGain.gain.linearRampToValueAtTime(0, now + 48);

    const screenReaderLFO = context.createOscillator();
    screenReaderLFO.type = 'square';
    screenReaderLFO.frequency.setValueAtTime(0, now);
    screenReaderLFO.frequency.setValueAtTime(8, now + 28);
    screenReaderLFO.frequency.setValueAtTime(0, now + 40);
    screenReaderLFO.connect(screenReaderGain.gain);
    screenReaderLFO.start(now);

    // Stage 4: Resolution
    clarityPad.frequency.linearRampToValueAtTime(442, now + soundscapeDuration - 5);


    const scheduleKeyClick = () => {
        if (!audioContextRef.current) return;
        const time = audioContextRef.current.currentTime;
        if (time > soundscapeDuration - 2) {
            if (keyboardTimeoutRef.current) clearTimeout(keyboardTimeoutRef.current);
            return;
        }

        let volume = 0;
        let nextClickDelay = 200;

        if (time >= 2 && time < 14) { // Stage 1: Focus
            volume = 0.07;
            nextClickDelay = 170 + Math.random() * 60;
        } else if (time >= 14 && time < 25) { // Stage 2: Concern
            volume = (Math.random() > 0.3) ? 0.05 : 0;
            nextClickDelay = 250 + Math.random() * 200;
        } else if (time >= 25 && time < 45) { // Stage 3: Tension
            volume = (Math.random() > 0.6) ? 0.04 : 0;
            nextClickDelay = 300 + Math.random() * 500;
        } else if (time >= 45) { // Stage 4: Resolution
            volume = 0.08;
            nextClickDelay = 150 + Math.random() * 50;
        }

        if (volume > 0) {
            const clickEnv = context.createGain();
            clickEnv.connect(keyboardGain);
            const clickOsc = context.createOscillator();
            clickOsc.type = 'square';
            clickOsc.connect(clickEnv);
            
            clickEnv.gain.setValueAtTime(volume, time);
            clickEnv.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
            clickOsc.frequency.setValueAtTime(1500 + Math.random() * 500, time);
            
            clickOsc.start(time);
            clickOsc.stop(time + 0.05);
        }
        
        keyboardTimeoutRef.current = setTimeout(scheduleKeyClick, nextClickDelay);
    };

    scheduleKeyClick();

    soundscapeNodesRef.current = { focusPad, clarityPad, mainGain, uneaseTone, uneaseFilter, uneaseGain, computerHum, humGain, screenReaderVoice, screenReaderFilter, screenReaderGain, screenReaderLFO, frictionNoise, frictionGain, keyboardGain };
    setIsSoundscapePlaying(true);
    setAnnouncement('Playing emotional soundscape.');

    setTimeout(() => {
        if (audioContextRef.current) {
            stopSoundscape();
            setAnnouncement('Emotional soundscape finished.');
        }
    }, soundscapeDuration * 1000);
  };
  
  // ----------------------------------------------------------------------
  // -- Zoom Functionality
  // ----------------------------------------------------------------------
  const handleZoomIn = () => {
    setZoomLevel((prevZoom) => {
      const currentZoom = Math.round(prevZoom * 10) / 10;
      const newZoom = Math.min(MAX_ZOOM, currentZoom + ZOOM_STEP);
      if (newZoom !== currentZoom) {
        setAnnouncement(`Zoom level increased to ${Math.round(newZoom * 100)}%.`);
      }
      return newZoom;
    });
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoom) => {
      const currentZoom = Math.round(prevZoom * 10) / 10;
      const newZoom = Math.max(MIN_ZOOM, currentZoom - ZOOM_STEP);
       if (newZoom !== currentZoom) {
        setAnnouncement(`Zoom level decreased to ${Math.round(newZoom * 100)}%.`);
      }
      return newZoom;
    });
  };

  const handleResetZoom = () => {
    if (zoomLevel !== 1) {
      setZoomLevel(1);
      setAnnouncement('Zoom level reset to 100%.');
    }
  };
  
  // ----------------------------------------------------------------------
  // -- Keyboard Navigation
  // ----------------------------------------------------------------------
  const handleDescriptionKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const sectionsCount = persona.description.length;
    if (sectionsCount === 0 || focusedSectionIndex === -1) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      let newIndex;
      if (e.key === 'ArrowDown') {
        newIndex = (focusedSectionIndex + 1) % sectionsCount;
      } else { // ArrowUp
        newIndex = (focusedSectionIndex - 1 + sectionsCount) % sectionsCount;
      }
      setFocusedSectionIndex(newIndex);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      paragraphRefs.current[focusedSectionIndex]?.focus();
    }
  };
  
  const handleDescriptionFocus = () => {
    if (focusedSectionIndex === -1 && persona.description.length > 0) {
      setFocusedSectionIndex(0);
    }
  };
  
  const handleDescriptionBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setFocusedSectionIndex(-1);
    }
  };
  
  const handleControlsKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const controls = controlRefs.current.filter(Boolean) as HTMLButtonElement[];
    if (!controls.length) return;
    const count = controls.length;

    if (e.key === 'Enter' && document.activeElement === controlsRef.current) {
        e.preventDefault();
        setFocusedControlIndex(0);
        controls[0]?.focus();
        return;
    }

    let newIndex = focusedControlIndex;
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        newIndex = (focusedControlIndex + 1) % count;
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        newIndex = (focusedControlIndex - 1 + count) % count;
    } else if (e.key === 'Home') {
        e.preventDefault();
        newIndex = 0;
    } else if (e.key === 'End') {
        e.preventDefault();
        newIndex = count - 1;
    }

    if (newIndex !== focusedControlIndex) {
        setFocusedControlIndex(newIndex);
        controls[newIndex]?.focus();
    }
  };

  // ----------------------------------------------------------------------
  // -- Download Functionality
  // ----------------------------------------------------------------------
  const handleDownload = async (format: 'pdf' | 'jpg' | 'png') => {
    if (!cardRef.current || isDownloading) return;

    setIsDownloading(true);
    setAnnouncement(`Preparing download as ${format.toUpperCase()}...`);
    setIsDownloadMenuOpen(false);

    const controlsElement = controlsRef.current;
    if (!controlsElement) {
        setIsDownloading(false);
        return;
    }

    const originalDisplay = controlsElement.style.display;
    controlsElement.style.display = 'none';

    try {
      await new Promise(resolve => setTimeout(resolve, 50));

      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: isHighContrast ? '#000' : (document.documentElement.classList.contains('dark') ? '#222222' : '#f7f7f7'),
      });

      if (format === 'pdf') {
        const { jsPDF } = jspdf;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height]
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('persona-card.pdf');
      } else {
        const link = document.createElement('a');
        const mimeType = format === 'jpg' ? 'image/jpeg' : 'image/png';
        link.href = canvas.toDataURL(mimeType, 0.9);
        link.download = `persona-card.${format}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      setAnnouncement(`Download started as ${format.toUpperCase()}.`);
    } catch (error) {
      console.error('Download failed:', error);
      setAnnouncement('Sorry, the download could not be completed.');
    } finally {
      controlsElement.style.display = originalDisplay;
      setIsDownloading(false);
    }
  };

  // ======================================================================
  // == Dynamic Styling and Content                                      ==
  // ======================================================================
  const zoomButtonBaseClasses = `p-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`;
  const zoomButtonHighContrastClasses = `bg-yellow-300 text-black ring-yellow-300 ring-offset-black enabled:hover:bg-yellow-400`;
  const zoomButtonDefaultClasses = `bg-[#BBBBBB] text-[#222222] ring-[#EE6677] ring-offset-[#f7f7f7] dark:ring-offset-[#222222] enabled:hover:bg-[#999999] dark:bg-[#555555] dark:text-white dark:enabled:hover:bg-[#777777]`;
  
  const baseTitleSize = 2.25; 
  const baseHeadingSize = 1.25; 
  const baseParagraphSize = 1.125;

  // ======================================================================
  // == Component Rendering (JSX)                                        ==
  // ======================================================================
  return (
    <article
      id={cardId}
      ref={cardRef}
      className={`max-w-7xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col transform hover:scale-[1.01] transition-all duration-300 ease-in-out ${
        isHighContrast ? 'bg-black' : 'bg-[#f7f7f7] dark:bg-[#222222]'
      }`}
      aria-labelledby={titleId}
    >
      <span id={controlsDescriptionId} className="sr-only">
          Press Enter to access the toolbar. Use arrow keys to navigate between tools.
      </span>
      <div
          ref={controlsRef}
          role="toolbar"
          aria-label="Accessibility Controls"
          aria-describedby={controlsDescriptionId}
          onKeyDown={handleControlsKeyDown}
          tabIndex={0}
          className={`p-6 border-b ${isHighContrast ? 'border-yellow-300' : 'border-[#BBBBBB] dark:border-[#555555]'} flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 outline-none rounded-t-2xl focus-visible:ring-4 ${ isHighContrast ? 'focus-visible:ring-yellow-300 focus-visible:ring-offset-black' : 'focus-visible:ring-[#EE6677] focus-visible:ring-offset-[#f7f7f7] dark:focus-visible:ring-offset-[#222222]'}`}
      >
        <div className="flex flex-wrap items-center gap-4">
          <button
              ref={(el) => { if(el) controlRefs.current[0] = el; }}
              type="button"
              tabIndex={-1}
              onClick={handleToggleContrast}
              aria-pressed={isHighContrast}
              aria-controls={cardId}
              title={isHighContrast ? 'Switch to default view' : 'Enable high contrast mode'}
              className={`flex items-center justify-center self-start px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  isHighContrast
                  ? 'bg-yellow-300 text-black ring-yellow-300 ring-offset-black hover:bg-yellow-400'
                  : 'bg-[#4477AA] text-white ring-[#EE6677] ring-offset-[#f7f7f7] dark:ring-offset-[#222222] hover:bg-[#004488] dark:bg-[#66CCEE] dark:text-[#222222] dark:hover:bg-[#44BBEE]'
              }`}
          >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9a9 9 0 01-18 0 9 9 0 0118 0z" />
              </svg>
              {isHighContrast ? 'Default View' : 'High Contrast'}
          </button>
            <button
              ref={(el) => { if(el) controlRefs.current[1] = el; }}
              tabIndex={-1}
              type="button"
              onClick={handleToggleSpeech}
              aria-pressed={isSpeaking}
              title={isSpeaking ? 'Stop audio playback' : 'Play audio version of the persona'}
              className={`flex items-center justify-center self-start px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  isHighContrast
                  ? 'bg-yellow-300 text-black ring-yellow-300 ring-offset-black hover:bg-yellow-400'
                  : 'bg-[#4477AA] text-white ring-[#EE6677] ring-offset-[#f7f7f7] dark:ring-offset-[#222222] hover:bg-[#004488] dark:bg-[#66CCEE] dark:text-[#222222] dark:hover:bg-[#44BBEE]'
              }`}
          >
              {isSpeaking ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 5a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V5z" clipRule="evenodd" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
              )}
              {isSpeaking ? 'Stop Audio Format' : 'Play Audio Format'}
          </button>
          <button
              ref={(el) => { if(el) controlRefs.current[2] = el; }}
              tabIndex={-1}
              type="button"
              onClick={handleToggleSoundscape}
              aria-pressed={isSoundscapePlaying}
              title={isSoundscapePlaying ? 'Stop emotional soundscape' : 'Play emotional soundscape'}
              className={`flex items-center justify-center self-start px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  isHighContrast
                  ? 'bg-yellow-300 text-black ring-yellow-300 ring-offset-black hover:bg-yellow-400'
                  : 'bg-[#4477AA] text-white ring-[#EE6677] ring-offset-[#f7f7f7] dark:ring-offset-[#222222] hover:bg-[#004488] dark:bg-[#66CCEE] dark:text-[#222222] dark:hover:bg-[#44BBEE]'
              }`}
          >
              {isSoundscapePlaying ? (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 5a1 1 0 011-1h8a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V5z" clipRule="evenodd" />
                  </svg>
              ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                  </svg>
              )}
              Soundscape
          </button>
            <div className="relative" ref={downloadMenuRef}>
                <button
                    ref={(el) => { if(el) controlRefs.current[3] = el; }}
                    tabIndex={-1}
                    id="download-button"
                    type="button"
                    onClick={() => setIsDownloadMenuOpen(prev => !prev)}
                    disabled={isDownloading}
                    aria-haspopup="true"
                    aria-expanded={isDownloadMenuOpen}
                    title="Download persona card"
                    className={`flex items-center justify-center self-start px-6 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-75 ${
                        isHighContrast
                        ? 'bg-yellow-300 text-black ring-yellow-300 ring-offset-black hover:bg-yellow-400'
                        : 'bg-[#4477AA] text-white ring-[#EE6677] ring-offset-[#f7f7f7] dark:ring-offset-[#222222] hover:bg-[#004488] dark:bg-[#66CCEE] dark:text-[#222222] dark:hover:bg-[#44BBEE]'
                    }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {isDownloading ? 'Preparing...' : 'Download'}
                </button>
                {isDownloadMenuOpen && (
                    <div 
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="download-button"
                        className={`absolute z-10 top-full left-0 mt-2 w-40 origin-top-right rounded-md shadow-lg ring-1 ring-opacity-5 focus:outline-none transition-all duration-200 ease-in-out ${isHighContrast ? 'bg-black ring-yellow-300' : 'bg-white dark:bg-[#333333] ring-black'}`}
                    >
                        <div className="py-1" role="none">
                            <button onClick={() => handleDownload('pdf')} className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${isHighContrast ? 'text-yellow-300 hover:bg-yellow-300/10' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`} role="menuitem">as PDF</button>
                            <button onClick={() => handleDownload('jpg')} className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${isHighContrast ? 'text-yellow-300 hover:bg-yellow-300/10' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`} role="menuitem">as JPG</button>
                            <button onClick={() => handleDownload('png')} className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${isHighContrast ? 'text-yellow-300 hover:bg-yellow-300/10' : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'}`} role="menuitem">as PNG</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 text-base font-semibold transition-colors duration-300 ${isHighContrast ? 'text-white' : 'text-[#222222] dark:text-[#f7f7f7]'}`}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span id="zoom-label">Zoom</span>
            </div>
            <button
                ref={(el) => { if(el) controlRefs.current[4] = el; }}
                tabIndex={-1}
                onClick={handleZoomOut}
                disabled={zoomLevel <= MIN_ZOOM}
                aria-label="Zoom out"
                aria-describedby="zoom-label"
                title="Decrease text size"
                className={`${zoomButtonBaseClasses} ${isHighContrast ? zoomButtonHighContrastClasses : zoomButtonDefaultClasses}`}
            >
                <svg aria-hidden="true" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                </svg>
            </button>
            <button
                ref={(el) => { if(el) controlRefs.current[5] = el; }}
                tabIndex={-1}
                onClick={handleZoomIn}
                disabled={zoomLevel >= MAX_ZOOM}
                aria-label="Zoom in"
                aria-describedby="zoom-label"
                title="Increase text size"
                className={`${zoomButtonBaseClasses} ${isHighContrast ? zoomButtonHighContrastClasses : zoomButtonDefaultClasses}`}
            >
                 <svg aria-hidden="true" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 12h14" />
                </svg>
            </button>
              <button
                ref={(el) => { if(el) controlRefs.current[6] = el; }}
                tabIndex={-1}
                onClick={handleResetZoom}
                disabled={zoomLevel === 1}
                aria-label="Reset zoom to default"
                aria-describedby="zoom-label"
                title="Reset text size"
                className={`flex items-center px-5 py-2.5 rounded-lg text-base font-semibold transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                isHighContrast
                    ? 'bg-transparent text-yellow-300 ring-yellow-300 ring-offset-black enabled:hover:bg-yellow-300/10'
                    : 'bg-transparent text-[#222222] dark:text-[#f7f7f7] ring-[#EE6677] ring-offset-[#f7f7f7] dark:ring-offset-[#222222] enabled:hover:bg-[#BBBBBB]/30 dark:enabled:hover:bg-[#BBBBBB]/30'
                }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
                Reset
            </button>
        </div>
    </div>

      <div className="p-6">
        <h2
          id={titleId}
          tabIndex={0}
          className={`font-bold mb-6 transition-colors duration-300 rounded-md focus:outline-none ${
              isHighContrast
              ? 'text-yellow-300 focus:ring-2 focus:ring-yellow-300 ring-offset-2 ring-offset-black'
              : 'text-[#222222] dark:text-[#f7f7f7] focus:ring-2 focus:ring-[#EE6677] ring-offset-2 ring-offset-[#f7f7f7] dark:ring-offset-[#222222]'
          }`}
          style={{ 
            fontSize: `${baseTitleSize * zoomLevel}rem`,
            transition: 'font-size 0.3s ease-in-out'
          }}
        >
          {persona.title}
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <PersonaIllustration isHighContrast={isHighContrast} />
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <div 
              id={descriptionId}
              tabIndex={0}
              onKeyDown={handleDescriptionKeyDown}
              onFocus={handleDescriptionFocus}
              onBlur={handleDescriptionBlur}
              aria-label="Persona description. Use arrow keys to navigate sections and Enter to read content."
              className="space-y-8 outline-none rounded-md"
            >
            {persona.description.map((section, index) => (
                <div key={index}>
                <h3
                    ref={(el) => { headingRefs.current[index] = el; }}
                    id={`section-heading-${index}`}
                    tabIndex={-1}
                    className={`font-semibold mb-2 transition-all duration-300 rounded-md focus:outline-none ${
                      isHighContrast
                        ? 'text-yellow-300'
                        : 'text-[#222222] dark:text-[#f7f7f7]'
                    } ${
                      focusedSectionIndex === index 
                        ? isHighContrast 
                          ? 'ring-2 ring-yellow-300 ring-offset-2 ring-offset-black'
                          : 'ring-2 ring-[#EE6677] ring-offset-2 ring-offset-[#f7f7f7] dark:ring-offset-[#222222]' 
                        : ''
                    }`}
                    style={{ 
                        fontSize: `${baseHeadingSize * zoomLevel}rem`,
                        transition: 'font-size 0.3s ease-in-out'
                    }}
                >
                    {section.heading}
                </h3>
                <p
                    ref={(el) => { paragraphRefs.current[index] = el; }}
                    tabIndex={-1}
                    className={`leading-loose transition-colors duration-300 focus:outline-none rounded-md opacity-90 ${
                    isHighContrast
                        ? 'text-white focus:ring-2 focus:ring-yellow-300 ring-offset-2 ring-offset-black'
                        : 'text-[#222222] dark:text-[#f7f7f7] focus:ring-2 focus:ring-[#EE6677] ring-offset-2 ring-offset-[#f7f7f7] dark:ring-offset-[#222222]'
                    }`}
                    style={{ 
                      fontSize: `${baseParagraphSize * zoomLevel}rem`,
                      transition: 'font-size 0.3s ease-in-out'
                    }}
                >
                    {section.content}
                </p>
                </div>
            ))}
            </div>
            
            <div role="status" aria-live="polite" className="sr-only">
              {announcement}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PersonaCard;