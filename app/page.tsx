"use client"

import { useTheme } from 'next-themes';
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}