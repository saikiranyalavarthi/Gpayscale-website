export const metadata = {
  title: "Technology Capabilities | AI, Cloud, Data & Digital Transformation",
  description:
    "Explore GAIA Payscale technology capabilities across artificial intelligence, machine learning, cloud computing, cybersecurity, data analytics, automation, robotics and software development.",
  alternates: {
    canonical: "/technology",
  },
};

const technologies = [
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "Cybersecurity",
  "Data Analytics",
  "IoT",
  "Automation",
  "Robotics",
  "Drone Technology",
  "Software Development",
  "Digital Transformation",
];

export default function TechnologyPage() {
  return (
    <main>

      <section className="bg-[#071a33] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <span className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">
            Technology Focus
          </span>

          <h1 className="mt-5 max-w-5xl text-5xl font-extrabold sm:text-6xl">
            Technology Capabilities
            <span className="text-blue-300">
              {" "}for the Future.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            We continuously develop capabilities across emerging
            technologies to support evolving business,
            workforce and engineering requirements.
          </p>

        </div>

      </section>


      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {technologies.map((technology) => (

              <div
                key={technology}
                className="rounded-2xl border border-slate-200 p-7 text-lg font-extrabold text-[#071a33] transition hover:border-[#0b4dbb] hover:text-[#0b4dbb]"
              >
                {technology}
              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}