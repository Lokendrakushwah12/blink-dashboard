"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/Spinner";
import { Eye, EyeOff, Flower } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Join = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const handleSignup = async () => {
    setError(null);
    setLoading(true);
    try {
      if (!name.trim()) {
        throw new Error("Name is required");
      }
      
      alert("Account created successfully!");
      // Redirect to login or dashboard here
      router.push("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to create an account.");
      } else {
        setError("Failed to create an account.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-6 px-4 text-center text-foreground sm:px-0">
        <Link rel="noreferrer" href="/">
          <div className="flex items-center gap-1">
            <Flower strokeWidth={1.5} className="h-6 w-auto text-primary" />
            <span className="text-xl font-medium">blink-dashboard</span>
          </div>
        </Link>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative w-full">
              <Input
                id="password"
                className="pe-9"
                placeholder="Password"
                type={isVisible ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          {error && (
            <p className="w-full text-left text-sm text-red-500">{error}</p>
          )}
          <Button
            className="w-full text-white"
            size="sm"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? (
              <>
                Creating account...
                <Spinner />
              </>
            ) : (
              "Create account"
            )}
          </Button>
          <div className="cursor-pointer text-sm text-muted-foreground">
            By joining you agree to the&nbsp;
            <Link
              href="/legal/terms"
              className="underline hover:text-foreground"
            >
              Terms and Conditions
            </Link>
            &nbsp;and&nbsp;
            <Link
              href="/legal/privacy"
              className="underline hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <hr className="w-full" />
        <div className="flex w-full items-center justify-center space-x-4 py-4">
          <div className="text-sm text-muted-foreground">
            Have an account?&nbsp;
            <Link
              className="underline hover:text-foreground"
              href="/auth/login"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
