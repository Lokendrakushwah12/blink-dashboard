import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center gap-2 text-center text-foreground">
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://github.com/lokendrakushwah12/blink-dashboard"
      >
        <div
          className="inline-flex items-center gap-2 rounded-full border border-transparent bg-secondary px-3.5 py-1.5 text-sm font-normal text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-hidden="true"
        >
          <GitHubLogoIcon />
          Stars on GitHub
        </div>
      </Link>

      <h1 className="text-4xl font-semibold tracking-tighter md:text-6xl lg:max-w-3xl lg:leading-[1.15]">
        Real-Time Data for Smarter, Safer Decisions
      </h1>

      <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-xl md:text-wrap">
        Real-time tracking, legitimacy checks, and analytics for users with
        secure insights and foster innovation.
      </p>

      <div className="flex w-full items-center justify-center space-x-4 py-4">
        <Link href="/auth/join">
          <Button size="lg" className="text-white">
            Join now
          </Button>
        </Link>
        {/* <Link href="/auth/login">
          <Button variant="outline" size="lg" className="text-foreground">
            Log in
          </Button>
        </Link> */}
      </div>
    </section>
  );
};

export default Hero;
