"use client";

import { useActionState } from "react";
import { submitLead } from "@/app/actions";

type State = { ok: boolean; error: string; submitted: boolean };

function initialState(): State { return { ok: false, error: "", submitted: false }; }

export default function CTAForm() {
  const [state, formAction, isPending] = useActionState<State, FormData>(async (_prev: State, formData: FormData) => {
    const res = await submitLead(formData);
    if (res.ok) return { ok: true, error: "", submitted: true };
    return { ok: false, error: res.error ?? "Something went wrong", submitted: false };
  }, initialState());

  return (
    <section id="cta" className="section-y" aria-label="Call to action">
      <div className="container-w">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="h2 mb-4 dark:text-white">Join the Pilot Program</h2>
            <p className="body-lg max-w-[45ch] mx-auto dark:text-slate-300">
              Be among the first 50 families to experience life-changing communication technology.
            </p>
          </div>
          
          <div className="card p-4 sm:p-6 lg:p-8">
            <form action={formAction} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input 
                    id="name"
                    className="input w-full" 
                    name="name" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input 
                    id="email"
                    className="input w-full" 
                    name="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required 
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <input 
                    id="phone"
                    className="input w-full" 
                    name="phone" 
                    type="tel" 
                    placeholder="+65 8123 4567" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    I am a... *
                  </label>
                  <select id="role" className="input w-full" name="role" required>
                    <option value="">Select your role</option>
                    <option>Patient</option>
                    <option>Family Member</option>
                    <option>Healthcare Provider</option>
                    <option>Investor</option>
                  </select>
                </div>
              </div>

              <div>
                <button 
                  disabled={isPending} 
                  className="btn btn-primary btn-lg w-full" 
                  type="submit"
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Join Pilot Program
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-400">
                  Your information is secure and will only be used to contact you about Neural Drive&apos;s pilot program.
                </p>
              </div>
            </form>
            
            {state.error && !state.ok && (
              <div className="mt-6 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-4 text-sm flex items-start gap-3">
                <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {state.error}
              </div>
            )}
            
            {state.submitted && (
              <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-4 text-sm flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="font-medium">Application submitted successfully!</div>
                  <div className="mt-1">Our team will contact you within 24 hours to discuss next steps.</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
