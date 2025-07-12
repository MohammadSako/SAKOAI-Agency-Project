import ShineButton from "../UI/shineButton";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
  { id: 4, name: "New users annually", value: "46,000" },
];

export default function States() {
  return (
    <div className="sm:py-10 flex flex-col items-center gap-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl my-10">
          Experience You Can Trust
        </p>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-black sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <ShineButton title="BOOK A FREE CALL" bgcolor="#334B6B" textColor="white" />
    </div>
  );
}
