import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NotFoundIllustration } from "@/components/illustrations/NotFoundIllustration";

export default function NotFound() {
  return (
    <section className="bg-white py-20 md:py-32 dark:bg-ink-900">
      <Container className="text-center">
        <figure>
          <NotFoundIllustration />
          <figcaption className="mt-3 text-xs text-ink-400 dark:text-ink-500">
            Illustration of a misplaced document representing a page that could not be found
          </figcaption>
        </figure>
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-brand-600 sm:text-sm dark:text-brand-400">
          Error 404
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-ink-900 md:text-4xl dark:text-white">
          We Couldn&apos;t Find That Page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-ink-500 dark:text-ink-400">
          The page you&apos;re looking for may have been moved or no longer exists.
        </p>
        <Button href="/" size="lg" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
