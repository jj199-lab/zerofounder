"use client";

import { useEffect, useState } from "react";
import IdeaForm from "../components/IdeaForm";
import ResultsPanel from "../components/ResultsPanel";

export default function HomePage() {
  const [plan, setPlan] = useState("");

  useEffect(() => {
    const savedPlan = window.localStorage.getItem("zerofounder-plan");
    if (savedPlan) {
      setPlan(savedPlan);
    }
  }, []);

  useEffect(() => {
    if (plan) {
      window.localStorage.setItem("zerofounder-plan", plan);
    } else {
      window.localStorage.removeItem("zerofounder-plan");
    }
  }, [plan]);

  const handleReset = () => {
    setPlan("");
    window.localStorage.removeItem("zerofounder-plan");
  };

  return (
    <main>
      <div className="container">
        <section className="hero">
          <h1>ZeroFounder</h1>
          <p>
            ZeroFounder helps solo builders turn rough ideas into launch-ready plans with a calm,
            guided workflow that feels fast enough for a hackathon demo.
          </p>
          <div className="hero-actions">
            <button onClick={handleReset}>Start over</button>
          </div>
        </section>

        <div className="grid">
          <IdeaForm onGenerate={setPlan} />
          <ResultsPanel plan={plan} onReset={handleReset} />
        </div>
      </div>
    </main>
  );
}
