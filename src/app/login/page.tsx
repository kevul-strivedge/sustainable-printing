"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginUser } from "@/src/services/api";
import { useAuth } from "@/src/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const fieldErrors = validate();

    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      return;
    }
    setLoading(true);
    try {
      const user = await loginUser({ email, password });
      login(user);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

    function validate() {
      const next: Record<string, string> = {};

      if (!email.trim()) {
        next.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        next.email = "Please enter a valid email.";
      }

      // No length check on login — legacy Laravel accounts may have shorter
      // passwords than today's minimum. Length strength is enforced on the
      // register form, not here. The backend decides if the password is correct.
      if (!password.trim()) {
        next.password = "Password is required.";
      }

      return next;
    }

    function clearFieldError(field: string) {
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="w-full max-w-[420px]">

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="h-1 bg-[#3d9e5f]" />
          <div className="px-8 py-8">

            <h1 className="text-[24px] font-bold text-[#292560] mb-1">Welcome back</h1>
            <p className="text-[13px] text-gray-500 mb-6">Sign in to your Sustainable Printing Co. account.</p>

            {error && (
              <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-[13px] text-red-700 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[12px] font-semibold text-[#292560] mb-1.5">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    clearFieldError("email");
                  }}
                  placeholder="you@example.com"
                  className={`w-full border rounded-lg px-3 py-2.5 text-[13px]
                  ${
                    errors.email
                      ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                      : "border-gray-300 focus:border-[#3d9e5f] focus:ring-[#3d9e5f]"
                  }
                  text-[#292560] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#292560] mb-1.5">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    clearFieldError("password");
                  }}
                  placeholder="••••••••"
                  className={`w-full border rounded-lg px-3 py-2.5 text-[13px]
                  ${
                    errors.password
                      ? "border-red-400 focus:ring-red-400 focus:border-red-400"
                      : "border-gray-300 focus:border-[#3d9e5f] focus:ring-[#3d9e5f]"
                  }
                  text-[#292560] placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors`}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#004E24] hover:bg-[#003a1b] disabled:opacity-60 text-white text-[14px] font-semibold py-3 rounded-full transition-colors mt-1"
              >
                {loading ? "Signing in…" : "Sign in"}
              </button>
            </form>

            <p className="text-center text-[13px] text-gray-500 mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-[#3d9e5f] font-semibold hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
