import { HiOutlineArrowRight } from "react-icons/hi";

export default function ShineButton({title}) {
  return (
    <>
      <a href="#call-to-action">
        <div className="relative inline-block group">
          <button className="relative flex items-center justify-center gap-4 px-14 py-8 bg-sky-600 text-4xl hover:bg-sky-700 text-white font-semibold rounded-full shadow-lg overflow-hidden transition duration-300">
            <span className="relative z-10 flex items-center gap-4">
              {title}
              <HiOutlineArrowRight className="text-6xl" />
            </span>
            <span className="shine"></span>
          </button>
        </div>
      </a>
    </>
  );
}
