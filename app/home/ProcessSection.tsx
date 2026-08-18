const steps = [
  {
    number: "01",
    title: "Understand",
    text: "Understand your business, technology and workforce requirements.",
  },
  {
    number: "02",
    title: "Design",
    text: "Define the right people, technology, training or engineering approach.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "Deploy professionals, technology services, training or engineered solutions.",
  },
  {
    number: "04",
    title: "Support",
    text: "Provide ongoing support and build a long-term professional relationship.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 lg:py-28">

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="text-[11px] font-extrabold tracking-[.22em] text-[#0b4dbb]">
            HOW WE WORK
          </span>

          <h2 className="mt-4 font-[Manrope,sans-serif] text-4xl font-extrabold text-[#071a33] sm:text-5xl">
            From Requirement
            <span className="text-[#0b4dbb]">
              {" "}to Impact.
            </span>
          </h2>

        </div>


        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (

            <div
              key={step.number}
              className="relative rounded-2xl border border-slate-200 p-7"
            >

              <span className="text-sm font-extrabold text-[#0b4dbb]">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-extrabold text-[#071a33]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {step.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}