import { useState, type FormEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Quotes are emailed to the business through FormSubmit (https://formsubmit.co), a free
// form-to-email service with no account or API key. The first submission ever sent triggers an
// activation email to this address; click the link in it once and every quote after that
// is delivered normally.
const QUOTE_EMAIL = "dineshkatwal202@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${QUOTE_EMAIL}`;

const SERVICES = [
  "Carpet Cleaning",
  "Floor Cleaning",
  "Air Duct Cleaning",
  "Residential Cleaning",
  "Commercial Cleaning",
  "Not sure yet",
];
const CONTACT_METHODS = ["Phone call", "Text message", "Email"] as const;
const BEST_TIMES = ["Morning", "Afternoon", "Evening", "Anytime"];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

function ChoiceGroup({
  legend,
  name,
  options,
  defaultValue,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  defaultValue: string;
}) {
  return (
    <fieldset>
      <legend className={labelClass}>{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              defaultChecked={option === defaultValue}
              className="peer sr-only"
            />
            <span className="inline-flex rounded-full border border-input px-3.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted peer-checked:border-primary peer-checked:bg-primary peer-checked:text-primary-foreground peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function QuoteDialog({
  open,
  onOpenChange,
  phone,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  phone: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  function handleOpenChange(next: boolean) {
    onOpenChange(next);
    // Reset after the close animation so the next visitor gets a fresh form.
    if (!next) setTimeout(() => setStatus("idle"), 200);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Email is optional unless it's how they want to be contacted.
    const method = data.get("Preferred contact method");
    if (method === "Email" && !data.get("email")) {
      form
        .querySelector<HTMLInputElement>("[name=email]")
        ?.setCustomValidity("Please add your email.");
      form.reportValidity();
      return;
    }

    data.set("_subject", `New quote request from ${data.get("name")}`);
    data.set("_template", "table");
    data.set("_captcha", "false");

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === "false") throw new Error("Request failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-h-[92dvh] max-w-md overflow-y-auto">
        {status === "sent" ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="h-6 w-6"
              >
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <DialogTitle className="mt-4 text-xl">Thank you!</DialogTitle>
            <DialogDescription className="mt-2">
              We got your request and will reach out at the time you picked. Need us sooner? Call{" "}
              <a href={`tel:${phone.replace(/\s|-/g, "")}`} className="font-semibold text-primary">
                {phone}
              </a>
              .
            </DialogDescription>
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Get a Free Quote</DialogTitle>
              <DialogDescription>
                Tell us how to reach you and we'll get back to you, no obligation.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Spam trap: real visitors never see or fill this. */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              <div>
                <label htmlFor="quote-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="quote-name"
                  name="name"
                  required
                  autoComplete="name"
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-phone" className={labelClass}>
                    Phone
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className={labelClass}>
                    Email <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quote-service" className={labelClass}>
                  Service needed
                </label>
                <select
                  id="quote-service"
                  name="Service"
                  defaultValue=""
                  required
                  className={fieldClass}
                >
                  <option value="" disabled>
                    Choose a service…
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </div>

              <ChoiceGroup
                legend="Best way to reach you"
                name="Preferred contact method"
                options={CONTACT_METHODS}
                defaultValue="Phone call"
              />
              <ChoiceGroup
                legend="Best time to reach you"
                name="Best time to contact"
                options={BEST_TIMES}
                defaultValue="Anytime"
              />

              <div>
                <label htmlFor="quote-notes" className={labelClass}>
                  Anything else?{" "}
                  <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="quote-notes"
                  name="Notes"
                  rows={2}
                  placeholder="Rooms, square footage, stains, etc."
                  className={fieldClass}
                />
              </div>

              {status === "error" && (
                <p
                  role="alert"
                  className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive"
                >
                  Something went wrong sending your request. Please try again or call{" "}
                  <a href={`tel:${phone.replace(/\s|-/g, "")}`} className="font-semibold underline">
                    {phone}
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Request My Free Quote"}
              </button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
