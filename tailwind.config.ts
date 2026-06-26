import type { Config } from "tailwindcss";

/**
 * Design system unificado — "Obsidian Flux / Charcoal Ember"
 * Fuente única de verdad para color, tipografía, spacing y radios.
 * Reemplaza las 7 configuraciones duplicadas e inconsistentes de los mockups.
 * Acento oficial: Coral / Naranja (#ff6222).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- Base / superficies (Charcoal Ember) ---
        background: "#141312",
        surface: "#141312",
        "surface-dim": "#141312",
        "surface-bright": "#3b3937",
        "surface-container-lowest": "#0f0e0d",
        "surface-container-low": "#1d1b1a",
        "surface-container": "#211f1e",
        "surface-container-high": "#2b2a28",
        "surface-container-highest": "#363433",
        "surface-variant": "#363433",
        "surface-tint": "#ffb49b",
        "inverse-surface": "#e6e2df",
        "inverse-on-surface": "#32302f",

        // --- Texto / contenido ---
        "on-background": "#e6e2df",
        "on-surface": "#e6e2df",
        "on-surface-variant": "#cbc5c2",
        outline: "#958f8b",
        "outline-variant": "#494441",

        // --- Acento primario (Coral / Ember) ---
        primary: "#ffb49b",
        "on-primary": "#5a1900",
        "primary-container": "#ff6222",
        "on-primary-container": "#380d00",
        "inverse-primary": "#a63300",
        "primary-fixed": "#ffdbce",
        "primary-fixed-dim": "#ffb49b",
        "on-primary-fixed": "#380d00",
        "on-primary-fixed-variant": "#802400",

        // --- Acento secundario (Ámbar) ---
        secondary: "#ffb779",
        "on-secondary": "#492900",
        "secondary-container": "#895100",
        "on-secondary-container": "#ffdcbe",
        "secondary-fixed": "#ffdcbe",
        "secondary-fixed-dim": "#ffb779",
        "on-secondary-fixed": "#2b1700",
        "on-secondary-fixed-variant": "#683d00",

        // --- Acento terciario (Arena) ---
        tertiary: "#d9c5a0",
        "on-tertiary": "#3d2e16",
        "tertiary-container": "#57442a",
        "on-tertiary-container": "#241a00",
        "tertiary-fixed": "#ffdcbb",
        "tertiary-fixed-dim": "#d9c5a0",
        "on-tertiary-fixed": "#241a00",
        "on-tertiary-fixed-variant": "#57442a",

        // --- Estados ---
        error: "#ffb4ab",
        "on-error": "#690005",
        "error-container": "#93000a",
        "on-error-container": "#ffdad6",
        success: "#86efac",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.5rem",
        full: "9999px",
      },
      spacing: {
        unit: "4px",
        gutter: "24px",
        "container-max": "1280px",
        "margin-mobile": "16px",
        "margin-desktop": "48px",
        "stack-sm": "12px",
        "stack-md": "24px",
        "stack-lg": "48px",
        "stack-xl": "80px",
      },
      maxWidth: {
        "container-max": "1280px",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        // Aliases semánticos del design system (todos Geist)
        "display-lg": ["var(--font-geist)"],
        "display-lg-mobile": ["var(--font-geist)"],
        "headline-xl": ["var(--font-geist)"],
        "headline-lg": ["var(--font-geist)"],
        "body-lg": ["var(--font-geist)"],
        "body-md": ["var(--font-geist)"],
        "label-md": ["var(--font-geist)"],
        "label-sm": ["var(--font-geist)"],
      },
      fontSize: {
        "display-lg": [
          "64px",
          { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg-mobile": [
          "40px",
          { lineHeight: "48px", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-xl": [
          "36px",
          { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "headline-lg": [
          "28px",
          { lineHeight: "36px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "28px", letterSpacing: "0em", fontWeight: "400" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" },
        ],
        "label-md": [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.05em", fontWeight: "500" },
        ],
        "label-sm": [
          "12px",
          { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "500" },
        ],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 98, 34, 0.25)",
        "glow-sm": "0 0 15px rgba(255, 180, 155, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
