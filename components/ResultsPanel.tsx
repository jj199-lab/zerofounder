type ResultsPanelProps = {
  plan: string;
  onReset: () => void;
};

export default function ResultsPanel({ plan, onReset }: ResultsPanelProps) {
  const lines = plan ? plan.split("\n").filter(Boolean) : [];

  return (
    <div className="panel">
      <h2>Launch plan</h2>
      <p className="muted">A concise plan tailored to your idea and focus.</p>

      {plan ? (
        <div className="plan-card">
          {lines.map((line, index) => (
            <div key={`${line}-${index}`} className="plan-line">
              {line}
            </div>
          ))}
          <div className="actions" style={{ marginTop: 16 }}>
            <button className="secondary" onClick={onReset}>Reset plan</button>
          </div>
        </div>
      ) : (
        <div className="plan-card muted-card">
          Your plan will appear here after you generate it.
        </div>
      )}
    </div>
  );
}
