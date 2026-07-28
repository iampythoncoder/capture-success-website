import styles from "./ApplicationForm.module.css";

type FormFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: "text" | "email" | "url";
  autoComplete?: string;
  required?: boolean;
  multiline?: boolean;
  wide?: boolean;
  maxLength?: number;
};

export function FormField({
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required = false,
  multiline = false,
  wide = false,
  maxLength = multiline ? 1400 : 160
}: FormFieldProps) {
  const id = `application-${name}`;
  const fieldClassName = `${styles.field} ${wide ? styles.fieldWide : ""}`.trim();

  return (
    <div className={fieldClassName}>
      <label htmlFor={id}>
        <span>{label}</span>
        {required ? <small>Required</small> : <small>Optional</small>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          rows={6}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          maxLength={maxLength}
        />
      )}
    </div>
  );
}
