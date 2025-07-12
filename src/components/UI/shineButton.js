import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function ShineButton({ title, bgcolor, textColor }) {
  return (
    <>
      <div className="relative inline-block group">
        <button
          className="relative flex items-center justify-center gap-4 py-4 px-6 
                       text-3xl hover:opacity-90 text-white font-semibold 
                       rounded-full shadow-lg overflow-hidden transition duration-300"
          style={{ backgroundColor: bgcolor, color: textColor }}
        >
          <span className="relative z-10 flex items-center gap-4">
            {title}
            <HiOutlineArrowRight className="text-4xl" />
          </span>
          <span className="shine"></span>
        </button>
      </div>
    </>
  );
}
