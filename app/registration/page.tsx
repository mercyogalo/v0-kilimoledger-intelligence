"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirm, setRegisterConfirm] = useState("");
  const [registerRole, setRegisterRole] = useState<"manager" | "driver">("manager");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email: loginEmail,
      password: loginPassword,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/auth/session");
    const session = await res.json();
    const role = session?.user?.role;

    if (role === "manager") {
      router.push("/dashboard/manager");
    } else if (role === "driver") {
      router.push("/dashboard/driver");
    } else {
      router.push("/");
    }
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (registerPassword !== registerConfirm) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (registerPassword.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    await new Promise((r) => setTimeout(r, 800));
    setSuccess("Account created! Signing you in...");
    await new Promise((r) => setTimeout(r, 600));

    const result = await signIn("credentials", {
      email: registerEmail,
      password: registerPassword,
      redirect: false,
    });

    if (result?.error) {
      router.push(registerRole === "manager" ? "/dashboard/manager" : "/dashboard/driver");
      return;
    }

    const res = await fetch("/api/auth/session");
    const session = await res.json();
    const role = session?.user?.role;
    router.push(role === "manager" ? "/dashboard/manager" : "/dashboard/driver");
    setLoading(false);
  }

  const inputClass =
    "w-full px-4 py-2.5 border border-gray-200 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-gray-50";

  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-white flex">

      {/* LEFT — truck background image */}
      <div
        className="hidden lg:block lg:w-1/2 relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Bottom left label */}
        <div className="absolute bottom-10 left-10 right-10">
          <div className="inline-flex items-center gap-2 bg-green-600/90 rounded-md px-4 py-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse inline-block" />
            <span className="text-white text-xs font-medium">Live export tracking active</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            Securing Kenya&apos;s agricultural export corridors — farm to port, verified.
          </p>
        </div>
      </div>

      {/* RIGHT — form panel */}
      <div className="w-full lg:w-1/2 flex flex-col min-h-screen p-8">

        {/* Logo centered at top */}
        <div className="flex flex-col items-center pt-8 pb-6">
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/180/524/original/ChatGPT_Image_Jun_15__2026__09_51_23_PM.png?1781549585"
            alt="KilimoLedger"
            className="w-14 h-14 rounded-xl object-contain mb-3"
          />
          <span
            className="text-gray-900 font-bold text-xl"
            style={{ fontFamily: "Georgia, serif" }}
          >
            KilimoLedger
          </span>
          <span className="text-gray-400 text-xs mt-1">Agricultural Export Intelligence</span>
        </div>

        {/* Scrollable form area — grows to fill space */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">

            {/* LOGIN */}
            {mode === "login" && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h2>
                <p className="text-gray-500 text-sm mb-6">Sign in to your portal</p>

                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                  <p className="text-green-800 text-xs font-medium mb-1">Demo credentials</p>
                  <p className="text-green-700 text-xs">Manager: manager@kilimo.com / manager123</p>
                  <p className="text-green-700 text-xs">Driver: driver@kilimo.com / driver123</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className={labelClass}>Email address</label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="you@kilimo.com"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-sm font-medium text-gray-700">Password</label>
                      <button type="button" className="text-xs text-green-600 hover:text-green-700">
                        Forgot password?
                      </button>
                    </div>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className={inputClass}
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-md text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                </form>
              </>
            )}

            {/* REGISTER */}
            {mode === "register" && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h2>
                <p className="text-gray-500 text-sm mb-6">Join the KilimoLedger platform</p>

                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className={labelClass}>Full name</label>
                    <input
                      type="text"
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      placeholder="Sarah Kamau"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Email address</label>
                    <input
                      type="email"
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      placeholder="you@kilimo.com"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Role</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setRegisterRole("manager")}
                        className={`py-2.5 px-4 rounded-md text-sm font-medium border transition-colors ${
                          registerRole === "manager"
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
                        }`}
                      >
                        Manager
                      </button>
                      <button
                        type="button"
                        onClick={() => setRegisterRole("driver")}
                        className={`py-2.5 px-4 rounded-md text-sm font-medium border transition-colors ${
                          registerRole === "driver"
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-600 border-gray-300 hover:border-green-400"
                        }`}
                      >
                        Driver
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Password</label>
                    <input
                      type="password"
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      placeholder="Min. 6 characters"
                      required
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Confirm password</label>
                    <input
                      type="password"
                      value={registerConfirm}
                      onChange={(e) => setRegisterConfirm(e.target.value)}
                      placeholder="••••••••"
                      required
                      className={inputClass}
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  {success && <p className="text-green-600 text-sm">{success}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-md text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Creating account..." : "Create account"}
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    By creating an account you agree to our{" "}
                    <button type="button" className="text-green-600 hover:underline">
                      Terms of Use
                    </button>{" "}
                    and{" "}
                    <button type="button" className="text-green-600 hover:underline">
                      Privacy Policy
                    </button>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Toggle pinned to bottom */}
        <div className="pt-6 pb-4">
          <div className="w-full max-w-md mx-auto">
            <div className="flex bg-gray-100 rounded-md p-1">
              <button
                type="button"
                onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === "login"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={() => { setMode("register"); setError(""); setSuccess(""); }}
                className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                  mode === "register"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Create account
              </button>
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              © 2026 KilimoLedger Ltd. Registered in Nairobi, Kenya.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}