'use client'

import { useEffect, useState } from 'react';

interface ThumbnailProps {
  cmd: string;
}

export default function Thumbnail({ cmd }: ThumbnailProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getImagePath = () => {
    const basePath = `/${cmd}`;
    return isDarkMode ? `${basePath}-b.png` : `${basePath}-w.png`;
  };

  return (
    <div 
      className="thumbnail"
      style={{
        backgroundImage: `url(${getImagePath()})`
      }}
    />
  );
} 