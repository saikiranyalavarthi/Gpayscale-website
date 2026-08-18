import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-24 lg:py-32">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* VISUAL */}

          <div className="relative">

            <div className="rounded-[30px] bg-gradient-to-br from-[#07347f] via-[#0b4dbb] to-[#1677d2] p-8 shadow-[0_30px_80px_rgba(11,77,187,.2)] sm:p-10">

              <span className="text-[11px] font-extrabold tracking-[.22em] text-white/60">
                ABOUT GAIA PAYSCALE
              </span>

              <div className="mt-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white">
                <Building2 size={31} />
              </div>

              <h2 className="mt-7 max-w-md text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                One Technology Platform.
                <br />
                Multiple Capabilities.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
                Talent, digital services, professional training
                and engineering innovation working together.
              </p>

            </div>

          </div>


          {/* CONTENT */}

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-8 bg-[#0b4dbb]" />

              <span className="text-[11px] font-extrabold tracking-[.22em] text-[#0b4dbb]">
                WHO WE ARE
              </span>

            </div>


            <h2 className="font-[Manrope,sans-serif] text-4xl font-extrabold leading-tight tracking-tight text-[#071a33] sm:text-5xl">

              Bridging the Gap Between
              <span className="block text-[#0b4dbb]">
                Talent, Technology & Innovation.
              </span>

            </h2>


            <p className="mt-7 text-base leading-8 text-slate-600">
              GAIA Payscale Private Limited is a diversified
              technology enterprise headquartered in Hyderabad,
              India. We bring together IT staffing and contract
              payroll management, end-to-end IT services, hands-on
              IT training and precision drone manufacturing.
            </p>


            <p className="mt-5 text-base leading-8 text-slate-600">
              Our integrated model enables organizations to access
              skilled professionals, technology solutions, industry
              training and engineering capabilities through a
              single technology partner.
            </p>


            <div className="mt-8 space-y-4">

              {[
                "Right people",
                "Right technology",
                "Right skills",
                "Measurable business impact",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-600"
                >
                  <CheckCircle2
                    size={18}
                    className="text-[#0b4dbb]"
                  />

                  {item}

                </div>

              ))}

            </div>


            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-[#0b4dbb] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#07347f]"
            >
              Discover Our Company

              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}