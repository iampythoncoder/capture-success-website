"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { SITE } from "@/lib/site";

type FieldKind = "text" | "email" | "area";

type Field = {
  id: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  hint?: string;
};

type Track = {
  id: "founder" | "builder" | "partner";
  kind: string;
  title: string;
  blurb: string;
  fields: Field[];
};

const SHARED: Field[] = [
  { id: "name", label: "Full name", kind: "text", required: true },
  { id: "email", label: "Email", kind: "email", required: true },
  { id: "school", label: "School or organization", kind: "text", required: true },
  { id: "location", label: "Location / timezone", kind: "text", required: true },
];

const TRACKS: Track[] = [
  {
    id: "founder",
    kind: "Founder",
    title: "Submit your startup",
    blurb:
      "Tell us what you are building, what you have tested, and where the team needs help.",
    fields: [
      ...SHARED,
      { id: "role", label: "Current role", kind: "text", required: true },
      { id: "link", label: "Relevant link", kind: "text", hint: "Site, deck, demo — optional" },
      { id: "startup", label: "Startup name", kind: "text", required: true },
      { id: "problem", label: "What problem are you solving?", kind: "area", required: true },
      { id: "built", label: "What have you built or tested?", kind: "area", required: true },
      { id: "help", label: "Where does the team need help?", kind: "area", required: true },
    ],
  },
  {
    id: "builder",
    kind: "Builder",
    title: "Join a startup team",
    blurb:
      "Tell us what you can already do and the kind of company you want to work on.",
    fields: [
      ...SHARED,
      { id: "skills", label: "What can you build or do?", kind: "area", required: true, hint: "Design, code, sales, research, ops" },
      { id: "link", label: "Portfolio or GitHub", kind: "text", hint: "Optional" },
      { id: "interest", label: "What kind of company interests you?", kind: "area", required: true },
      { id: "hours", label: "Hours per week you can commit", kind: "text", required: true },
    ],
  },
  {
    id: "partner",
    kind: "Partner",
    title: "Support a team",
    blurb:
      "Mentorship, space, resources, or funding — tell us what you can offer student ventures.",
    fields: [
      ...SHARED,
      { id: "org", label: "Organization and your role", kind: "text", required: true },
      { id: "offer", label: "What can you offer?", kind: "area", required: true, hint: "Mentorship, venue, services, funding" },
      { id: "why", label: "Why student ventures?", kind: "area" },
    ],
  },
];

export default function ApplyForm() {
  const params = useSearchParams();
  const requested = params.get("type");

  const initial = useMemo(() => {
    const found = TRACKS.findIndex((t) => t.id === requested);
    return found === -1 ? 0 : found;
  }, [requested]);

  const [active, setActive] = useState(initial);
  const [values, setValues] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState(false);

  useEffect(() => setActive(initial), [initial]);

  const track = TRACKS[active];

  const missing = track.fields.filter(
    (f) => f.required && !values[`${track.id}:${f.id}`]?.trim(),
  );
  const ready = missing.length === 0;

  const set = (id: string, v: string) =>
    setValues((prev) => ({ ...prev, [`${track.id}:${id}`]: v }));
  const get = (id: string) => values[`${track.id}:${id}`] ?? "";

  const openDraft = () => {
    setTouched(true);
    if (!ready) return;

    const lines = track.fields
      .map((f) => {
        const v = get(f.id).trim();
        return v ? `${f.label}\n${v}` : null;
      })
      .filter(Boolean)
      .join("\n\n");

    const subject = `${track.kind} application — ${get("name") || "Capture Success"}`;
    const body = `${track.kind.toUpperCase()} APPLICATION\n\n${lines}\n\n—\nSubmitted via ${SITE.domain}`;

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      {/* Track picker */}
      <div>
        <p className="t-kicker mb-3">Application type</p>
        <div className="flex gap-2 lg:flex-col">
          {TRACKS.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  setActive(i);
                  setTouched(false);
                }}
                className="flex-1  border px-4 py-3 text-left transition-colors duration-200 lg:flex-none"
                style={{
                  borderColor: on ? "var(--color-blue-deep)" : "var(--color-edge)",
                  background: on ? "var(--color-blue-deep)" : "#fff",
                  color: on ? "#fff" : "var(--color-ink)",
                }}
              >
                <span
                  className="block text-[13px] font-medium"
                  style={{ color: on ? "#9ecbff" : "var(--color-soft)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1.5 block text-[15px] font-semibold">
                  {t.kind}
                </span>
                <span
                  className="mt-0.5 hidden text-[13px] lg:block"
                  style={{ color: on ? "#9ecbff" : "var(--color-soft)" }}
                >
                  {t.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form */}
      <div className="card p-6">
        <p className="t-kicker">{track.kind} application</p>
        <h2 className="t-h2 mt-1.5 text-[24px]">
          {track.title}
        </h2>
        <p className="muted mt-2 max-w-[58ch]">{track.blurb}</p>

        <form
          className="mt-6 grid gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            openDraft();
          }}
        >
          {track.fields.map((f) => {
            const invalid =
              touched && f.required && !get(f.id).trim();
            return (
              <label
                key={f.id}
                className={f.kind === "area" ? "sm:col-span-2" : ""}
              >
                <span className="mb-2 flex items-baseline justify-between gap-3">
                  <span className="text-[13.5px] font-medium">{f.label}</span>
                  <span
                    className="text-[11px] font-medium"
                    style={{ color: invalid ? "#C0341F" : "var(--color-soft)" }}
                  >
                    {f.required ? (invalid ? "Required" : "Required") : "Optional"}
                  </span>
                </span>

                {f.kind === "area" ? (
                  <textarea
                    rows={3}
                    value={get(f.id)}
                    onChange={(e) => set(f.id, e.target.value)}
                    className="w-full resize-y  border bg-white px-3 py-2.5 text-[15px] outline-none transition-colors"
                    style={{
                      borderColor: invalid ? "#C0341F" : "var(--color-edge-2)",
                    }}
                    placeholder={f.hint ?? ""}
                  />
                ) : (
                  <input
                    type={f.kind === "email" ? "email" : "text"}
                    value={get(f.id)}
                    onChange={(e) => set(f.id, e.target.value)}
                    className="w-full  border bg-white px-3 py-2.5 text-[15px] outline-none transition-colors"
                    style={{
                      borderColor: invalid ? "#C0341F" : "var(--color-edge-2)",
                    }}
                    placeholder={f.hint ?? ""}
                  />
                )}
              </label>
            );
          })}

          <div
            className="mt-2 flex flex-wrap items-center justify-between gap-4 border-t pt-6 sm:col-span-2"
            
          >
            <p className="text-[13px]" style={{ color: "var(--color-soft)" }}>
              {touched && !ready
                ? `${missing.length} required field${missing.length === 1 ? "" : "s"} left.`
                : "Nothing is sent automatically — this opens an email draft you can review."}
            </p>
            <button type="submit" className="btn btn-primary">
              Open email draft
              <span aria-hidden>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
