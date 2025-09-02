"use server";

import { Resend } from 'resend';

export type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  role: "Patient" | "Family Member" | "Healthcare Provider" | "Investor";
};

const resend = new Resend(process.env.RESEND_API_KEY);

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

  // Validate role
  const validRoles: LeadPayload["role"][] = ["Patient", "Family Member", "Healthcare Provider", "Investor"];
  if (!validRoles.includes(role as LeadPayload["role"])) {
    return { ok: false, error: "Please select a valid role." } as const;
  }

  // Type assertion after validation
  const validatedRole = role as LeadPayload["role"];

  try {
    // Send email notification to mo@neuraldrive.tech
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'Neural Drive <onboarding@resend.dev>',
      to: [process.env.TO_EMAIL || 'mo@neuraldrive.tech'],
      subject: `New Pilot Program Application - ${name}`,
      html: createEmailTemplate({ name, email, phone, role: validatedRole }),
    });

    if (error) {
      console.error('Failed to send email:', error);
      return { ok: false, error: "Failed to submit application. Please try again." } as const;
    }

    console.log('Email sent successfully:', data);
    console.log("New lead:", { name, email, phone, role, ts: new Date().toISOString() });

    return { ok: true } as const;
  } catch (error) {
    console.error('Error sending email:', error);
    return { ok: false, error: "Failed to submit application. Please try again." } as const;
  }
}

function createEmailTemplate({ name, email, phone, role }: LeadPayload): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Pilot Program Application</title>
    </head>
    <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #22c55e 0%, #10b981 100%); padding: 30px; border-radius: 16px; text-align: center; margin-bottom: 30px;">
        <div style="background: #fff; width: 60px; height: 60px; border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <span style="color: #22c55e; font-weight: bold; font-size: 24px;">N</span>
        </div>
        <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Neural Drive</h1>
        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">New Pilot Program Application</p>
      </div>

      <!-- Application Details -->
      <div style="background: #f8fafc; padding: 30px; border-radius: 16px; border: 1px solid #e2e8f0; margin-bottom: 30px;">
        <h2 style="color: #1a202c; margin: 0 0 24px 0; font-size: 24px; font-weight: 600;">Application Details</h2>
        
        <div style="margin-bottom: 20px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="color: #22c55e; margin-right: 12px; font-size: 18px;">👤</span>
            <strong style="color: #374151; font-size: 16px;">Full Name:</strong>
          </div>
          <p style="margin: 0 0 0 30px; color: #1f2937; font-size: 16px;">${name}</p>
        </div>

        <div style="margin-bottom: 20px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="color: #22c55e; margin-right: 12px; font-size: 18px;">📧</span>
            <strong style="color: #374151; font-size: 16px;">Email:</strong>
          </div>
          <p style="margin: 0 0 0 30px; color: #1f2937; font-size: 16px;">
            <a href="mailto:${email}" style="color: #22c55e; text-decoration: none;">${email}</a>
          </p>
        </div>

        <div style="margin-bottom: 20px;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="color: #22c55e; margin-right: 12px; font-size: 18px;">📱</span>
            <strong style="color: #374151; font-size: 16px;">Phone:</strong>
          </div>
          <p style="margin: 0 0 0 30px; color: #1f2937; font-size: 16px;">
            <a href="tel:${phone}" style="color: #22c55e; text-decoration: none;">${phone}</a>
          </p>
        </div>

        <div style="margin-bottom: 0;">
          <div style="display: flex; align-items: center; margin-bottom: 8px;">
            <span style="color: #22c55e; margin-right: 12px; font-size: 18px;">🏥</span>
            <strong style="color: #374151; font-size: 16px;">Role:</strong>
          </div>
          <p style="margin: 0 0 0 30px; color: #1f2937; font-size: 16px;">${role}</p>
        </div>
      </div>

      <!-- Submission Info -->
      <div style="background: #ecfdf5; padding: 20px; border-radius: 12px; border: 1px solid #d1fae5; margin-bottom: 30px;">
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="color: #22c55e; margin-right: 8px; font-size: 16px;">⏰</span>
          <strong style="color: #065f46; font-size: 14px;">Submitted:</strong>
        </div>
        <p style="margin: 0 0 0 24px; color: #047857; font-size: 14px;">${new Date().toLocaleString('en-SG', { timeZone: 'Asia/Singapore' })} (Singapore Time)</p>
      </div>

      <!-- Next Steps -->
      <div style="background: #fff; padding: 30px; border-radius: 16px; border: 1px solid #e2e8f0;">
        <h3 style="color: #1a202c; margin: 0 0 16px 0; font-size: 20px; font-weight: 600;">Next Steps</h3>
        <ul style="margin: 0; padding-left: 20px; color: #4b5563;">
          <li style="margin-bottom: 8px;">Review the application details above</li>
          <li style="margin-bottom: 8px;">Contact the applicant within 24 hours</li>
          <li style="margin-bottom: 8px;">Schedule a consultation if appropriate</li>
          <li>Follow up on pilot program enrollment</li>
        </ul>
      </div>

      <!-- Footer -->
      <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 14px; margin: 0;">
          This email was sent from the Neural Drive website pilot program form.<br>
          <strong>Neural Drive</strong> - Breakthrough brain-computer interface technology
        </p>
      </div>
    </body>
    </html>
  `;
}
