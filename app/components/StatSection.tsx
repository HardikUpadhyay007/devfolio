import React from "react";

interface Stat {
    id: number;
    description: string;
    number: string;
}

const stats: Stat[] = [
    {
        id: 1,
        number: "120+",
        description: "Developers Showcased",
    },
    {
        id: 2,
        number: "50+",
        description: "Portfolios Shared",
    },
    {
        id: 3,
        number: "80+",
        description: "UI Components",
    },
    {
        id: 4,
        number: "11",
        description: "Templates Available",
    },
];

export default function StatSection() {
    return (
        <section className="py-16 w-full">
            <div className="mx-auto max-w-6xl grid gap-0 sm:grid-cols-2 lg:grid-cols-4 divide-x divide-gray-600 divide-opacity-50">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className="flex flex-col justify-center items-center p-6 text-center"
                    >
                        <div className="text-4xl font-bold tracking-tight text-white">
                            {stat.number}
                        </div>
                        <div className="mt-2 text-sm text-gray-300">
                            {stat.description}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
