"use server";

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  role: "Patient" | "Family Member" | "Healthcare Provider" | "Investor";
};

export async function submitLead(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const role = String(formData.get("role") || "").trim();

  if (!name || !email || !phone || !role) {
    return { ok: false, error: "Please fill in all required fields." } as const;
  }

  // Basic validation
  const emailOk = /.+@.+\..+/.test(email);
  if (!emailOk) return { ok: false, error: "Please enter a valid email address." } as const;

  // Simulate persistence. Replace with DB or email provider.
  console.log("New lead:", { name, email, phone, role, ts: new Date().toISOString() });

  return { ok: true } as const;
}
