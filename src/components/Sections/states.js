import Link from "next/link";
import ShineButton from "../UI/shineButton";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

export default function States() {
  return (
    <div className="sm:py-20 flex flex-col items-center gap-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mt-2 text-center text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl my-4">
          Experience You Can Trust
        </p>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-4 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-2"
            >
              <dt className="text-base/7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-2xl font-semibold tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <Link href={"#call"}>
        <ShineButton
          title="BOOK A FREE CALL"
          bgcolor="#334B6B"
          textColor="white"
        />
      </Link>
    </div>
  );
}
