import React from "react";

function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mt-28 font-sans">
        <p className="text-ellipsis basis-3/4 sm:text-7xl text-4xl font-bold tracking-tight">
          <span className="text-gray-400">Mohammad Murad,</span> Front-End
          Developer,{' '}
          <span className="text-gray-400">
            based in Amman, Jordan. help clients realize their projects through
            strategic and creative thinking.
          </span>
        </p>
      </div>
    </main>
  );
}

export default About;
