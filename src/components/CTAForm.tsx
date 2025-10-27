"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitLead } from "@/app/actions";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type State = { ok: boolean; error: string; submitted: boolean };

function initialState(): State { return { ok: false, error: "", submitted: false }; }

export default function CTAForm() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [state, formAction, isPending] = useActionState<State, FormData>(async (_prev: State, formData: FormData) => {
    const res = await submitLead(formData);
    if (res.ok) return { ok: true, error: "", submitted: true };
    return { ok: false, error: res.error ?? "Something went wrong", submitted: false };
  }, initialState());

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".cta-header", 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".cta-header", start: "top 80%" } 
        }
      );

      // Form animation
      gsap.fromTo(".cta-form", 
        { opacity: 0, scale: 0.95 }, 
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.8, 
          ease: "power2.out", 
          scrollTrigger: { trigger: ".cta-form", start: "top 80%" } 
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="section bg-white px-4 sm:px-6 lg:px-8" aria-label="Call to action">
      <div className="container container-xl">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="cta-header text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-100 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="caption text-green-700">Join the Pilot Program</span>
            </div>
            
            <h2 className="cta-title mb-6 max-w-[16ch] mx-auto">
              Be among the first 50 families to experience life-changing communication technology
            </h2>
            
            <p className="cta-text max-w-[60ch] mx-auto text-gray-600">
              Our pilot program offers exclusive early access with personalized support from our clinical team.
            </p>
          </div>

          {/* Form Container */}
          <div className="cta-form">
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
              
              {/* Form */}
              <form action={formAction} className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block form-label">
                      Full Name *
                    </label>
                    <input 
                      id="name"
                      className="form-input w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200" 
                      name="name" 
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block form-label">
                      Email Address *
                    </label>
                    <input 
                      id="email"
                      className="form-input w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block form-label">
                      Phone Number *
                    </label>
                    <input 
                      id="phone"
                      className="form-input w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200" 
                      name="phone" 
                      type="tel" 
                      placeholder="+65 8123 4567" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="role" className="block form-label">
                      I am a... *
                    </label>
                    <select 
                      id="role" 
                      className="form-input w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all duration-200" 
                      name="role" 
                      required
                    >
                      <option value="">Select your role</option>
                      <option>Patient</option>
                      <option>Family Member</option>
                      <option>Healthcare Provider</option>
                      <option>Investor</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button 
                    disabled={isPending} 
                    className="btn btn-primary w-full justify-center text-lg py-4" 
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
                  
                  <p className="mt-6 text-center body-small text-gray-500">
                    Your information is secure and will only be used to contact you about Neural Drive&apos;s pilot program.
                  </p>
                </div>
              </form>
              
              {/* Error State */}
              {state.error && !state.ok && (
                <div className="mt-8 rounded-xl bg-red-50 border border-red-200 text-red-700 px-6 py-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium">Submission failed</div>
                    <div className="mt-1 body-small">{state.error}</div>
                  </div>
                </div>
              )}
              
              {/* Success State */}
              {state.submitted && (
                <div className="mt-8 rounded-xl bg-green-50 border border-green-200 text-green-700 px-6 py-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="font-medium">Application submitted successfully!</div>
                    <div className="mt-1 body-small">Our clinical team will contact you within 24 hours to discuss next steps and answer any questions.</div>
                  </div>
                </div>
              )}
            </div>

            {/* Program Benefits */}
            <div className="mt-12 grid lg:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-4">24/7 Support</h3>
                <p className="body-small text-gray-600">Dedicated clinical team available around the clock</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-100 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="heading-4">Early Access</h3>
                <p className="body-small text-gray-600">Be first to experience breakthrough technology</p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl mx-auto flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="heading-4">Personal Training</h3>
                <p className="body-small text-gray-600">Customized setup and training for your needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
