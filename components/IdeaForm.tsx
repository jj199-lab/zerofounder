"use client";

import { useEffect, useMemo, useState } from "react";

type IdeaFormProps = {
  onGenerate: (plan: string) => void;
};

export default function IdeaForm({ onGenerate }: IdeaFormProps) {
  const [idea, setIdea] = useState("");
  const [focus, setFocus] = useState("");

  useEffect(() => {
    const savedIdea = window.localStorage.getItem("zerofounder-idea");
    const savedFocus = window.localStorage.getItem("zerofounder-focus");
    if (savedIdea) setIdea(savedIdea);
    if (savedFocus) setFocus(savedFocus);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("zerofounder-idea", idea);
  }, [idea]);

  useEffect(() => {
    window.localStorage.setItem("zerofounder-focus", focus);
  }, [focus]);

  const suggestions = useMemo(() => {
    if (!idea.trim()) return ["AI coworking app", "Micro-SaaS for creators", "Local marketplace"];
    return [
      `${idea.trim()} for indie builders`,
      `${idea.trim()} with strong onboarding`,
      `${idea.trim()} that ships in 30 days`
    ];
  }, [idea]);

  const handleSubmit = () => {
    const trimmedIdea = idea.trim();
    if (!trimmedIdea) return;

    const plan = [
      `Product concept: ${trimmedIdea}`,
      `Primary focus: ${focus.trim() || "Fast validation and user value"}`,
      "",
      "Launch plan",
      "1. Positioning — define one sharp promise and a single user story.",
      "2. MVP — build the smallest experience that proves the value quickly.",
      "3. Validation — talk to 5-10 target users and refine the first-run experience.",
      "4. Launch — prepare your landing page, onboarding, pricing, and support notes."
    ].join("\n");

    onGenerate(plan);
  };

  const handleClear = () => {
    setIdea("");
    setFocus("");
    window.localStorage.removeItem("zerofounder-idea");
    window.localStorage.removeItem("zerofounder-focus");
  };

  return (
    <div className="panel">
      <h2>Shape your idea</h2>
      <p className="muted">Describe your rough concept and ZeroFounder will turn it into a launch-ready plan.</p>

      <label htmlFor="idea">What are you building?</label>
      <textarea
        id="idea"
        placeholder="Example: A calm AI journaling app for busy founders"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
      />

      <label htmlFor="focus" style={{ marginTop: 14 }}>What matters most right now?</label>
      <input
        id="focus"
        placeholder="Example: user trust, retention, or simple onboarding"
        value={focus}
        onChange={(event) => setFocus(event.target.value)}
      />

      <div className="tags">
        {suggestions.map((item) => (
          <span className="tag" key={item}>{item}</span>
        ))}
      </div>

      <div className="actions">
        <button onClick={handleSubmit}>Generate launch plan</button>
        <button className="secondary" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
