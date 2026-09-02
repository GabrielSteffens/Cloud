import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2, Move } from 'lucide-react';

interface LightboxContextType {
  openImage: (src: string, alt?: string) => void;
  closeImage: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt?: string } | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const openImage = (src: string, alt?: string) => {
    if (src) {
      setActiveImage({ src, alt });
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const closeImage = () => {
    setActiveImage(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 4.5));
  };

  const zoomOut = () => {
    setScale(prev => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const setFixedScale = (targetScale: number) => {
    setScale(targetScale);
    if (targetScale === 1) setPosition({ x: 0, y: 0 });
  };

  // Keyboard navigation (+, -, 0, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeImage) return;
      if (e.key === 'Escape') {
        closeImage();
      } else if (e.key === '+' || e.key === '=') {
        zoomIn();
      } else if (e.key === '-') {
        zoomOut();
      } else if (e.key === '0') {
        resetZoom();
      }
    };
    if (activeImage) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  };

  // Dragging / Panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(2);
    } else if (scale === 2) {
      setScale(3.5);
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <LightboxContext.Provider value={{ openImage, closeImage }}>
      {children}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/94 backdrop-blur-md flex flex-col items-center justify-center animate-fadeIn select-none overflow-hidden"
          onClick={closeImage}
          onWheel={handleWheel}
        >
          {/* Top Bar Controls */}
          <div 
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Badge */}
            {activeImage.alt ? (
              <div className="max-w-md sm:max-w-xl bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-lg border border-slate-800 text-xs font-semibold text-slate-200 shadow-xl flex items-center gap-2">
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="truncate">{activeImage.alt}</span>
              </div>
            ) : <div />}

            {/* Zoom Controls Panel */}
            <div className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md p-1.5 rounded-xl border border-slate-800 shadow-xl">
              <button
                onClick={zoomOut}
                disabled={scale <= 1}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Reduzir Zoom (-)"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-1 px-1">
                {[1, 1.5, 2, 3, 4].map(s => (
                  <button
                    key={s}
                    onClick={() => setFixedScale(s)}
                    className={`px-2 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                      scale === s 
                        ? 'bg-cyan-500 text-slate-950 shadow' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

              <button
                onClick={zoomIn}
                disabled={scale >= 4.5}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Aumentar Zoom (+)"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-slate-800 mx-1" />

              <button
                onClick={resetZoom}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                title="Resetar Zoom (0)"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={closeImage}
                className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors ml-1"
                title="Fechar (Esc)"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Interactive Image Viewport */}
          <div 
            className="w-full h-full flex items-center justify-center p-4 sm:p-10 overflow-hidden cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleClick}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt || 'Imagem em Tela Cheia'}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                maxHeight: scale === 1 ? '85vh' : 'none',
                maxWidth: scale === 1 ? '92vw' : 'none'
              }}
              className="object-contain rounded-xl shadow-2xl border border-slate-800/80 pointer-events-auto"
              draggable={false}
            />
          </div>

          {/* Bottom Bar Info / Tips */}
          <div 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-800 text-[11px] text-slate-300 shadow-xl flex items-center gap-3 font-medium pointer-events-none"
          >
            <span className="flex items-center gap-1 text-cyan-400 font-mono font-bold">
              <Move className="w-3.5 h-3.5" /> {scale.toFixed(1)}x
            </span>
            <span className="text-slate-600">•</span>
            <span>Use o scroll do mouse ou selecione os botões de <strong>1x</strong> a <strong>4x</strong></span>
            <span className="text-slate-600">•</span>
            <span>Arraste para mover</span>
            <span className="text-slate-600">•</span>
            <span>Duplo clique alterna zoom</span>
          </div>
        </div>
      )}
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
