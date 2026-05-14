import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { Loader2, LogOut, Send, ShieldCheck } from "lucide-react";
import PurpleBubbles from "../components/PurpleBubbles";
import { service } from "../data/services_data";
import {
  auth,
  db,
  googleProvider,
  missingFirebaseConfig,
} from "../lib/firebase";

const initialForm = {
  name: "",
  email: "",
  serviceId: service[0]?.id || "",
  budget: "",
  message: "",
};

const inputClasses =
  "w-full rounded-lg border border-gray-700 bg-gray-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400";

const GetService = () => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState(initialForm);

  const hasFirebaseConfig = missingFirebaseConfig.length === 0;

  useEffect(() => {
    if (!auth) {
      setAuthReady(true);
      return undefined;
    }

    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);

      if (currentUser) {
        setForm((current) => ({
          ...current,
          name: current.name || currentUser.displayName || "",
          email: current.email || currentUser.email || "",
        }));
      }
    });
  }, []);

  const selectedService = useMemo(
    () => service.find((item) => item.id === form.serviceId),
    [form.serviceId]
  );

  const handleGoogleLogin = async () => {
    if (!auth || !googleProvider) return;

    setAuthLoading(true);
    setError("");
    setSuccess("");

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(err.message || "Unable to sign in with Google.");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (!auth) return;

    setError("");
    setSuccess("");
    await signOut(auth);
    setForm(initialForm);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user || !db) return;

    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      await addDoc(collection(db, "serviceRequests"), {
        ...form,
        serviceTitle: selectedService?.title || "",
        uid: user.uid,
        userEmail: user.email || form.email,
        userName: user.displayName || form.name,
        createdAt: serverTimestamp(),
      });

      setForm({
        ...initialForm,
        name: user.displayName || "",
        email: user.email || "",
      });
      setSuccess("Service request submitted successfully.");
    } catch (err) {
      setError(err.message || "Unable to submit service request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-900 px-4 py-20 text-white sm:px-6 lg:px-8">
      <PurpleBubbles />
      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-300">
            <ShieldCheck size={18} />
            Secure service request
          </p>
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Get a Service
          </h1>
          <p className="text-base leading-7 text-gray-300 md:text-lg">
            Sign in with Google to request a project, share your requirements,
            and keep the conversation connected to your account.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-xl border border-gray-700 bg-gray-800/60 p-6 shadow-2xl shadow-black/20 backdrop-blur md:p-8"
        >
          {!hasFirebaseConfig && (
            <div className="rounded-lg border border-amber-400/40 bg-amber-500/10 p-4 text-sm text-amber-100">
              Firebase is not configured. Add the required VITE_FIREBASE_*
              environment variables before using authentication.
            </div>
          )}

          {hasFirebaseConfig && !authReady && (
            <div className="flex items-center gap-3 text-gray-300">
              <Loader2 className="animate-spin" size={20} />
              Loading authentication...
            </div>
          )}

          {hasFirebaseConfig && authReady && !user && (
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
              <h2 className="mb-3 text-2xl font-bold">Sign in to continue</h2>
              <p className="mb-6 text-sm leading-6 text-gray-400">
                Google sign-in is required before submitting a service request.
              </p>
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={authLoading}
                className="flex w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 font-semibold text-gray-900 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {authLoading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <span className="text-lg font-bold">G</span>
                )}
                Continue with Google
              </button>
            </div>
          )}

          {hasFirebaseConfig && authReady && user && (
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <aside className="rounded-lg border border-gray-700 bg-gray-950/50 p-5">
                <div className="mb-5 flex items-center gap-4">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt=""
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold">
                      {(user.displayName || user.email || "U").charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-semibold">
                      {user.displayName || "Signed in user"}
                    </p>
                    <p className="truncate text-sm text-gray-400">
                      {user.email}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleSignOut}
                  className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-red-400 hover:text-red-300"
                >
                  <LogOut size={18} />
                  Sign out
                </button>
              </aside>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Name
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={`${inputClasses} mt-2`}
                      required
                    />
                  </label>
                  <label className="block text-sm font-medium text-gray-300">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`${inputClasses} mt-2`}
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Service
                    <select
                      name="serviceId"
                      value={form.serviceId}
                      onChange={handleChange}
                      className={`${inputClasses} mt-2`}
                      required
                    >
                      {service.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-gray-300">
                    Budget
                    <input
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="Example: $500"
                      className={`${inputClasses} mt-2`}
                      required
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-gray-300">
                  Project details
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell me what you need, timeline, and any important details."
                    className={`${inputClasses} mt-2 resize-none`}
                    required
                  />
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <Send size={20} />
                  )}
                  Submit request
                </button>
              </form>
            </div>
          )}

          {error && <p className="mt-5 text-sm text-red-300">{error}</p>}
          {success && <p className="mt-5 text-sm text-green-300">{success}</p>}
        </motion.section>
      </div>
    </main>
  );
};

export default GetService;
