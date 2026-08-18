import Link from "next/link";
import {
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const staffingServices = [
  "Permanent IT staffing",
  "Contract staffing",
  "Contract-to-hire staffing",
  "Contract payroll management",
  "Payroll processing and statutory compliance",
  "Background verification and document checks",
  "Employee onboarding",
  "Rapid resource deployment",
  "Software engineering staffing",
  "QA and testing professionals",
  "Cloud and DevOps professionals",
  "Data and cybersecurity professionals",
];

export default function StaffingSection() {
  return (
    <section className="bg-white py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="text-[11px] font-extrabold tracking-[.22em] text-[#0b4dbb]">
              IT STAFFING & CONTRACT PAYROLL
            </span>

            <h2 className="mt-4 font-[Manrope,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#071a33] sm:text-5xl">
              Build Technology Teams
              <span className="block text-[#0b4dbb]">
                Faster & Smarter.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              We help organizations scale their technology teams
              quickly and compliantly. From individual specialist
              hires to large project teams, our staffing division
              supports sourcing, screening, deployment and payroll.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              This allows clients to focus on delivery while we
              manage workforce administration and resource
              requirements.
            </p>

            <Link
              href="/services/it-staffing"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b4dbb] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#07347f]"
            >
              Explore IT Staffing

              <ArrowRight size={16} />

            </Link>

          </div>


          <div className="rounded-[30px] bg-[#071a33] p-7 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b4dbb] text-white">
              <Users size={27} />
            </div>

            <h3 className="mt-7 text-2xl font-extrabold text-white">
              Workforce Capabilities
            </h3>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              {staffingServices.map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-2 text-xs leading-5 text-white/65"
                >
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0 text-[#5ca5ff]"
                  />

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}