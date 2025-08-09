"use client";

import { useActionState } from "react";
import { submitLead } from "@/app/actions";

type State = { ok: boolean; error: string; submitted: boolean };

function initialState(): State {
  return { ok: false, error: "", submitted: false };
}

export default function CTAForm() {
  const [state, formAction, isPending] = useActionState<State, FormData>(async (_prev: State, formData: FormData) => {
    const res = await submitLead(formData);
    if (res.ok) return { ok: true, error: "", submitted: true };
    return { ok: false, error: res.error ?? "Something went wrong", submitted: false };
  }, initialState());

  return (
    <section id="cta" className="max-w-screen-xl mx-auto px-6 py-20" aria-label="Call to action">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm animate-fade-up">
        <h2 className="h2 text-slate-900">Give Your Loved One Their Voice Back</h2>
        <form action={formAction} className="mt-6 grid sm:grid-cols-2 gap-4">
          <input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3" name="name" placeholder="Your Name" required />
          <input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3" name="email" type="email" placeholder="Email Address" required />
          <input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3" name="phone" type="tel" placeholder="Phone Number" required />
          <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3" name="role" required>
            <option value="">I am a...</option>
            <option>Patient</option>
            <option>Family Member</option>
            <option>Healthcare Provider</option>
            <option>Investor</option>
          </select>
          <div className="sm:col-span-2">
            <button disabled={isPending} className="btn-primary w-full justify-center text-base font-semibold hover-elevate" type="submit">
              {isPending ? "Submitting..." : "Request Priority Access"}
            </button>
            <p className="mt-2 text-xs text-slate-500">
              Your information is secure and will only be used to contact you about Neural Drive
            </p>
          </div>
        </form>
        {state.error && !state.ok ? (
          <div className="mt-4 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">{state.error}</div>
        ) : null}
        {state.submitted ? (
          <div className="mt-4 rounded-lg bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm">
            Thank you! We&apos;ll be in touch within 24 hours.
          </div>
        ) : null}
      </div>
    </section>
  );
}
