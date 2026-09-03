import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-start justify-center py-20">
      <p className="t-kicker">404</p>
      <h1 className="t-hero mt-3 max-w-[14ch]">
        This page hasn&apos;t been built yet.
      </h1>
      <p className="t-lead mt-4 max-w-[44ch]">
        Plenty of things around here are still getting built — that&apos;s kind
        of the point. The page you want isn&apos;t one of them.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn btn-primary">
          Back to the homepage
        </Link>
        <Link href="/accelerator" className="btn btn-outline">
          See the accelerator
        </Link>
      </div>
    </section>
  );
}
