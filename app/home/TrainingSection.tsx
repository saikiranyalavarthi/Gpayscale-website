import Link from "next/link";
import {
  Code2,
  Cloud,
  Database,
  ShieldCheck,
  Headphones,
  TestTube2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Application Development",
    text: "Custom application development, modernization and maintenance.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    text: "Cloud strategy, migration and managed infrastructure across AWS, Azure and GCP.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    text: "Data engineering, warehousing, analytics and business intelligence.",
  },
  {
    icon: Headphones,
    title: "IT Support",
    text: "Enterprise IT support, help desk and managed network services.",
  },
  {
    icon: TestTube2,
    title: "QA & DevOps",
    text: "Quality assurance, automation testing and DevOps enablement.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    text: "Cybersecurity assessments and compliance advisory.",
  },
];

export default function ITServicesSection() {
  return (
    <section className="bg-[#f5f9ff] py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">

            <span className="text-[11px] font-extrabold tracking-[.22em] text-[#0b4dbb]">
              IT SERVICES
            </span>

            <h2 className="mt-4 font-[Manrope,sans-serif] text-4xl font-extrabold tracking-tight text-[#071a33] sm:text-5xl">
              Technology That
              <span className="text-[#0b4dbb]">
                {" "}Moves Business Forward.
              </span>
            </h2>

          </div>


          <Link
            href="/services/it-services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0b4dbb]"
          >
            View All IT Services
            <ArrowRight size={16} />
          </Link>

        </div>


        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-[22px] border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(11,77,187,.08)]"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0b4dbb]">
                  <Icon size={23} />
                </div>

                <h3 className="mt-6 text-lg font-extrabold text-[#071a33]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {service.text}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}