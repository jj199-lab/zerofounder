# ZeroFounder

ZeroFounder is a lightweight AI co-founder demo that helps solo builders turn rough ideas into launch-ready plans.

## What it does

The app gives builders a fast path from a rough concept to a structured launch plan. Users describe their idea, choose a focus area, and receive a simple plan with positioning, MVP, validation, and launch steps.

## Why it matters

Ideas often get lost when founders jump between inspiration, execution, and outreach. ZeroFounder keeps the first spark organized so the next move is clearer.

## Current experience

- Guided idea input with contextual suggestions
- A generated launch-plan view that updates in place
- Local persistence so your last idea and plan stay available on refresh
- A polished, minimal interface built with Next.js

## Project structure

- app/page.tsx contains the main experience
- app/layout.tsx defines the global layout
- app/globals.css holds the styling
- components/IdeaForm.tsx handles the idea input flow
- components/ResultsPanel.tsx displays the generated launch plan

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

```bash
git clone https://github.com/jj199-lab/zerofounder.git
cd zerofounder
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Build

```bash
npm run build
```
