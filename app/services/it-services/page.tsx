import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cloud,
  Database,
  Headphones,
  ShieldCheck,
  TestTube2,
} from "lucide-react";

export const metadata = {
  title: "IT Services & Technology Solutions | GAIA Payscale",
  description:
    "Explore GAIA Payscale IT services including application development, cloud migration, managed infrastructure, data engineering, IT support, DevOps and cybersecurity.",
  alternates: {
    canonical: "/services/it-services",
  },
};

const services = [
  {
    icon: Code2,
    title: "Application Development",
    text: "Custom application development, modernization and software maintenance designed around business requirements.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    text: "Cloud strategy, migration and managed infrastructure across major cloud environments.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    text: "Data engineering, warehousing, business intelligence and analytics capabilities.",
  },
  {
    icon: Headphones,
    title: "IT Support & Help Desk",
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

export default function ITServicesPage() {
  return (
    <main>

      <section className="bg-[#071a33] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            IT Services
          </span>

          <h1 className="mt-5 max-w-5xl text-5xl font-extrabold sm:text-6xl">
            Technology Solutions
            <span className="text-blue-300">
              {" "}Built Around Your Business.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            From application development and cloud infrastructure
            to data, IT support, DevOps and cybersecurity, GAIA Payscale
            provides practical technology services for evolving
            business requirements.
          </p>

        </div>

      </section>


      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-3xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#0b4dbb]">
                    <Icon size={26} />
                  </div>

                  <h2 className="mt-7 text-xl font-extrabold text-[#071a33]">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.text}
                  </p>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      <section className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="text-4xl font-extrabold text-[#071a33]">
            Practical Technology for Real Business Requirements
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500">
            Our IT services are designed to support organizations
            throughout their technology journey, from software
            development and modernization to infrastructure,
            cloud, data and operational support.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b4dbb] px-6 py-4 text-sm font-bold text-white"
          >
            Discuss Your IT Requirement
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}