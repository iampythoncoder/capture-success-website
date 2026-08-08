import styles from "./FounderCard.module.css";

type FounderCardProps = {
  index: number;
  name: string;
  role: string;
  category: "cofounder" | "board-member";
  tone?: "light" | "dark";
};

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function FounderCard({
  index,
  name,
  role,
  category,
  tone = "light"
}: FounderCardProps) {
  return (
    <li
      className={styles.card}
      data-tone={tone}
      data-reveal
      data-person-role={category}
    >
      <div className={styles.meta}>
        <span>{String(index).padStart(2, "0")}</span>
        <p>{role}</p>
      </div>
      <div className={styles.monogram} aria-hidden="true">
        {getInitials(name)}
      </div>
      <h3>{name}</h3>
    </li>
  );
}
