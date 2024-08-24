"use client"

import { useTheme } from 'next-themes';
import Image from "next/image";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      Landing page
    </div>
  );
}