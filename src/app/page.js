// app/page.jsx or components/ThemeWrapper.jsx

'use client'

import { useState, useEffect } from 'react'
import { ThemeProvider } from '@/components/contaxt/themeContaxt'
import Hero from '@/components/Hero'

export default function Home() {
  const [ThemeMode, setThemeMode] = useState('dark')

  const darkTheme = () => setThemeMode('dark')
  const lightTheme = () => setThemeMode('light')

  useEffect(() => {
    const html = document.querySelector('html')
    html.classList.remove('light', 'dark')
    html.classList.add(ThemeMode)
  }, [ThemeMode])

  return (
    <ThemeProvider value={{ ThemeMode, darkTheme, lightTheme }}>
      <Hero />
    </ThemeProvider>
  )
}
