
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact GAIA Payscale | IT Staffing & Technology Solutions",
  description:
    "Contact GAIA Payscale for IT staffing, contract payroll, HR services, IT infrastructure, professional training and drone technology solutions in Hyderabad.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact GAIA Payscale | IT Staffing & Technology Solutions",
    description:
      "Connect with GAIA Payscale for workforce, IT and business technology solutions.",
    url: "/contact",
    type: "website",
  },
};

const requirements = [
  "IT Staffing & Recruitment",
  "Contract Payroll",
  "HR Services",
  "IT Services",
  "IT Infrastructure Support",
  "Workforce Solutions",
  "Professional Training",
  "Drone Manufacturing",
  "Other Requirements",
];

const inputClass =
  "w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#0b4dbb] focus:ring-4 focus:ring-blue-100";

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071a33] py-20 text-white sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[.2em] text-blue-300 sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Contact GAIA Payscale
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Discuss Your
            <span className="block text-blue-300 sm:inline">
              {" "}Requirement.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
            Talk to our team about IT staffing, contract payroll,
            IT services, professional training or drone technology.
            We are ready to understand your business requirements.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-xs font-semibold text-white/60">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              IT Solutions
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Workforce Solutions
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Business Growth
            </span>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">

            {/* CONTACT INFORMATION */}
            <div className="relative overflow-hidden rounded-3xl bg-[#071a33] p-7 text-white sm:p-10 lg:p-12">

              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="relative">

                <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
                  Contact Information
                </span>

                <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                  Get in Touch
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                  Have a question or business requirement?
                  Connect with our team to discuss how we
                  can support your organization.
                </p>

                <div className="mt-10 space-y-8">

                  {/* ADDRESS */}
                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300">
                      <MapPin size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Head Office
                      </p>

                      <p className="mt-2 text-sm leading-7 text-white/75">
                      Madhapur,
                        Hyderabad, Telangana 500081, India
                      </p>
                    </div>

                  </div>

                  {/* PHONE */}
                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300">
                      <Phone size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Phone
                      </p>

                      <a
                        href="tel:+914045678900"
                        className="mt-2 block break-words text-sm text-white/75 transition-colors hover:text-blue-300"
                      >
                        +91 9290934388
                      </a>
                    </div>

                  </div>

                  {/* EMAIL */}
                  <div className="flex items-start gap-4">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-blue-300">
                      <Mail size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/40">
                        Email
                      </p>

                      <a
                        href="mailto:info@gaiapayscale.com"
                        className="mt-2 block break-all text-sm text-white/75 transition-colors hover:text-blue-300"
                      >
                        info@gaiapayscale.com
                      </a>
                    </div>

                  </div>

                </div>

                {/* BOTTOM MESSAGE */}
                <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">

                  <h3 className="text-base font-bold">
                    Let&apos;s Build Something Together
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Share your business requirements with
                    our team and explore the right solutions.
                  </p>

                </div>

              </div>
            </div>

            {/* ENQUIRY FORM */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_15px_60px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">

              <div>

                <span className="text-xs font-bold uppercase tracking-[.2em] text-[#0b4dbb]">
                  Let&apos;s Connect
                </span>

                <h2 className="mt-4 text-2xl font-extrabold text-[#071a33] sm:text-3xl">
                  Send an Enquiry
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Fill in the details below and tell us
                  how we can help your business.
                </p>

              </div>

              <form
                action="/api/contact"
                method="POST"
                className="mt-8 space-y-5"
              >

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    minLength={2}
                    maxLength={100}
                    required
                    className={inputClass}
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Business Email <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your business email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClass}
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    pattern="[+]?[0-9\s()-]{10,20}"
                    maxLength={20}
                    required
                    className={inputClass}
                  />
                </div>

                {/* REQUIREMENT */}
                <div>
                  <label
                    htmlFor="requirement"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Select Requirement <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="requirement"
                    name="requirement"
                    defaultValue=""
                    required
                    className={`${inputClass} cursor-pointer text-slate-600`}
                  >
                    <option value="" disabled>
                      Choose your requirement
                    </option>

                    {requirements.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-bold text-slate-700"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    minLength={10}
                    maxLength={2000}
                    placeholder="Tell us about your business requirements..."
                    required
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b4dbb] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#07347f] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  Submit Enquiry

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <p className="text-center text-xs leading-6 text-slate-400">
                  By submitting this form, you agree to be
                  contacted regarding your enquiry.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
