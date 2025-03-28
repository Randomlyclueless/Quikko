"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"

interface VantaBackgroundProps {
  children: React.ReactNode
  effect?: "waves" | "dots" | "birds" | "net" | "cells"
  options?: Record<string, any>
}

export default function VantaBackground({ children, effect = "dots", options = {} }: VantaBackgroundProps) {
  const [vantaEffect, setVantaEffect] = useState<any>(null)
  const [vantaLoaded, setVantaLoaded] = useState(false)
  const vantaRef = useRef<HTMLDivElement>(null)

  // Store options in a ref to prevent effect re-runs
  const optionsRef = useRef(options)
  const effectRef = useRef(effect)

  useEffect(() => {
    // Only update refs when props change
    optionsRef.current = options
    effectRef.current = effect
  }, [options, effect])

  useEffect(() => {
    if (!vantaLoaded || !vantaRef.current) return

    // Clean up previous effect
    if (vantaEffect) {
      vantaEffect.destroy()
    }

    // Default options
    const defaultOptions = {
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
    }

    // Effect-specific default options
    const effectOptions: Record<string, any> = {
      dots: {
        color: "#5000ca",
        color2: "#ff8c00",
        backgroundColor: "#ffffff",
        size: 3,
        spacing: 35,
      },
      waves: {
        color: "#5000ca",
        shininess: 30,
        waveHeight: 15,
        waveSpeed: 0.75,
      },
      birds: {
        backgroundColor: "#ffffff",
        color1: "#5000ca",
        color2: "#ff8c00",
        colorMode: "variance",
        quantity: 3,
        birdSize: 1,
      },
      net: {
        color: "#5000ca",
        backgroundColor: "#ffffff",
        points: 10,
        maxDistance: 20,
      },
      cells: {
        color1: "#5000ca",
        color2: "#ff8c00",
        size: 2,
      },
    }

    // Merge options
    const mergedOptions = {
      ...defaultOptions,
      ...effectOptions[effectRef.current],
      ...optionsRef.current,
    }

    // Apply effect
    if (window.VANTA) {
      const currentEffect = effectRef.current.toUpperCase()
      const effectFunction = window.VANTA[currentEffect]
      if (effectFunction) {
        const newEffect = effectFunction(mergedOptions)
        setVantaEffect(newEffect)
      }
    }

    // Cleanup function
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [vantaLoaded]) // Only depend on vantaLoaded

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        onLoad={() => {
          // Load Vanta effects sequentially
          const loadVantaEffects = async () => {
            try {
              await import("vanta/dist/vanta.dots.min")
              await import("vanta/dist/vanta.waves.min")
              await import("vanta/dist/vanta.birds.min")
              await import("vanta/dist/vanta.net.min")
              await import("vanta/dist/vanta.cells.min")
              setVantaLoaded(true)
            } catch (err) {
              console.error("Failed to load Vanta effects:", err)
            }
          }

          loadVantaEffects()
        }}
      />
      <div ref={vantaRef} className="relative">
        {children}
      </div>
    </>
  )
}

