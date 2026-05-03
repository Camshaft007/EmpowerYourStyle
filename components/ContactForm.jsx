"use client";

import { useState } from "react";
import { site } from "@/data/site";

const initial = {
  name: "",
  email: "",
  phone: "",
  service: "Personal Colour Analysis",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("");
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!endpoint) {
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
      );
      window.location.href = `mailto:${site.email}?subject=Styling consultation enquiry&body=${body}`;
      return;
    }

    setStatus("Sending...");
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setForm(initial);
      setStatus("Thank you. Your enquiry has been sent and Emilia will be in touch soon.");
    } else {
      setStatus("Something went wrong. Please email hello@empoweryourstyle.nz directly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Name
          <input required name="name" value={form.name} onChange={updateField} className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-normal outline-none transition focus:border-rose" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Email
          <input required type="email" name="email" value={form.email} onChange={updateField} className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-normal outline-none transition focus:border-rose" />
        </label>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Phone
          <input name="phone" value={form.phone} onChange={updateField} className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-normal outline-none transition focus:border-rose" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-navy">
          Service
          <select name="service" value={form.service} onChange={updateField} className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-normal outline-none transition focus:border-rose">
            <option>Personal Colour Analysis</option>
            <option>Wardrobe Refresh</option>
            <option>Personal Shopping</option>
            <option>Style Confidence Session</option>
            <option>Not sure yet</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-navy">
        Tell us what you would love help with
        <textarea required name="message" value={form.message} onChange={updateField} rows={5} className="rounded-2xl border border-navy/10 bg-cream px-4 py-3 font-normal outline-none transition focus:border-rose" />
      </label>
      <button type="submit" className="min-h-12 rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:bg-ink">
        Send Enquiry
      </button>
      {status ? <p className="text-sm text-rose" role="status">{status}</p> : null}
    </form>
  );
}
