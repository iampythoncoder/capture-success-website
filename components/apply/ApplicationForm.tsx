"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  applicationConfigs,
  applicationTypeOrder,
  type ApplicationType
} from "@/data/applications";
import {
  buildApplicationMailto,
  type ApplicationDraftFields
} from "@/lib/buildApplicationMailto";
import { ArrowUpRightIcon } from "../Icons";
import { Container } from "../ui/Container";
import { FormField } from "./FormField";
import styles from "./ApplicationForm.module.css";

type ApplicationFormProps = {
  initialType: ApplicationType;
};

const formValue = (formData: FormData, name: string) =>
  String(formData.get(name) ?? "").trim();

export function ApplicationForm({ initialType }: ApplicationFormProps) {
  const [applicationType, setApplicationType] = useState<ApplicationType>(initialType);
  const [status, setStatus] = useState("");
  const intentOptionsRef = useRef<HTMLDivElement>(null);
  const config = applicationConfigs[applicationType];

  useEffect(() => {
    const options = intentOptionsRef.current;
    const selectedOption = options?.querySelector<HTMLElement>(
      `[data-application-type="${applicationType}"]`
    );

    if (!options || !selectedOption || !window.matchMedia("(max-width: 720px)").matches) {
      return;
    }

    const targetLeft =
      selectedOption.offsetLeft - (options.clientWidth - selectedOption.offsetWidth) / 2;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    options.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: reduceMotion ? "auto" : "smooth"
    });
  }, [applicationType]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields: ApplicationDraftFields = {
      fullName: formValue(formData, "fullName"),
      email: formValue(formData, "email"),
      schoolOrOrganization: formValue(formData, "schoolOrOrganization"),
      location: formValue(formData, "location"),
      currentRole: formValue(formData, "currentRole"),
      relevantLink: formValue(formData, "relevantLink"),
      primaryDetail: formValue(formData, "primaryDetail"),
      focus: formValue(formData, "focus"),
      evidence: formValue(formData, "evidence")
    };

    const draftUrl = buildApplicationMailto({ type: applicationType, fields });
    setStatus("Your email draft is opening. Review it, then press Send.");
    window.location.assign(draftUrl);
  };

  return (
    <form className={styles.formSection} onSubmit={handleSubmit}>
      <Container className={styles.formLayout}>
        <aside className={styles.applicationRail}>
          <fieldset className={styles.intentPicker}>
            <legend>Application type</legend>
            <div className={styles.intentOptions} ref={intentOptionsRef}>
              {applicationTypeOrder.map((type) => {
                const option = applicationConfigs[type];

                return (
                  <label
                    className={`${styles.intentOption} ${
                      applicationType === type ? styles.intentOptionActive : ""
                    }`.trim()}
                    data-application-type={type}
                    key={type}
                  >
                    <input
                      type="radio"
                      name="intent"
                      value={type}
                      checked={applicationType === type}
                      onChange={() => {
                        setApplicationType(type);
                        setStatus("");
                      }}
                    />
                    <span>{option.label}</span>
                    <b>{option.title}</b>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className={styles.draftSteps}>
            <p>What happens next</p>
            <ol>
              <li>
                <span>01</span>
                Complete the fields
              </li>
              <li>
                <span>02</span>
                Your email draft opens
              </li>
              <li>
                <span>03</span>
                Review and press Send
              </li>
            </ol>
          </div>
        </aside>

        <section
          className={styles.formPanel}
          aria-labelledby="application-form-heading"
        >
          <header className={styles.formHeader}>
            <p>{config.label} application</p>
            <h2 id="application-form-heading">{config.title}</h2>
            <span>{config.summary}</span>
          </header>

          <div className={styles.fieldGrid}>
            <FormField
              name="fullName"
              label="Full name"
              placeholder="Your name"
              autoComplete="name"
              required
            />
            <FormField
              name="email"
              label="Email"
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              required
            />
            <FormField
              name="schoolOrOrganization"
              label="School or organization"
              placeholder="Where you study or work"
              autoComplete="organization"
              required
            />
            <FormField
              name="location"
              label="Location / timezone"
              placeholder="City, state or timezone"
              autoComplete="address-level2"
              required
            />
            <FormField
              name="currentRole"
              label="Current role"
              placeholder="Student, founder, engineer…"
              required
            />
            <FormField
              name="relevantLink"
              label="Relevant link"
              placeholder="Portfolio, LinkedIn, website, or deck"
              type="url"
            />
            <div className={styles.dynamicFields} key={applicationType}>
              <FormField
                name="primaryDetail"
                label={config.detailLabel}
                placeholder={config.detailPlaceholder}
                required
                wide
              />
              <FormField
                name="focus"
                label={config.focusLabel}
                placeholder={config.focusPlaceholder}
                required
                multiline
                wide
              />
              <FormField
                name="evidence"
                label={config.evidenceLabel}
                placeholder={config.evidencePlaceholder}
                required
                multiline
                wide
              />
            </div>
          </div>

          <div className={styles.submitRow}>
            <div>
              <p>Nothing is sent automatically.</p>
              <span aria-live="polite">{status}</span>
            </div>
            <button className={styles.submitButton} type="submit">
              <span>Open email draft</span>
              <ArrowUpRightIcon />
            </button>
          </div>
        </section>
      </Container>
    </form>
  );
}
