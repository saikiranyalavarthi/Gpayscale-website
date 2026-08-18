import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  FileText,
  UserCheck,
  ShieldCheck,
} from "lucide-react";

export const metadata = {
  title: "IT Staffing & Contract Payroll Services | GAIA Payscale",
  description:
    "GAIA Payscale provides IT staffing, permanent recruitment, contract staffing, contract-to-hire recruitment and contract payroll services for organizations.",
  alternates: {
    canonical: "/services/it-staffing",
  },
};

const services = [
  "Permanent IT staffing",
  "Contract staffing",
  "Contract-to-hire staffing",
  "Contract payroll management",
  "Payroll processing",
  "Statutory compliance",
  "Background verification",
  "Employee onboarding",
  "Document verification",
  "Rapid resource deployment",
  "Workforce management",
  "Technical recruitment",
];

const roles = [
  "Software Engineers",
  "QA Professionals",
  "DevOps Engineers",
  "Cloud Professionals",
  "Data Professionals",
  "Cybersecurity Professionals",
  "Network Administrators",
  "System Administrators",
  "Project Managers",
  "Technical Consultants",
];

export default function ITStaffingPage() {
  return (
    <main>

      <section className="bg-[#071a33] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            IT Staffing & Contract Payroll
          </span>

          <h1 className="mt-5 max-w-5xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            Build Your Technology
            <span className="text-blue-300">
              {" "}Workforce With Confidence.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Flexible IT staffing and contract payroll solutions designed
            to help organizations access qualified technology professionals
            while simplifying workforce administration.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0b4dbb]"
          >
            Discuss Your Staffing Requirement
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>


      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#0b4dbb]">
                Workforce Solutions
              </span>

              <h2 className="mt-4 text-4xl font-extrabold text-[#071a33]">
                Scale Your IT Team Without the Administrative Complexity
              </h2>

            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600">

              <p>
                GAIA Payscale helps organizations scale their technology
                teams through permanent, contract and contract-to-hire
                staffing models.
              </p>

              <p>
                Our staffing division supports the workforce lifecycle
                from sourcing and screening through deployment and payroll
                administration.
              </p>

              <p>
                This allows organizations to focus on technology delivery
                while we support workforce administration and resource
                requirements.
              </p>

            </div>

          </div>


          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-5"
              >

                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#0b4dbb]"
                />

                <span className="text-sm font-semibold text-slate-600">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-extrabold text-[#071a33]">
            IT Professionals We Support
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">

            {roles.map((role) => (

              <span
                key={role}
                className="rounded-full border border-blue-100 bg-white px-5 py-3 text-sm font-semibold text-slate-600"
              >
                {role}
              </span>

            ))}

          </div>

        </div>

      </section>


      <section className="bg-[#0b4dbb] py-20 text-white">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="text-4xl font-extrabold">
            Need Qualified IT Professionals?
          </h2>

          <p className="mt-5 text-white/70">
            Tell us about your staffing requirement and explore a
            suitable workforce engagement model.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0b4dbb]"
          >
            Contact GAIA Payscale
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}