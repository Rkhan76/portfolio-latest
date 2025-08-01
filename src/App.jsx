import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import Hero from '@/components/sections/Hero'
import Experience from '@/components/sections/Experience'
import Education from '@/components/sections/Education'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 poppins-regular">
        <header className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 z-50 flex justify-center">
          <div className="w-full md:w-11/12 flex h-16 items-center justify-between max-w-7xl md:px-0 px-6">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              MRK.
            </span>
            <div className="flex items-center gap-6">
              <nav className="hidden md:flex gap-8">
                <a
                  href="#about"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  About
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
                </a>
                <a
                  href="#experience"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  Experience
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
                </a>
                <a
                  href="#education"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  Education
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
                </a>
                <a
                  href="#skills"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  Skills
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
                </a>
                <a
                  href="#projects"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  Projects
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
                </a>
                <a
                  href="#contact"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  Contact
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></span>
                </a>
              </nav>
              <ModeToggle />
            </div>
          </div>
        </header>

        <main className="pt-16 w-full flex justify-center items-center">
          <div className="w-full md:w-11/12 max-w-7xl mx-auto md:px-0 px-6">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>

        <footer className="border-t border-border/40 bg-muted/30">
          <div className="container py-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                MRK.
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 Mohd Rakhshan Khan. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
