import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Contact GAIA Payscale | IT Staffing & Technology Solutions",
  description:
    "Contact GAIA Payscale for IT staffing, contract payroll, IT services, professional training and drone manufacturing requirements in Hyderabad.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main>

      <section className="bg-[#071a33] py-24 text-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            Contact GAIA Payscale
          </span>

          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold sm:text-6xl">
            Let&apos;s Discuss Your
            <span className="text-blue-300">
              {" "}Requirement.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Talk to our team about IT staffing, contract payroll,
            IT services, professional training or drone technology.
          </p>

        </div>

      </section>


      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* CONTACT INFO */}

            <div className="rounded-3xl bg-[#071a33] p-8 text-white sm:p-10">

              <h2 className="text-2xl font-extrabold">
                Get in Touch
              </h2>

              <div className="mt-10 space-y-7">

                <div className="flex gap-4">

                  <MapPin className="text-blue-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Head Office
                    </p>

                    <p className="mt-2 text-sm leading-7 text-white/70">
                      Plot No. 24, HITEC City,
                      Hyderabad, Telangana 500081, India
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <Phone className="text-blue-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Phone
                    </p>

                    <a
                      href="tel:+914045678900"
                      className="mt-2 block text-sm text-white/70"
                    >
                      +91 40 4567 8900
                    </a>
                  </div>

                </div>


                <div className="flex gap-4">

                  <Mail className="text-blue-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      Email
                    </p>

                    <p className="mt-2 text-sm text-white/70">
                      Confirm official GAIA email
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}

            <form className="rounded-3xl border border-slate-200 p-8 sm:p-10">

              <h2 className="text-2xl font-extrabold text-[#071a33]">
                Send an Enquiry
              </h2>

              <div className="mt-7 space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0b4dbb]"
                />

                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0b4dbb]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0b4dbb]"
                />

                <select
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm text-slate-500 outline-none focus:border-[#0b4dbb]"
                >
                  <option>Select Requirement</option>
                  <option>IT Staffing</option>
                  <option>Contract Payroll</option>
                  <option>IT Services</option>
                  <option>IT Training</option>
                  <option>Drone Manufacturing</option>
                </select>

                <textarea
                  rows={5}
                  placeholder="Tell us about your requirement"
                  className="w-full rounded-xl border border-slate-200 px-4 py-4 text-sm outline-none focus:border-[#0b4dbb]"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#0b4dbb] px-6 py-4 text-sm font-bold text-white hover:bg-[#07347f]"
                >
                  Submit Enquiry
                </button>

              </div>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}