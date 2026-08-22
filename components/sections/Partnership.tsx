import Image from "next/image";
import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Partnership() {
  return (
    <section
      id="partnership"
      className="partnership"
      aria-labelledby="partnership-heading"
    >
      <Container>
        <div className="partnership-card" data-reveal>
          <div className="partnership-identity">
            <p className="eyebrow">
              <span aria-hidden="true" />
              University partnership
            </p>
            <Image
              src="/partners/nc-state-brick.png"
              alt="NC State University"
              width={540}
              height={260}
              sizes="(max-width: 720px) 112px, 128px"
            />
          </div>

          <div className="partnership-copy">
            <h2 id="partnership-heading">More paths for student founders.</h2>
            <p>
              Capture Success partners with NC State to expand hands-on business and
              entrepreneurship opportunities.
            </p>
          </div>

          <Button
            href="https://entrepreneurship.ncsu.edu/"
            variant="text"
            external
            ariaLabel="Explore NC State Innovation and Entrepreneurship (opens in a new tab)"
          >
            Explore entrepreneurship
          </Button>
        </div>
      </Container>
    </section>
  );
}
