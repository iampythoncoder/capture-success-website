import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

type HeaderProps = {
  showApplyCta?: boolean;
  currentHref?: string;
};

export function Header({ showApplyCta = true, currentHref }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="scroll-progress" aria-hidden="true" />
      <Container size="wide" className="header-inner">
        <Link className="brand" href="/" aria-label="Capture Success home">
          <Image
            src="/brand/capture-mark.png"
            alt=""
            width={30}
            height={30}
            sizes="30px"
            priority
          />
          <span>Capture Success</span>
        </Link>

        <nav className="section-tabs" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={item.href === currentHref ? "" : undefined}
              data-nav-link
              aria-current={item.href === currentHref ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {showApplyCta ? (
          <Button
            className="header-cta"
            href="/apply?type=founder"
            variant="primary"
            arrow="none"
            newTab
          >
            Apply
          </Button>
        ) : null}
      </Container>
    </header>
  );
}
