type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3.5 10h12M11 5.5l4.5 4.5-4.5 4.5" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function PlusIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 3.5v13M3.5 10h13" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <rect x="2.5" y="4" width="15" height="12" rx="2" />
      <path d="m3.5 5 6.5 5 6.5-5" />
    </svg>
  );
}

export function UsersIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="7.5" cy="7" r="2.5" />
      <circle cx="14" cy="8" r="2" />
      <path d="M2.8 16c.4-3.1 2-4.7 4.7-4.7s4.3 1.6 4.7 4.7M12 12.2c2.8-.7 4.6.6 5.2 3.8" />
    </svg>
  );
}

export function CompassIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" />
      <path d="m12.8 7.2-1.5 4.1-4.1 1.5 1.5-4.1 4.1-1.5Z" />
    </svg>
  );
}
