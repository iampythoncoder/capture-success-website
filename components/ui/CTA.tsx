import { Button } from "./Button";

type CTAProps = {
  label: string;
  title: string;
  body?: string;
  primary: { label: string; href: string; external?: boolean };
  secondary?: { label: string; href: string; external?: boolean };
};

export function CTA({ label, title, body, primary, secondary }: CTAProps) {
  return (
    <div className="cta" data-reveal>
      <div>
        <p className="eyebrow">{label}</p>
        <h3>{title}</h3>
        {body ? <p className="cta-body">{body}</p> : null}
      </div>
      <div className="cta-actions">
        <Button href={primary.href} external={primary.external} variant="inverse">
          {primary.label}
        </Button>
        {secondary ? (
          <Button href={secondary.href} external={secondary.external} variant="text">
            {secondary.label}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
