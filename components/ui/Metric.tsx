type MetricProps = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  pad?: number;
};

export function Metric({
  value,
  label,
  prefix = "",
  suffix = "",
  pad = 0
}: MetricProps) {
  const finalValue = `${prefix}${String(value).padStart(pad, "0")}${suffix}`;

  return (
    <article className="metric" data-reveal>
      <p className="metric-value">
        <span
          aria-hidden="true"
          data-counter
          data-count-to={value}
          data-prefix={prefix}
          data-suffix={suffix}
          data-pad={pad}
        >
          {`${prefix}${String(0).padStart(pad, "0")}${suffix}`}
        </span>
        <span className="sr-only">{finalValue}</span>
      </p>
      <h3>{label}</h3>
    </article>
  );
}
