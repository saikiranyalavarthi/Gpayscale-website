import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Cpu,
  GraduationCap,
  Plane,
} from "lucide-react";

export const metadata = {
  title: "About GAIA Payscale | Technology & Workforce Solutions",
  description:
    "Learn about GAIA Payscale Private Limited, a Hyderabad-based technology enterprise providing IT staffing, IT services, professional training and drone manufacturing solutions.",
  alternates: {
    canonical: "/about",
  },
};

const pillars = [
  {
    icon: Users,
    title: "IT Staffing & Contract Payroll",
    text: "Flexible staffing, contract payroll, recruitment and workforce deployment solutions.",
  },
  {
    icon: Cpu,
    title: "IT Services",
    text: "Application development, cloud, data, infrastructure, IT support and cybersecurity services.",
  },
  {
    icon: GraduationCap,
    title: "IT Training",
    text: "Industry-oriented technology training for professionals, graduates and organizations.",
  },
  {
    icon: Plane,
    title: "Drone Manufacturing",
    text: "UAV design, prototyping, integration, manufacturing and technical support.",
  },
];

export default function AboutPage() {
  return (
    <main>

      {/* HERO */}

      <section className="bg-[#071a33] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            About GAIA Payscale
          </span>

          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl">
            Building Technology,
            <span className="text-blue-300">
              {" "}Talent & Innovation.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            GAIA Payscale Private Limited is a diversified technology
            enterprise headquartered in Hyderabad, India, bringing together
            talent, digital services, professional training and engineering
            innovation.
          </p>

        </div>

      </section>


      {/* ABOUT */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#0b4dbb]">
                Who We Are
              </span>

              <h2 className="mt-4 text-4xl font-extrabold text-[#071a33]">
                Bridging Talent, Technology & Innovation
              </h2>

            </div>


            <div className="space-y-5 text-base leading-8 text-slate-600">

              <p>
                GAIA Payscale Private Limited is a diversified technology
                enterprise headquartered in Hyderabad, India. We bring
                together IT staffing and contract payroll management,
                end-to-end IT services, hands-on IT training and precision
                drone manufacturing.
              </p>

              <p>
                Our integrated model enables organizations to access skilled
                professionals, technology solutions, industry training and
                engineering capabilities through a single technology partner.
              </p>

              <p>
                We work with enterprises, government organizations and
                educational institutions to bridge the gap between people,
                technology and innovation.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FOUR PILLARS */}

      <section className="bg-[#f5f9ff] py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[.2em] text-[#0b4dbb]">
              Our Capabilities
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-[#071a33]">
              Four Integrated Business Verticals
            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {pillars.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-8"
                >

                  <Icon
                    size={30}
                    className="text-[#0b4dbb]"
                  />

                  <h3 className="mt-6 text-xl font-extrabold text-[#071a33]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* MISSION */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">

          <span className="text-xs font-bold uppercase tracking-[.2em] text-[#0b4dbb]">
            Our Mission
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#071a33] sm:text-5xl">
            Empowering businesses with the right people,
            the right technology and the right skills.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-500">
            We aim to deliver reliable solutions at scale with measurable
            impact while creating long-term value for our clients.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0b4dbb] px-6 py-4 text-sm font-bold text-white"
          >
            Talk to Our Team
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}