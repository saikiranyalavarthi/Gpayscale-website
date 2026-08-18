const stats = [
  {
    value: "10+",
    title: "Years of Experience",
  },
  {
    value: "250+",
    title: "Clients Served",
  },
  {
    value: "5,000+",
    title: "IT Professionals Placed",
  },
  {
    value: "15+",
    title: "Drone Models Delivered",
  },
];

export default function StatsSection() {
  return (
    <section className="border-y border-slate-200 bg-white">

      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

        {stats.map((stat, index) => (

          <div
            key={stat.title}
            className={`px-6 py-9 text-center ${
              index > 0
                ? "border-l border-slate-200"
                : ""
            }`}
          >

            <strong className="block font-[Manrope,sans-serif] text-3xl font-extrabold text-[#0b4dbb] sm:text-4xl">
              {stat.value}
            </strong>

            <span className="mt-2 block text-xs font-semibold text-slate-500 sm:text-sm">
              {stat.title}
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}