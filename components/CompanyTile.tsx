import type { CSSProperties } from "react";

type CompanyTileProps = {
  name: string;
  index: number;
};

export function CompanyTile({ name, index }: CompanyTileProps) {
  return (
    <article
      className="company-tile"
      data-reveal
      style={{ "--delay": `${index * 70}ms` } as CSSProperties}
    >
      <span>{String(index + 1).padStart(2, "0")}</span>
      <h3>{name}</h3>
    </article>
  );
}
