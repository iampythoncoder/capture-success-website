import { Metric } from "../ui/Metric";
import { Section } from "../ui/Section";

const metrics = [
  { value: 10, suffix: "+", label: "Featured companies" },
  { value: 20, prefix: "$", suffix: "K+", label: "Raised across the network" },
  { value: 2, suffix: "nd", label: "VisioCourt at DECA States" }
] as const;

export function Metrics() {
  return (
    <Section
      id="metrics"
      index="04"
      label="Metrics"
      title="The network so far."
      className="metrics-section"
      tone="dark"
    >
      <div className="metrics-grid" data-stagger>
        {metrics.map((metric) => (
          <Metric {...metric} key={metric.label} />
        ))}
      </div>
    </Section>
  );
}
