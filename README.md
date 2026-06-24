# ZeroFounder

ZeroFounder is an AI co-founder companion that helps solo builders turn rough ideas into launch-ready plans with persistent memory on 0G.

## Demo

Live demo: _add your deployed URL here_  
Video demo: _add your video URL here_

## Screenshots

> Add screenshots of the UI here once you have them.

### Main flow
![ZeroFounder main screen](./public/screenshot-main.png)

### Results panel
![ZeroFounder results panel](./public/screenshot-results.png)

## What it does

ZeroFounder takes a rough idea and turns it into a structured launch plan. It interviews the user, shapes the idea into a product brief, creates an MVP scope, and stores project context so the agent can continue later without losing momentum.

## Why it matters

Builders often lose context as ideas grow. ZeroFounder is designed to help users move without starting over by keeping their project history, decisions, and next steps available across sessions.

## Key features

- Idea intake and guided interview flow.
- AI-generated product brief.
- MVP scoping and next-step planning.
- Persistent project memory on 0G.
- Clean UI built for a fast hackathon demo.

## Architecture

ZeroFounder is built with the Next.js App Router and a simple component-based structure.

- `app/page.tsx` handles the main page.
- `app/layout.tsx` defines the root layout and metadata.
- `app/globals.css` sets the base styling.
- `components/IdeaForm.tsx` contains the interactive prompt input and button.
- `components/ResultsPanel.tsx` displays the launch plan output.

The app is intentionally simple so judges can understand the workflow quickly, while still showing a real product structure.

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm, pnpm, or yarn

### Install

```bash
git clone https://github.com/jj199-lab/zerofounder.git
cd zerofounder
npm install
