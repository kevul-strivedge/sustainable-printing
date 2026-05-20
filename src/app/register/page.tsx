"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerUser, loginUser } from "@/src/services/api";
import { useAuth } from "@/src/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    try {
      await registerUser({
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        password: form.password,
      });
      // Auto-login after successful registration
      const user = await loginUser({ email: form.email, password: form.password });
      login(user);
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-gray-50">
      <div className="w-full max-w-[460px]">

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="h-1 bg-[#3d9e5f]" />
          <div className="px-8 py-8">

            <h1 className="text-[24px] font-bold text-[#292560] mb-1">Create an account</h1>
            <p className="text-[13px] text-gray-500 mb-6">Join Sustainable Printing Co. and start ordering.</p>

            {error && (
              <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-[13px] text-red-700 font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-semibold text-[#292560] mb-1.5">First name</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    value={form.first_name}
                    onChange={handleChange}
                    placeholder="Jane"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 focus:outline-none focus:border-[#3d9e5f] focus:ring-1 focus:ring-[#3d9e5f] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-[#292560] mb-1.5">Last name</label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    value={form.last_name}
                    onChange={handleChange}
                    placeholder="Smith"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 focus:outline-none focus:border-[#3d9e5f] focus:ring-1 focus:ring-[#3d9e5f] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#292560] mb-1.5">Email address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 focus:outline-none focus:border-[#3d9e5f] focus:ring-1 focus:ring-[#3d9e5f] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#292560] mb-1.5">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Min. 8 characters"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 focus:outline-none focus:border-[#3d9e5f] focus:ring-1 focus:ring-[#3d9e5f] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[12px] font-semibold text-[#292560] mb-1.5">Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[13px] text-[#292560] placeholder-gray-400 focus:outline-none focus:border-[#3d9e5f] focus:ring-1 focus:ring-[#3d9e5f] transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#004E24] hover:bg-[#003a1b] disabled:opacity-60 text-white text-[14px] font-semibold py-3 rounded-full transition-colors mt-1"
              >
                {loading ? "Creating account…" : "Create account"}
              </button>
            </form>

            <p className="text-center text-[13px] text-gray-500 mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-[#3d9e5f] font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
