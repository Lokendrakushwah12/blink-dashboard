"use client";
import GoogleIcon from "@/components/assets/GoogleIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/Spinner";
import { Eye, EyeOff, Flower } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  const handleLogin = async () => {
    try {
      setLoading(true);
      
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("An unknown error occurred");
        }
      } else {
        alert("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("An unknown error occurred");
        }
      } else {
        alert("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col items-center justify-center gap-6 text-center text-foreground">
        <Link rel="noreferrer" href="/">
          <div className="flex items-center gap-1">
            <Flower strokeWidth={1.5} className="h-6 w-auto text-primary" />
            <span className="text-xl font-medium">blink-dashboard</span>
          </div>
        </Link>

        <Button
          variant="outline"
          className="w-full font-normal text-muted-foreground"
          size="sm"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <GoogleIcon />
          Continue with Google
        </Button>

        <div className="flex w-full items-center justify-center gap-4">
          <hr className="w-full" />
          <p className="text-nowrap text-sm text-muted-foreground">or</p>
          <hr className="w-full" />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="input-01">Email</Label>
            <Input
              id="input-01"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <Label htmlFor="input-23">Password</Label>
            <div className="relative w-full">
              <Input
                id="input-23"
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
          <Button
            className="w-full text-white"
            size="sm"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <>
                Logging in...
                <Spinner />
              </>
            ) : (
              "Log in"
            )}
          </Button>
          <Link href="/auth/forgot-password">
            <p className="cursor-pointer text-sm text-muted-foreground underline hover:text-foreground">
              Forgot password?
            </p>
          </Link>
        </div>
        <hr className="w-full" />
        <div className="flex w-full items-center justify-center space-x-4 py-4">
          <div className="text-sm text-muted-foreground">
            New to blink-dashboard?&nbsp;
            <Link className="underline hover:text-foreground" href="/auth/join">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
