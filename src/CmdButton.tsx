'use client';

import React, { useState, useRef } from 'react';

interface CmdButtonProps {
  cmd: string;
  className: string;
}

export default function CmdButton({ cmd, className }: CmdButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  const handleCopy = async () => {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = cmd;
      
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      if (successful) {
        setCopied(true);
        setIsExiting(false);
        
        setTimeout(() => {
          setIsExiting(true);
        }, 1800);
        
        setTimeout(() => {
          setCopied(false);
          setIsExiting(false);
        }, 2000);
      }
      
      document.body.removeChild(textArea);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={buttonRef}
        className="relative overflow-hidden rounded-xl bg-secondary p-2 cursor-pointer transition-all duration-200 text-center"
        onClick={handleCopy}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-10">{cmd}</span>
        <div
          className="pointer-events-none absolute -inset-px transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(100px circle at ${position.x}px ${position.y}px, rgba(0,98,255,1), transparent 40%)`,
          }}
        />
      </div>
      {copied && (
        <div className={`absolute -top-12 left-8 transform ${isExiting ? 'animate-fade-out' : 'animate-fade-in'}`}>
          <div className="bg-green-500 text-white px-3 py-2 rounded-lg text-sm shadow-lg whitespace-nowrap">
            Copié!
          </div>
          <div className="absolute -bottom-1 left-4 w-2 h-2 bg-green-500 transform rotate-45"></div>
        </div>
      )}
    </div>
  );
}