// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function PagePopup() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setOpen(true);
//     }, 500);
//   }, []);

//   if (!open) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
//       onClick={() => setOpen(false)}
//     >
//       <div
//         className="relative w-[90%] max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={() => setOpen(false)}
//           className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
//         >
//           ✕
//         </button>

//         <Image
//           src="/images/mastermind_2026.png"
//           alt="Popup"
//           width={800}
//           height={600}
//           priority
//           className="w-full h-auto"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PagePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-[90%] max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow hover:bg-gray-100 transition"
        >
          ✕
        </button>

        {/* Main Poster */}
        <Image
          src="/images/mastermind_2026.png"
          alt="SVKM Mastermind 2026"
          width={800}
          height={600}
          priority
          className="w-full h-auto"
        />

        {/* CTA Button */}
        <div className="p-4">
          <a
            href="/images/mastermind_schedule_2026.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-2 block w-full rounded-xl bg-sky-900 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-sky-800"
          >
            View Schedule
          </a>
        </div>
      </div>
    </div>
  );
}

// inline-flex items-center gap-2 bg-sky-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-sky-800 transition
