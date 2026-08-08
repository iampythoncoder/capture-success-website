import type { ComponentType } from "react";
import { contactRoutes } from "@/data/site";
import { CompassIcon, MailIcon, UsersIcon } from "../Icons";
import { Button } from "../ui/Button";
import { CTA } from "../ui/CTA";
import { Section } from "../ui/Section";

const routeIcons: Record<string, ComponentType> = {
  Founder: CompassIcon,
  Builder: UsersIcon,
  Partner: MailIcon
};

export function Contact() {
  return (
    <Section
      id="contact"
      index="04"
      label="Applications"
      title="Choose your path."
      intro="Submit a startup, join a team, or start a partnership conversation."
      className="contact-section"
    >
      <div
        className="contact-routes"
        data-stagger
        role="region"
        aria-label="Ways to contact Capture Success"
        tabIndex={0}
      >
        {contactRoutes.map((route, index) => {
          const Icon = routeIcons[route.label];

          return (
            <article className="contact-route" data-reveal key={route.label}>
              <div className="route-top">
                <span className="route-icon">
                  <Icon />
                </span>
                <span>0{index + 1}</span>
              </div>
              <p className="eyebrow">{route.label}</p>
              <h3>{route.title}</h3>
              <Button href={route.href} variant="text" newTab>
                {route.action}
              </Button>
            </article>
          );
        })}
      </div>

      <CTA
        label="Accelerator"
        title="Want to be in the room?"
        primary={{
          label: "View accelerator",
          href: "/accelerator"
        }}
        secondary={{
          label: "Join community",
          href: "https://discord.gg/YM564Y9vKS",
          external: true
        }}
      />
    </Section>
  );
}
