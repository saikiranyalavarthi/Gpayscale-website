import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Cpu,
  GraduationCap,
  Plane,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/70 blur-3xl" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0b4dbb 1px, transparent 1px), linear-gradient(90deg, #0b4dbb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>


      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-32">

        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT */}

          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#0b4dbb] shadow-[0_0_0_6px_rgba(11,77,187,.1)]" />

              <span className="text-[11px] font-extrabold tracking-[.22em] text-[#0b4dbb]">
                GAIA PAYSCALE PRIVATE LIMITED
              </span>

            </div>


            <h1 className="font-[Manrope,sans-serif] text-5xl font-extrabold leading-[1.03] tracking-[-.055em] text-[#071a33] sm:text-6xl lg:text-[68px]">

              People.
              <span className="text-[#0b4dbb]"> Platforms.</span>

              <br />

              Precision
              <br />

              <span className="text-[#0b4dbb]">
                in the Sky.
              </span>

            </h1>


            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              GAIA Payscale is a diversified technology enterprise
              bringing together IT staffing and contract payroll,
              IT services, professional technology training and
              precision drone manufacturing under one platform.
            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b4dbb] px-6 py-4 text-sm font-bold text-white shadow-[0_15px_35px_rgba(11,77,187,.2)] transition hover:-translate-y-1 hover:bg-[#07347f]"
              >
                Explore Our Capabilities

                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </Link>


              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-[#071a33] transition hover:border-[#0b4dbb] hover:text-[#0b4dbb]"
              >
                Talk to Our Team
              </Link>

            </div>


            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">

              {[
                "IT Staffing",
                "IT Services",
                "IT Training",
                "Drone Technology",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-500"
                >
                  <CheckCircle2
                    size={15}
                    className="shrink-0 text-[#0b4dbb]"
                  />

                  {item}
                </div>

              ))}

            </div>

          </div>


          {/* RIGHT */}

          <div className="relative mx-auto w-full max-w-[520px]">

            <div className="absolute inset-10 rounded-full bg-blue-100 blur-3xl" />

            <div className="relative grid grid-cols-2 gap-4">

              {/* Staffing */}

              <div className="group rounded-[25px] bg-[#0b4dbb] p-7 text-white shadow-[0_25px_60px_rgba(11,77,187,.22)] transition hover:-translate-y-2">

                <Users size={30} />

                <h2 className="mt-12 text-xl font-extrabold">
                  IT Staffing
                </h2>

                <p className="mt-2 text-xs leading-6 text-white/70">
                  Talent and contract payroll solutions.
                </p>

              </div>


              {/* IT */}

              <div className="mt-10 rounded-[25px] border border-slate-200 bg-white p-7 shadow-[0_25px_60px_rgba(7,26,51,.09)] transition hover:-translate-y-2">

                <Cpu
                  size={30}
                  className="text-[#0b4dbb]"
                />

                <h2 className="mt-12 text-xl font-extrabold text-[#071a33]">
                  IT Services
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Digital, cloud, data and infrastructure solutions.
                </p>

              </div>


              {/* Training */}

              <div className="-mt-2 rounded-[25px] border border-slate-200 bg-white p-7 shadow-[0_25px_60px_rgba(7,26,51,.09)] transition hover:-translate-y-2">

                <GraduationCap
                  size={30}
                  className="text-[#0b4dbb]"
                />

                <h2 className="mt-12 text-xl font-extrabold text-[#071a33]">
                  IT Training
                </h2>

                <p className="mt-2 text-xs leading-6 text-slate-500">
                  Industry-oriented technical skill development.
                </p>

              </div>


              {/* Drone */}

              <div className="rounded-[25px] bg-[#071a33] p-7 text-white shadow-[0_25px_60px_rgba(7,26,51,.18)] transition hover:-translate-y-2">

                <Plane size={30} />

                <h2 className="mt-12 text-xl font-extrabold">
                  Drone Manufacturing
                </h2>

                <p className="mt-2 text-xs leading-6 text-white/60">
                  UAV design, integration and engineering.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}