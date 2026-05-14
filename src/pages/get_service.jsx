import React from 'react'
import { useState, useEffect, useMemo } from "react";
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
}

export default GetService
 