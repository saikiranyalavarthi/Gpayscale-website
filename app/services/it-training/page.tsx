import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "IT Training & Skill Development Programs | GAIA Payscale",
  description:
    "GAIA Payscale provides industry-oriented IT training, corporate upskilling, certification-track programs and campus-to-corporate technology training.",
  alternates: {
    canonical: "/services/it-training",
  },
};

const programs = [
  "Corporate upskilling programs",
  "Corporate reskilling programs",
  "Certification-track technical courses",
  "Campus-to-corporate training",
  "Career-oriented technology programs",
  "Hands-on project development",
  "Custom curriculum design",
  "Train-the-trainer programs",
  "Placement support",
];

const technologies = [
  "Full-Stack Development",
  "Cloud Computing",
  "Data",
  "DevOps",
  "Cybersecurity",
  "Programming",
  "Software Testing",
  "Artificial Intelligence",
];

export default function ITTrainingPage() {
  return (
    <main>

      <section className="bg-[#071a33] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <GraduationCap size={40} className="text-blue-300" />

          <span className="mt-7 block text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            IT Training & Skill Development
          </span>

          <h1 className="mt-5 max-w-5xl text-5xl font-extrabold sm:text-6xl">
            Develop Skills for the
            <span className="text-blue-300">
              {" "}Technology Industry.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Industry-oriented technology training programs designed
            for working professionals, graduates, career-switchers
            and organizations.
          </p>

        </div>

      </section>


      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2">

            <div>

              <span className="text-xs font-bold uppercase tracking-[.2em] text-[#0b4dbb]">
                Practical Learning
              </span>

              <h2 className="mt-4 text-4xl font-extrabold text-[#071a33]">
                Training That Connects Learning With Industry
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                GAIA Payscale runs structured training programs that
                combine instructor-led learning with hands-on projects.
                Programs can be delivered on-site, online or through
                hybrid formats.
              </p>

            </div>


            <div className="grid gap-3 sm:grid-cols-2">

              {programs.map((item) => (

                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-slate-200 p-4"
                >

                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#0b4dbb]"
                  />

                  <span className="text-sm font-semibold text-slate-600">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          <div className="mt-20">

            <h2 className="text-3xl font-extrabold text-[#071a33]">
              Training Areas
            </h2>

            <div className="mt-7 flex flex-wrap gap-3">

              {technologies.map((item) => (

                <span
                  key={item}
                  className="rounded-full bg-blue-50 px-5 py-3 text-sm font-bold text-[#0b4dbb]"
                >
                  {item}
                </span>

              ))}

            </div>

          </div>

        </div>

      </section>


      <section className="bg-[#0b4dbb] py-20 text-white">

        <div className="mx-auto max-w-4xl px-5 text-center">

          <h2 className="text-4xl font-extrabold">
            Build Your Technology Skills
          </h2>

          <p className="mt-5 text-white/70">
            Explore professional training, corporate upskilling
            and technology skill development programs.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0b4dbb]"
          >
            Enquire About Training
            <ArrowRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}