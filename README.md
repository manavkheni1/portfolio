# Manav Kheni - Personal Portfolio

This is a personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion. It features a custom "Neural Noir + Phase Shift" aesthetic, complete with a canvas-based neural network background, text glitch effects, and smooth scroll animations.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter (Sans-serif) & JetBrains Mono (Monospace)
- **Deployment**: Vercel

## Features

- **Neural Network Background**: Custom HTML5 Canvas implementation rendering floating nodes that connect based on proximity.
- **Glitch Effects**: Custom CSS keyframe animations applied to headings and links on hover/load to create a cyberpunk-inspired glitch aesthetic.
- **Interactive Counters**: Animated statistics counting up when scrolled into view.
- **Responsive Layout**: Fully adaptive design that works seamlessly across mobile, tablet, and desktop viewports.
- **Smooth Navigation**: Sticky navbar with smooth scrolling to sections.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Contact Form
The contact form currently points to a Formspree endpoint placeholder. To make it functional:
1. Create a free account at [Formspree](https://formspree.io/)
2. Create a new form to get your endpoint URL.
3. Update the `action` attribute in `src/components/sections/Contact.tsx` with your new Formspree URL.

### Modifying the Canvas
The background animation can be tweaked in `src/components/ui/NeuralCanvas.tsx`:
- `numNodes`: Change the density of particles.
- `connectionDistance`: Adjust how close nodes need to be to form a line.
- `baseColor`: Change the RGB value of the nodes and lines.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

You can also deploy via the command line using:
```bash
npx vercel --prod
```
