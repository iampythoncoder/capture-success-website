import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/site";
import { ArrowUpRightIcon } from "./Icons";
import { Container } from "./ui/Container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <Link className="footer-brand" href="/" aria-label="Capture Success home">
            <Image src="/brand/capture-mark.png" alt="" width={40} height={40} sizes="40px" />
            <span>Capture Success</span>
          </Link>
        </div>
        <div className="footer-bottom">
          <nav aria-label="Footer navigation">
            {navItems.slice(1).map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/capturesuccessinc/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Instagram
              <ArrowUpRightIcon />
            </a>
            <a href="https://discord.gg/YM564Y9vKS" target="_blank" rel="noreferrer noopener">
              Discord
              <ArrowUpRightIcon />
            </a>
          </div>
          <p>© 2026 Capture Success Inc.</p>
        </div>
      </Container>
    </footer>
  );
}
