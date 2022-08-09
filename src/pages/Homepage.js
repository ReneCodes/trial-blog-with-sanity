import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <section className="flex flex-col item-center justify-center text-center h-screen">
        <h1 className="uppercase font-bold text-4xl tracking-wide mb-5 md:text-6xl lg:text-8xl">
          Rene's Blog
        </h1>
        <button>
          <Link
            to="/blog"
            className="py-2 px-6 rounded shadow text-white font-bold bg-black border-2 border-black transition-all duration-500 hover:text-black hover:bg-transparent"
          >
            Read my blog posts
          </Link>
        </button>
      </section>
    </div>
  );
}
