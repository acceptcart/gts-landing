"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { contact } from "@/src/shared/data/site-content";

type FormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name || !values.email || !values.subject || !values.message) {
      setError(contact.requiredError);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      setError(contact.emailError);
      return;
    }

    // TODO: Connect this form to the Gts CRM or preferred form endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div role="status" className="flex min-h-[580px] flex-col items-center justify-center border border-white/10 bg-surface p-8 text-center">
        <CheckCircle2 aria-hidden="true" className="size-14 text-brand" strokeWidth={1.4} />
        <h2 className="mt-7 font-heading text-3xl font-bold">{contact.successTitle}</h2>
        <p className="mt-3 max-w-md leading-7 text-white/55">{contact.successMessage}</p>
        <button
          type="button"
          onClick={() => {
            setValues(initialValues);
            setSubmitted(false);
          }}
          className="mt-8 border-b border-brand pb-1 text-sm font-semibold text-brand"
        >
          {contact.sendAnother}
        </button>
      </div>
    );
  }

  const fields: Array<{ key: keyof FormValues; required?: boolean; type?: string }> = [
    { key: "name", required: true },
    { key: "company" },
    { key: "email", required: true, type: "email" },
    { key: "phone", type: "tel" },
    { key: "subject", required: true },
  ];

  return (
    <form onSubmit={handleSubmit} noValidate className="border border-white/10 bg-surface p-6 sm:p-9">
      <h2 className="font-heading text-3xl font-bold">{contact.formTitle}</h2>
      <div className="mt-9 grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.key} className={field.key === "subject" ? "sm:col-span-2" : ""}>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em] text-white/55">
              {contact.fields[field.key]}{field.required ? " *" : ""}
            </span>
            <input
              type={field.type ?? "text"}
              value={values[field.key]}
              onChange={(event) => updateField(field.key, event.target.value)}
              required={field.required}
              placeholder={contact.placeholders[field.key]}
              className="h-13 w-full border border-white/15 bg-black px-4 text-sm text-white placeholder:text-white/25 focus:border-brand focus:outline-none"
            />
          </label>
        ))}
        <label className="sm:col-span-2">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.13em] text-white/55">
            {contact.fields.message} *
          </span>
          <textarea
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            required
            rows={6}
            placeholder={contact.placeholders.message}
            className="w-full resize-y border border-white/15 bg-black p-4 text-sm text-white placeholder:text-white/25 focus:border-brand focus:outline-none"
          />
        </label>
      </div>
      {error && <p role="alert" className="mt-5 text-sm text-brand-light">{error}</p>}
      <button type="submit" className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-3 bg-brand px-6 font-semibold text-black transition-colors hover:bg-brand-light sm:w-auto">
        {contact.submit}<ArrowRight aria-hidden="true" className="size-4" />
      </button>
    </form>
  );
}
